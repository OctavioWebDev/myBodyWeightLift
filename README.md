# Chi-Rho Power & Strength

A modern fitness platform offering personalized workout programs, training templates, and coaching services. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Workout Programs**: Purchase and download professionally designed workout templates
- **Program Selection Quiz**: Get personalized program recommendations
- **Secure Payments**: Integrated with Stripe for secure transactions
- **Responsive Design**: Works on all devices
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Stripe account

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/chi-rho-fitness.git
   cd chi-rho-fitness
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables
   ```bash
   cp .env.local.example .env.local
   ```
   Update the environment variables in `.env.local` with your Stripe keys and other configurations.

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app` - Application pages and routing
- `/src/components` - Reusable UI components
- `/public` - Static assets
- `/src/app/api` - API routes

## Technologies Used

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Payments**: Stripe
- **Deployment**: Vercel (recommended)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
