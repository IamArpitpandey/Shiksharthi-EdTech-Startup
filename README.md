# Shiksharthi

Shiksharthi is an EdTech learning platform designed to help students learn smarter through a focused, interactive study experience. The current project is a responsive React frontend with animated UI, student authentication flows, a protected dashboard, learning resources, educational videos, and quizzes.

## Features

- Responsive landing page for the Shiksharthi learning platform
- Student registration and login screens with client-side form validation
- Protected student dashboard
- Study library for learning resources
- Educational video section with React Player support
- Quiz experience for practice and assessment
- Responsive navigation and footer with mobile menu support
- Motion-based interactions and a Tailwind CSS design system

## Tech Stack

- React 19
- React Router DOM
- Tailwind CSS
- Firebase
- Axios
- Framer Motion
- Lucide React and React Icons
- React Player
- Create React App

## Project Structure

```text
src/
├── components/       # Shared navigation, footer, and route protection
├── context/          # Authentication context
├── pages/            # Home, auth, dashboard, library, video, and quiz screens
├── App.js            # Application routes
├── index.js          # React entry point
└── index.css         # Global styles
```

## Routes

| Route | Description |
| --- | --- |
| `/` | Shiksharthi landing page |
| `/signup` | Create a student account |
| `/login` | Sign in to the platform |
| `/dashboard` | Protected student dashboard |
| `/library` | Browse learning resources |
| `/videos` | Watch educational videos |
| `/quiz` | Practice with quizzes |

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/IamArpitpandey/Shiksharthi-EdTech-Startup.git
cd Shiksharthi-EdTech-Startup
npm install
```

### Run the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm start` — start the development server
- `npm test` — run the test suite in watch mode
- `npm run build` — create an optimized production build

## Authentication and Configuration

Authentication and user state are currently handled through the React authentication context. If you connect Firebase or another backend, add the required configuration through environment variables rather than committing credentials to the repository.

## Project Status

Shiksharthi is an actively evolving frontend prototype. Backend services, persistent authentication, production content, and deployment configuration can be added as the platform develops.

## License

No license has been specified for this project yet.
