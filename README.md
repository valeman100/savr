# Savr - Financial Freedom Made Simple

A modern, investor-ready web application for Gen Z financial services. Savr combines education, investing, and goal-based saving into one seamless platform.

## 🚀 Features

- **Academy**: Gamified micro-lessons for financial education
- **Invest Toolkit**: AI-powered investment portfolios
- **Goal-Based Saving**: Smart saving strategies with social accountability
- **Modern UI**: Clean, youth-oriented design with brand colors
- **Responsive Design**: Optimized for web applications
- **Interactive Demos**: Live previews of key features

## 🎨 Design System

### Brand Colors
- **Primary Blue**: `#0D8CFE` - Main brand color, used for primary actions and accents
- **Primary Green**: `#8FDE02` - Used for CTAs and positive actions
- **Primary Yellow**: `#F2F50E` - Used for highlights and alerts

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **UI Library**: Material-UI (MUI) v5
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Routing**: React Router DOM
- **Build Tool**: Create React App

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd savr
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── ProblemSolutionSection.tsx
│   ├── FeaturesSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── RevenueModelSection.tsx
│   ├── GoToMarketSection.tsx
│   ├── TeamSection.tsx
│   ├── FinancingSection.tsx
│   ├── VisionSection.tsx
│   └── ContactSection.tsx
├── pages/              # Page components
│   └── LandingPage.tsx
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## 🎯 Key Sections

### 1. Landing Page
- Hero section with main headline and CTA
- Presenter details with photos and roles
- Interactive hero illustration

### 2. Problem & Solution
- Key statistics on Gen Z financial behaviors
- Three-pillar solution: Academy, Invest Toolkit, Goal-Based Saving
- Infographics and visual data

### 3. Features
- Interactive tabs for each feature
- Live demos of quiz, portfolio, and goal tracking
- Gamified elements and progress indicators

### 4. How It Works
- Step-by-step user journey
- Visual flow from onboarding to dashboard
- Demo of key interactions

### 5. Revenue Model
- Multiple revenue streams visualization
- Pricing table (Free vs Pro)
- Fund allocation breakdown

### 6. Go-to-Market
- Timeline for different channels
- Partnership opportunities
- Marketing strategy overview

### 7. Team & Advisors
- Team member profiles
- Advisor recruitment section
- Contact information

### 8. Financing
- Seed round details
- Fund allocation breakdown
- Key milestones

### 9. Vision & CTA
- Long-term vision statement
- User goals and targets
- Final call-to-action

### 10. Contact & FAQ
- Contact form for inquiries
- Expandable FAQ section
- Social media links

## 🎨 Customization

### Brand Colors
Update the color scheme in `src/index.css`:
```css
:root {
  --primary-blue: #0D8CFE;
  --primary-green: #8FDE02;
  --primary-yellow: #F2F50E;
}
```

### Theme Configuration
Modify the Material-UI theme in `src/App.tsx` to match your brand requirements.

## 📱 Responsive Design

The application is designed to be responsive and works well on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

### Code Style

- Use TypeScript for all components
- Follow Material-UI best practices
- Use Framer Motion for animations
- Maintain consistent component structure

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contributing

This is a demo/pitch application. For collaboration opportunities, please contact the team through the contact form on the website.

---

**Savr** - Financial freedom made simple for the next generation. 