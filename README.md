# Chat App

Fullstack Discord-Inspired Chat Application
This repository is home to a sophisticated fullstack chat application that mirrors the functionality and aesthetics of Discord. Developed using an array of cutting-edge technologies, this project is built on the robust Next.js 13 framework and leverages the dynamic capabilities of React for the frontend. Real-time communication is enabled through Socket.io, ensuring instant message delivery and interaction. On the backend, Prisma serves as the object-relational mapping (ORM) tool, facilitating smooth data handling with a MySQL database, which is scalable and managed through PlanetScale. TailwindCSS and ShadcnUI are employed to craft an appealing and responsive user interface, while comprehensive authentication is handled by Clerk. This blend of technologies ensures a scalable, secure, and user-friendly chat platform.

Features
Design and Responsiveness: Aesthetically pleasing and intuitive user interface crafted with TailwindCSS and ShadcnUI, ensuring full responsiveness and mobile compatibility.
Real-Time Messaging: Instant communication between users with live message updates using Socket.io.
Private and Group Conversations: Supports one-on-one text and video conversations, along with the ability to create text, audio, and video call channels.
File Attachments: Ability to send various types of files as attachments in conversations through UploadThing.
Message Management: Real-time editing and deletion of messages for all users to see immediately.
User and Server Management: Features for server creation, customization, and member management, including kicking users or changing roles between Guest and Moderator.
Infinite Scrolling: Implements infinite loading for messages, fetching them in batches for efficient data retrieval using tanstack/query.
Unique Invitations: Generate and manage unique invite links for a full-fledged invite system.
Dark and Light Modes: Theme selection for user preference, offering light and dark modes.
Authentication: Secure user sign-in and registration process managed by Clerk.
Websocket Fallback: Uses polling as a fallback communication method, complete with alerts for connectivity issues.
Database and ORM: Utilizes Prisma for ORM capabilities and integrates with a MySQL database provided by PlanetScale for robust data management.
Prerequisites
Node version 18.x.x

Getting Started

Clone the Repository

Step 1:
```sh
git clone https://github.com/jon-jc/chat-app.git

```
2. Install Dependencies
```sh
npm install

```
3. Configure Environment Variables
```sh
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=


DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=

```
4. Use Prisma
```sh
npx prisma generate
npx prisma db push

```
5. Start
```sh
npm run dev
```



