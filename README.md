# 🌟 STEM•SPARK

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black.svg)](https://nextjs.org/)

> Igniting curiosity, one spark at a time.

## About the Project

STEM•SPARK is an interactive, space-themed web platform designed to inspire and empower girls and women in STEM fields. Our mission is to create an engaging digital experience that makes STEM education accessible, exciting, and relatable through gamification, mentorship, and community-driven content.

## ✨ Features

### 🎯 Core Features
- **Interactive Learning Paths**: Gamified STEM learning journeys with progress tracking
- **Mentorship Platform**: Connect with STEM professionals and role models
- **Resource Library**: Curated collection of articles, tutorials, and educational content
- **Community Forum**: Safe space for discussions, questions, and peer support
- **Achievement System**: Badges and rewards for learning milestones
- **Career Explorer**: Discover diverse STEM career paths and opportunities

### 🎨 Design Philosophy
- **Space-themed UI**: Galaxy-inspired color palette with cosmic animations
- **Responsive Design**: Seamless experience across all devices
- **Accessibility First**: WCAG 2.1 AA compliant
- **Performance Optimized**: Fast load times and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom component library
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Version 18.17.0 or higher
- **pnpm**: Version 9.0.0 or higher (recommended package manager)
  - Install pnpm globally: `npm install -g pnpm`
- **Git**: For cloning the repository

### Installation

```bash
# Clone the repository
git clone https://github.com/itsmepraks/womeninstem.git
cd womeninstem

# Install dependencies using pnpm
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
# Development
pnpm dev          # Start development server on localhost:3000

# Building
pnpm build        # Create production build
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint to check code quality
pnpm type-check   # Run TypeScript compiler checks without emitting files
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory for local development:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Analytics
# NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional: Feature Flags
# NEXT_PUBLIC_ENABLE_BETA_FEATURES=false
```

**Note:** Environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## 📁 Project Structure

```
womeninstem/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── (routes)/          # App routes
├── components/            # React components
│   ├── ui/               # UI primitives
│   ├── features/         # Feature-specific components
│   └── layout/           # Layout components
├── content/              # Content management
│   ├── articles/         # Article content
│   ├── tutorials/        # Tutorial content
│   └── resources/        # Resource files
├── lib/                  # Utility functions and helpers
│   ├── utils.ts          # General utilities
│   └── constants.ts      # App constants
├── public/               # Static assets
│   ├── images/          # Image files
│   └── icons/           # Icon files
└── styles/              # Global styles
```

## 🎨 Design System

### Color Palette (Space Theme)
- **Deep Space**: `#0a0e27` - Primary background
- **Nebula Purple**: `#6366f1` - Primary accent
- **Cosmic Blue**: `#3b82f6` - Secondary accent
- **Stardust**: `#fbbf24` - Highlights and achievements
- **Aurora Green**: `#10b981` - Success states
- **Supernova Pink**: `#ec4899` - Call-to-action

## 🤝 Contributing

We welcome contributions from the community! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 Development Roadmap

- [x] Project initialization and setup
- [x] Core configuration and tooling
- [x] Interactive book system implementation
- [ ] Core UI component library
- [ ] Homepage and landing design
- [ ] Learning paths system
- [ ] Mentorship platform
- [ ] User authentication
- [ ] Content management system
- [ ] Community forum
- [ ] Achievement and gamification system

## 🐛 Troubleshooting

### Common Issues

**Issue: Module not found errors after installation**
```bash
# Solution: Clear cache and reinstall dependencies
rm -rf node_modules .next
pnpm install
```

**Issue: Port 3000 already in use**
```bash
# Solution: Run on a different port
pnpm dev -- -p 3001
```

**Issue: TypeScript errors in IDE**
```bash
# Solution: Restart TypeScript server in your IDE or run type-check
pnpm type-check
```

**Issue: pnpm not found**
```bash
# Solution: Install pnpm globally
npm install -g pnpm
# Or use corepack (Node.js 16.13+)
corepack enable
corepack prepare pnpm@latest --activate
```

**Issue: Styles not applying correctly**
```bash
# Solution: Clear Next.js cache and rebuild
rm -rf .next
pnpm dev
```

### Getting Help

If you encounter issues not covered here:
1. Check existing [GitHub Issues](https://github.com/itsmepraks/womeninstem/issues)
2. Review the [CONTRIBUTING.md](CONTRIBUTING.md) guide
3. Open a new issue with detailed information about the problem

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💫 Acknowledgments

- Built with passion to inspire the next generation of women in STEM
- Dedicated to all the trailblazing women who paved the way in science, technology, engineering, and mathematics

## 📧 Contact

**Prakriti Bista**
- GitHub: [@itsmepraks](https://github.com/itsmepraks)
- Website: [praks.me](https://praks.me)

---

⭐ Star this repository if you believe in empowering women in STEM!
