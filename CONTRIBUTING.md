# Contributing to STEM•SPARK

Thank you for your interest in contributing to STEM•SPARK! 🌟 We're excited to have you join our mission to empower girls and women in STEM through interactive learning and community building.

This document provides guidelines and instructions for contributing to the project. Please take a moment to review these guidelines to make the contribution process smooth and effective for everyone involved.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Testing](#testing)
- [Documentation](#documentation)
- [Community](#community)

## 🤝 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. We are committed to providing a welcoming and inclusive environment for all contributors, regardless of background or identity.

### Our Standards

- **Be respectful and inclusive** in all interactions
- **Be collaborative** and open to feedback
- **Be constructive** when giving feedback
- **Focus on what is best** for the community and project
- **Show empathy** towards other community members

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17.0 or higher
- **npm** 9.0.0 or higher (or **pnpm** if preferred)
- **Git** for version control
- A code editor (we recommend **VS Code** with the following extensions):
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

### First-Time Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/womeninstem.git
   cd womeninstem
   ```

3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/itsmepraks/womeninstem.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

5. **Create a branch** for your work:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

## 💻 Development Setup

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your changes in real-time.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Project Structure

```
womeninstem/
├── app/                    # Next.js App Router pages and layouts
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   └── book/             # Book-specific components
├── content/              # Content files (MDX, JSON)
├── data/                 # Static data files
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and helpers
├── public/               # Static assets
├── types/                # TypeScript type definitions
└── styles/               # Global styles (if needed)
```

## 🎯 How to Contribute

### Types of Contributions

We welcome various types of contributions:

1. **🐛 Bug Fixes** - Fix issues and improve stability
2. **✨ New Features** - Add new functionality
3. **📝 Documentation** - Improve or add documentation
4. **🎨 Design** - Enhance UI/UX
5. **♿ Accessibility** - Improve accessibility features
6. **⚡ Performance** - Optimize performance
7. **🧪 Tests** - Add or improve tests
8. **🌐 Translations** - Add internationalization support

### Finding Issues to Work On

- Check the [Issues](https://github.com/itsmepraks/womeninstem/issues) page
- Look for issues labeled `good first issue` or `help wanted`
- Comment on the issue to let others know you're working on it
- Ask questions if anything is unclear

### Proposing New Features

Before working on a new feature:

1. **Open an issue** to discuss the feature
2. **Wait for feedback** from maintainers
3. **Get approval** before starting significant work
4. **Reference the issue** in your pull request

## 🔄 Pull Request Process

### Before Submitting

1. **Sync with upstream** to avoid conflicts:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Test your changes** thoroughly:
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

3. **Update documentation** if needed

4. **Add tests** for new features

### Submitting a Pull Request

1. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request** on GitHub with:
   - **Clear title** describing the change
   - **Detailed description** of what and why
   - **Reference to related issues** (e.g., "Fixes #123")
   - **Screenshots** for UI changes
   - **Testing instructions** for reviewers

3. **Wait for review** and address feedback promptly

4. **Keep your PR updated** with the main branch

### PR Requirements

- ✅ All tests pass
- ✅ No ESLint errors
- ✅ TypeScript type check passes
- ✅ Code follows style guidelines
- ✅ Documentation is updated
- ✅ Commit messages follow conventions
- ✅ PR description is complete

## 📐 Code Style Guidelines

### TypeScript

- **Use TypeScript** for all new code
- **Define types** for all props, functions, and complex data
- **Avoid `any` type** - use proper types or `unknown`
- **Use interfaces** for object types
- **Export types** when they might be reused

```typescript
// Good ✅
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

// Avoid ❌
const Button = (props: any) => { ... }
```

### React Components

- **Use functional components** with hooks
- **Use TypeScript** for prop types
- **Keep components focused** - single responsibility
- **Extract reusable logic** into custom hooks
- **Use proper naming** - PascalCase for components

```typescript
// Good ✅
export function Button({ variant, onClick, children }: ButtonProps) {
  return (
    <button className={cn('btn', `btn-${variant}`)} onClick={onClick}>
      {children}
    </button>
  );
}
```

### Styling

- **Use Tailwind CSS** for styling
- **Follow mobile-first** approach
- **Use the `cn()` utility** for conditional classes
- **Follow the design system** - use defined colors and spacing
- **Avoid inline styles** unless absolutely necessary

```typescript
// Good ✅
<div className={cn(
  'rounded-lg p-4',
  isActive && 'bg-nebula',
  'hover:shadow-glow'
)} />

// Avoid ❌
<div style={{ padding: '16px', borderRadius: '8px' }} />
```

### File Organization

- **One component per file** (except for small related components)
- **Export from index.ts** for better imports
- **Group related files** in folders
- **Keep files under 300 lines** when possible

### Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`, `UserProfile.tsx`)
- **Utilities**: camelCase (e.g., `formatDate`, `calculateScore`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`, `MAX_RETRIES`)
- **Types/Interfaces**: PascalCase (e.g., `UserData`, `ApiResponse`)
- **Files**: kebab-case for non-components (e.g., `use-user-data.ts`)

## 📝 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples

```bash
feat(learning): add interactive quiz component

Implement quiz component with multiple choice questions,
progress tracking, and instant feedback for learning paths.

Closes #123

---

fix(ui): resolve button hover state on mobile

The hover effect was incorrectly triggering on mobile devices.
Changed to use active state for touch interactions.

---

docs(readme): update installation instructions

Added troubleshooting section and clarified Node.js version requirements.
```

### Best Practices

- **Use imperative mood** - "add" not "added"
- **Capitalize first letter** of subject
- **No period** at the end of subject
- **Keep subject under 50 characters**
- **Wrap body at 72 characters**
- **Reference issues** in footer

## 🧪 Testing

While we're in early development, we encourage:

- **Manual testing** of all changes
- **Cross-browser testing** (Chrome, Firefox, Safari)
- **Responsive testing** on multiple screen sizes
- **Accessibility testing** with screen readers when relevant

### Future Testing Requirements

As the project matures, we plan to require:

- Unit tests for utilities and helpers
- Component tests for UI components
- Integration tests for features
- E2E tests for critical user flows

## 📚 Documentation

Good documentation is essential. When contributing:

### Code Documentation

- **Add JSDoc comments** for functions and complex logic
- **Document props** for components
- **Explain "why"** not just "what"
- **Include examples** when helpful

```typescript
/**
 * Formats a date string into a human-readable format
 * 
 * @param date - Date string or Date object to format
 * @returns Formatted date string (e.g., "January 15, 2026")
 * 
 * @example
 * ```typescript
 * formatDate('2026-01-15') // "January 15, 2026"
 * formatDate(new Date()) // "January 16, 2026"
 * ```
 */
export function formatDate(date: string | Date): string {
  // implementation
}
```

### README Updates

- Update README.md when adding major features
- Add to the roadmap checklist when completing items
- Update tech stack if adding new dependencies

### Component Documentation

- Update `components/README.md` when adding new components
- Include usage examples
- Document all props and variants

## 🌟 Community

### Getting Help

- **GitHub Discussions** - Ask questions and share ideas
- **Issues** - Report bugs and request features
- **Pull Requests** - Get feedback on your code

### Recognition

All contributors will be recognized in our README and release notes. We appreciate every contribution, no matter how small!

### Staying Updated

- **Watch the repository** for updates
- **Read release notes** for changes
- **Follow project discussions** for roadmap updates

## 💡 Tips for Success

1. **Start small** - Begin with small contributions to understand the codebase
2. **Ask questions** - Don't hesitate to ask for help or clarification
3. **Be patient** - Reviews take time, especially for large changes
4. **Be responsive** - Address feedback promptly
5. **Stay consistent** - Follow existing patterns in the codebase
6. **Test thoroughly** - Ensure your changes work as expected
7. **Document well** - Help others understand your code

## 📞 Contact

- **Maintainer**: Prakriti Bista ([@itsmepraks](https://github.com/itsmepraks))
- **Website**: [praks.me](https://praks.me)
- **Email**: hello@praks.me

## 🙏 Thank You!

Thank you for contributing to STEM•SPARK! Your efforts help us create a better learning experience for girls and women in STEM fields worldwide.

Together, we're igniting curiosity, one spark at a time. ✨

---

**Happy Coding!** 🚀
