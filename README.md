# Chess Cage

Chess Cage is a React-based chess learning platform built with Vite. It combines interactive board play, chess lessons, drills, and puzzle training in a single experience for players who want to improve their understanding of the game.

## Features

- Play chess against a board interface with move handling and game state support
- Explore structured chess lessons covering core topics such as pawns, knights, bishops, rooks, queens, promotion, stalemate, material, mutual agreement, and the king
- Practice through drills and a dedicated puzzle trainer experience
- Access tools such as a board editor and analysis-oriented views
- Use authentication flows powered by Firebase and Supabase integrations

## Tech Stack

- React 19
- Vite
- React Router
- chess.js
- react-chessboard
- Firebase and Supabase
- Vitest and Testing Library

## Project Structure

- src/components — reusable UI pieces such as the navbar, board, panels, and inputs
- src/views — route-level pages for home, play, lessons, puzzles, login, signup, and settings
- src/helpers — utility functions for move formatting, puzzle generation, and rating logic
- src/firebase and src/supabase — integration points for authentication and backend services

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Development

Run the app locally:

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

### Build

Create a production build:

```bash
npm run build
```

### Testing

Run the test suite:

```bash
npm test
```

### Linting

```bash
npm run lint
```

## Deployment

The project is configured with a GitHub Pages homepage entry in package.json, so it can be deployed using a standard Vite static hosting workflow.

## Notes

This project includes Firebase and Supabase setup files, so authentication and data-backed features may require the appropriate API configuration in your local environment.

## License

No license has been explicitly declared for this project yet.