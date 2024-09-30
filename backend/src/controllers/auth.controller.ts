import { Request, Response } from "express"
import bcrypt from 'bcryptjs'
import generateToken from "../utils/generateToken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response) => {
    try {
        const {fullName , username, password, confirmPassword, gender} = req.body;

        if(!fullName || !username || !password || !confirmPassword || !gender){ 
            return res.status(400).json({error: "Please fill in all fields"});
        }

        if(password != confirmPassword){
            return res.status(400).json({error: "Passwords don't match"});
        }

        const user = await prisma.user.findUnique({
            where: {username}
        })

        if(user){
            return res.status(400).json({error: "Username already exist"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = await prisma.user.create({
            data: {
                fullName,
                username,
                password: hashedPassword,
                gender,
                profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
            }
        });

        if(newUser){
            generateToken(newUser.id, res);

            return res.status(201).json({
                id: newUser.id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            })
        }else{
            return res.status(400).json({error: "Invalid user data"});
        }
    }catch(error: any){
        console.log("Error in signup controller", error.message);
        return res.status(500).json({error: "Internal Server Error"});
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const {username , password} = req.body;
        const user = await prisma.user.findUnique({where: {username}});
        if(!user) return res.json(400).json({error: "Invalid username"});

        const isPasswordCorrect = await bcrypt.compare(password, user?.password);

        if(!isPasswordCorrect) return res.status(400).json({error: "invalid credentials"});

        generateToken(user.id, res);

        return res.status(200).json({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        })
    }catch(error: any){
        console.log("Error in login controller", error.message);
        return res.status(500).json({error: "internal server error"});
    }
}

export const logout = async (req: Request, res: Response) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        return res.status(200).json({message: "logged out successfully"});
    }catch (error: any){
        console.log("Error is logout controller", error.message);
        return res.status(500).json({error: "internal server error"});
    }
}

export const getMe = async (req:Request, res: Response) => {
    try{
        const user = await prisma.user.findUnique({where: {id: req.user.id}});

        if(!user){
            return res.status(400).json({error: "User not found"});
        }

        return res.status(200).json({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        })
    }catch(error: any){
        console.log("Error ing getMe controller", error.message);
        return res.status(500).json({error: "Internal Server Error"});
    }
}