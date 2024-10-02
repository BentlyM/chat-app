import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import generateToken from "../utils/generateToken";
import { PrismaClient } from "@prisma/client";
import { validationResult } from "express-validator";

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: 'placeholder but you did it wrong' });
    }

    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        // Validate required fields
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: "Please fill in all fields" });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        // Check if username already exists
        const userExists = await prisma.user.findUnique({
            where: { username }
        });

        if (userExists) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Generate profile picture URL based on gender
        const profilePic = gender === "male" 
            ? `https://avatar.iran.liara.run/public/boy?username=${username}` 
            : `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Create new user in the database
        const newUser = await prisma.user.create({
            data: {
                fullName,
                username,
                password: hashedPassword,
                gender,
                profilePic
            }
        });

        // Generate a token and respond with user data
        if (newUser) {
            generateToken(newUser.id, res);

            return res.status(201).json({
                id: newUser.id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            return res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error: any) {
        console.error("Error in signup controller:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: 'placeholder nut you did it wrong' });
    }

    try {
        const { username, password } : {username: string , password: string} = req.body;
        const user = await prisma.user.findUnique({ where: { username } });

        if (!user) {
            return res.status(400).json({ error: "Invalid username" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Generate a token and respond with user data
        generateToken(user.id, res);

        return res.status(200).json({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    } catch (error: any) {
        console.error("Error in login controller:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const logout = async (req: Request, res: Response) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error: any) {
        console.error("Error in logout controller:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getMe = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findUnique({ where: { id: req.user.id } });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    } catch (error: any) {
        console.error("Error in getMe controller:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
