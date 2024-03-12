# Chat App

Overview:
This project embodies a cutting-edge web application designed to facilitate interactive and immersive communication experiences. It's built using state-of-the-art technologies to deliver a feature-rich platform, synonymous with the best practices of modern web development and real-time messaging systems.

Technologies Employed:

Frontend Development: Utilizes React alongside Next.js 13 for enhanced user interface rendering and interaction, ensuring a smooth, fast-loading experience. The design leverages TailwindCSS and ShadcnUI for creating a responsive and aesthetically pleasing layout.
Backend Integration: Features real-time communication powered by Socket.io for immediate message delivery and live interactions. Data management is streamlined with Prisma as the ORM, connected to a scalable and robust MySQL database through PlanetScale.
Security and Authentication: Secured access and user verification are managed through Clerk, providing a safe and reliable user experience.
Functionality Extensions: Incorporates UploadThing for adding file attachments in chats and employs tanstack/query for efficient, continuous message loading.
Key Features:

Responsive Design: Ensures a seamless and engaging user interface across different devices and screen sizes.

Live Messaging: Facilitates instant text, audio, and video communication, ensuring dynamic and real-time user interaction.

Diverse Conversation Options: Supports both one-on-one and group discussions, including capabilities for audio and video conferencing.

Advanced Message Management: Allows users to edit and delete messages instantly, maintaining the flow and accuracy of conversations.

Comprehensive User and Server Management: Provides tools for creating and customizing chat environments and managing user roles and permissions.

Effortless Navigation: Features infinite scrolling for easy message retrieval and uninterrupted conversation history exploration.

Customizable Invitations: Offers a secure invitation system to manage access to private or group chat spaces.

Flexible Theme Selection: Gives users the choice between light and dark modes for personalized visual comfort.

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



