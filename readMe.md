# Backend API Features
==========================

The backend API is designed to handle authentication, messaging, and user management. The API is organized into two main routes: `/api/auth` and `/api/messages`.

## Base URL
```
https://chat-app-0yco.onrender.com/login
```

## Authentication Routes
### `/api/auth`

* **Login**: `POST /login` - Handles user login with validation using `loginValidators()`.
* **Logout**: `POST /logout` - Handles user logout.
* **Signup**: `POST /signup` - Handles user signup with validation using `signupValidators()`.

## Protected Routes
These routes require authentication using the `protectRoute` middleware.

### `/api/messages`

* **Get User Profile**: `GET /me` - Returns the current user's profile information.
* **Get Conversations**: `GET /conversations` - Returns a list of conversations for the current user.
* **Get Messages**: `GET /:id` - Returns messages for a specific conversation ID.
* **Send Message**: `POST /send/:id` - Sends a new message to a specific conversation ID.

## Middleware
* **Protect Route**: `protectRoute` - Verifies user authentication for protected routes.
* **Login Validators**: `loginValidators()` - Validates user login input.
* **Signup Validators**: `signupValidators()` - Validates user signup input.

# Messaging App Frontend
==========================

The messaging app frontend is designed to provide a seamless and intuitive user experience for sending and receiving messages.

## Features
### Messaging

* **Send Messages**: Send new messages to individual conversations or start a new conversation with a user.
* **Receive Messages**: Receive real-time updates of new messages in conversations.
* **Conversation List**: View a list of all conversations, including unread messages and conversation participants.
* **Message Threads**: View individual message threads, including all messages exchanged in a conversation.

## User Profile
### Profile Information

* **User  Profile**: View and edit user profile information, including profile picture and bio.

## Authentication
### Login and Signup

* **Login**: Log in to the app using username and password.
* **Signup**: Create a new account and sign up for the app.

## UI Components
### Conversations List
* **Conversation Item**: Displays a single conversation, including conversation name, last message, and unread message count.

### Message Thread
* **Message Item**: Displays a single message, including message text, sender, and timestamp.

### Profile Page
* **Profile Card**: Displays user profile information, including profile picture, bio, and username.

This Markdown file provides a high-level overview of the features and components of your messaging app frontend. Let me know if you'd like me to elaborate on any of these points or add anything else!
