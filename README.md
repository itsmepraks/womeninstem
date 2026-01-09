# STEM•SPARK

> A learning platform for women in STEM.

## About the Project

STEM•SPARK is a web platform designed to support women in STEM fields through structured learning, mentorship connections, and community forums.

## Features

### Core Features
- **Learning Paths**: Structured STEM courses with progress tracking
- **Mentorship Platform**: Connect with STEM professionals
- **Resource Library**: Curated articles, tutorials, and educational content
- **Community Forum**: Discussions, questions, and peer support
- **Progress Tracking**: Monitor learning milestones
- **Career Resources**: Information about STEM career paths

### Design
- **Responsive**: Works across all devices
- **Accessible**: WCAG 2.1 AA compliant
- **Performance**: Fast load times and smooth interactions

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **State Management**: React Context + Hooks
- **Package Manager**: npm/yarn

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/itsmepraks/womeninstem.git
cd womeninstem

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

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

## Contributing

We welcome contributions from the community. Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Development Roadmap

- [x] Project initialization and setup
- [x] Core UI component library
- [x] Homepage and page structure
- [ ] Learning paths system
- [ ] Mentorship platform
- [ ] User authentication
- [ ] Content management system
- [ ] Community forum
- [ ] Progress tracking system

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Built to support women pursuing careers in science, technology, engineering, and mathematics.

## Contact

**Prakriti Bista**
- GitHub: [@itsmepraks](https://github.com/itsmepraks)
- Website: [praks.me](https://praks.me)

---

Star this repository if you find it helpful!
