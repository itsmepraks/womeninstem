# Contributing to STEM•SPARK

Thank you for your interest in contributing to STEM•SPARK! 🌟 We're building an interactive platform to inspire and empower girls and women in STEM fields, and we welcome contributions from everyone who shares this mission.

## 🎯 Our Mission

STEM•SPARK aims to make STEM education accessible, engaging, and inclusive through interactive learning experiences, mentorship opportunities, and a supportive community. Every contribution, no matter how small, helps us achieve this goal.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Guidelines](#coding-guidelines)
- [Pull Request Process](#pull-request-process)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Component Development](#component-development)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Community](#community)

## 📜 Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. By participating, you are expected to uphold this code. Please report unacceptable behavior to [hello@praks.me](mailto:hello@praks.me).

**Core Principles:**
- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what's best for the community
- Show empathy towards other community members
- Provide constructive feedback

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the behavior
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Environment details** (OS, browser, Node version)
- **Additional context** that might be relevant

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description** of the feature
- **Use cases** - why would this be useful?
- **Possible implementation** approach (if you have ideas)
- **Mockups or examples** if applicable
- **Alternatives considered**

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `documentation` - Documentation improvements
- `bug` - Something isn't working
- `enhancement` - New feature or request

### Pull Requests

We actively welcome your pull requests! See the [Pull Request Process](#pull-request-process) section for details.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17.0 or higher
- **pnpm** 9.0.0 or higher (recommended) or npm
- **Git** for version control
- A code editor (we recommend **VS Code** with extensions listed below)

### Recommended VS Code Extensions

- ESLint
- Prettier - Code formatter
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features
- GitLens

## 💻 Development Setup

### 1. Fork and Clone the Repository

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/womeninstem.git
cd womeninstem

# Add upstream remote
git remote add upstream https://github.com/itsmepraks/womeninstem.git
```

### 2. Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### 3. Set Up Environment Variables

```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local with your local configuration
```

### 4. Start Development Server

```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 5. Create a Branch

```bash
# Create a new branch for your feature or fix
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

## 📁 Project Structure

Understanding the project structure will help you navigate the codebase:

```
womeninstem/
├── app/                    # Next.js App Router pages and routes
│   ├── (routes)/          # Route groups
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── book/             # Book-specific components
│   └── README.md         # Component documentation
├── content/              # Content management (articles, tutorials)
├── data/                 # Static data and content
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and helpers
│   ├── utils.ts          # General utilities
│   ├── constants.ts      # App constants
│   └── store/            # State management
├── public/               # Static assets (images, icons)
├── types/                # TypeScript type definitions
└── styles/               # Additional styles (if needed)
```

## 🎨 Coding Guidelines

### TypeScript

- **Always use TypeScript** for new files
- Define proper interfaces and types
- Avoid using `any` - use `unknown` if type is truly unknown
- Use type inference where possible
- Document complex types with comments

```typescript
// Good
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: React.ReactNode;
}

// Avoid
const props: any = { ... };
```

### React Best Practices

- **Use functional components** with hooks
- **Keep components focused** - single responsibility principle
- **Extract reusable logic** into custom hooks
- **Use proper prop destructuring**
- **Memoize expensive computations** with `useMemo` and `useCallback`

```typescript
// Good
export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return <button className={cn(baseStyles, variantStyles[variant])} {...props}>{children}</button>;
}
```

### Styling Guidelines

- **Use Tailwind CSS** utility classes
- Follow the **space-themed design system** (colors defined in `tailwind.config.js`)
- Use the `cn()` utility from `lib/utils.ts` for conditional classes
- Keep custom CSS minimal - prefer Tailwind utilities
- Use CSS variables for theme values

```typescript
// Good
<div className={cn(
  'rounded-lg bg-deep-space p-4',
  isActive && 'ring-2 ring-nebula',
  className
)}>
```

### File Naming Conventions

- **Components**: PascalCase (`Button.tsx`, `Header.tsx`)
- **Utilities**: camelCase (`utils.ts`, `formatDate.ts`)
- **Types**: camelCase (`types/user.ts`)
- **Constants**: UPPER_SNAKE_CASE in files, camelCase filenames
- **Hooks**: camelCase starting with `use` (`useBookmark.ts`)

### Code Formatting

We use Prettier and ESLint to maintain consistent code style:

```bash
# Format code
pnpm format

# Lint code
pnpm lint

# Type check
pnpm type-check
```

**Important**: Ensure your code passes all checks before submitting a PR.

## 🔄 Pull Request Process

### Before Submitting

1. **Update documentation** if you've changed functionality
2. **Run linting and type checking**
   ```bash
   pnpm lint
   pnpm type-check
   ```
3. **Test your changes** thoroughly
4. **Update the README.md** if needed
5. **Follow commit message guidelines**

### Submitting Your PR

1. **Push your branch** to your fork
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** on GitHub
   - Use a clear, descriptive title
   - Fill out the PR template completely
   - Link related issues using keywords (e.g., "Fixes #123")
   - Add screenshots for UI changes
   - Describe what you changed and why

3. **Respond to feedback**
   - Be open to suggestions
   - Make requested changes promptly
   - Push additional commits to your branch

4. **Wait for review**
   - At least one maintainer approval is required
   - CI checks must pass
   - Conflicts must be resolved

### PR Title Format

```
<type>: <short description>

Examples:
feat: Add interactive book page flipping animation
fix: Resolve mobile navigation menu closing issue
docs: Update component usage examples in README
style: Improve button hover effects
refactor: Simplify bookmark state management
test: Add unit tests for utility functions
chore: Update dependencies
```

## 📝 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks (dependencies, configs)
- **ci**: CI/CD changes

### Examples

```
feat(components): Add interactive book page component

Implement a new BookPage component with page-flipping animations
using Framer Motion. Includes touch and keyboard navigation support.

Closes #45

---

fix(layout): Correct mobile header spacing issue

The header was overlapping content on mobile devices. Adjusted
z-index and padding to resolve the issue.

Fixes #67

---

docs(readme): Add deployment instructions

Added step-by-step guide for deploying to Vercel and Netlify
with environment variable configuration examples.
```

## 🧩 Component Development

### Creating New Components

1. **Choose the right location**:
   - `components/ui/` - Reusable UI primitives
   - `components/layout/` - Layout components
   - `components/book/` - Book-specific features

2. **Use TypeScript interfaces**:
   ```typescript
   interface ComponentProps {
     // Define all props with proper types
   }
   ```

3. **Add proper documentation**:
   ```typescript
   /**
    * Button component with multiple variants and sizes
    * 
    * @example
    * ```tsx
    * <Button variant="primary" size="lg">Click me</Button>
    * ```
    */
   export function Button({ variant, size, children, ...props }: ButtonProps) {
     // Implementation
   }
   ```

4. **Follow the design system**:
   - Use defined color variants (nebula, aurora, stardust, cosmic, supernova)
   - Follow spacing and sizing conventions
   - Ensure responsive design (mobile-first)
   - Include accessibility features (ARIA labels, keyboard navigation)

5. **Export from index file**:
   ```typescript
   // components/ui/index.ts
   export { Button } from './Button';
   export { Card } from './Card';
   ```

### Accessibility Checklist

- [ ] Keyboard navigation support
- [ ] ARIA labels where appropriate
- [ ] Focus states visible
- [ ] Color contrast meets WCAG 2.1 AA
- [ ] Screen reader friendly
- [ ] Semantic HTML elements

## 🧪 Testing Guidelines

### Writing Tests

While we're still setting up our testing infrastructure, here are guidelines for when you write tests:

```typescript
// Example test structure
describe('Button Component', () => {
  it('renders with correct variant styles', () => {
    // Test implementation
  });

  it('handles click events', () => {
    // Test implementation
  });

  it('is accessible', () => {
    // Test accessibility
  });
});
```

### Test Coverage

- **Unit tests** for utility functions
- **Component tests** for UI components
- **Integration tests** for user flows
- **Accessibility tests** using jest-axe

## 📚 Documentation

Good documentation is crucial for the project's success:

### Code Documentation

- Add **JSDoc comments** to functions and components
- Include **usage examples** in comments
- Document **complex logic** with inline comments
- Keep the **components/README.md** updated

### User Documentation

- Update **README.md** for major changes
- Add **inline code comments** for complex logic
- Create **example usage** in component files
- Document **breaking changes** in CHANGELOG.md

## 🌟 Community

### Getting Help

- **GitHub Discussions**: Ask questions and share ideas
- **Issues**: Report bugs and request features
- **Email**: hello@praks.me for private inquiries

### Recognition

Contributors are recognized in several ways:
- Listed in README.md contributors section
- Mentioned in release notes for significant contributions
- Highlighted in project announcements

### Staying Updated

- Watch the repository for notifications
- Check open issues and discussions regularly
- Follow the project roadmap in README.md

## 🎉 Thank You!

Thank you for contributing to STEM•SPARK! Your efforts help create a more inclusive and empowering STEM education experience for girls and women worldwide.

Every contribution counts - whether it's:
- 🐛 Fixing a bug
- ✨ Adding a feature
- 📝 Improving documentation
- 🎨 Enhancing design
- 💡 Sharing ideas
- 🤝 Helping others

Together, we're igniting curiosity and sparking change in STEM! ⚡

---

**Questions?** Feel free to reach out:
- GitHub: [@itsmepraks](https://github.com/itsmepraks)
- Website: [praks.me](https://praks.me)
- Email: hello@praks.me

*Let's build something amazing together!* 🚀
