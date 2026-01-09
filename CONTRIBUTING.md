# Contributing to STEM•SPARK

Thank you for your interest in contributing to STEM•SPARK! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inclusive environment for everyone, regardless of gender, gender identity, sexual orientation, disability, physical appearance, body size, race, ethnicity, age, religion, or technical ability.

### Our Standards
- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## How Can I Contribute?

### Reporting Bugs
- Check if the bug has already been reported in Issues
- Use the bug report template
- Include detailed steps to reproduce
- Provide screenshots if applicable
- Mention your environment (OS, browser, etc.)

### Suggesting Enhancements
- Check if the enhancement has already been suggested
- Use the feature request template
- Provide clear description and rationale
- Include mockups or examples if possible

### Contributing Content
- Follow the content guidelines in `/content/README.md`
- Ensure content is accurate and well-researched
- Use inclusive and encouraging language
- Submit content in Markdown format

### Contributing Code

#### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/womeninstem.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`
5. Start development server: `npm run dev`

#### Code Style
- Use TypeScript for all new code
- Follow the existing code style
- Run `npm run lint` before committing
- Use meaningful variable and function names
- Add comments for complex logic
- Write component documentation

#### Commit Guidelines
We follow the Conventional Commits specification:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(learning): add progress tracking to learning paths
fix(ui): resolve mobile navigation menu closing issue
docs(readme): update installation instructions
```

#### Pull Request Process
1. Update documentation for any new features
2. Ensure all tests pass
3. Update the README.md if needed
4. Request review from maintainers
5. Address review feedback promptly
6. Squash commits before merging if requested

### Testing
- Write tests for new features
- Ensure existing tests pass
- Test on multiple browsers
- Test responsive design on various screen sizes
- Test accessibility with screen readers

## Project Structure

Refer to the README.md for detailed project structure. Key directories:
- `/app` - Next.js pages and routing
- `/components` - React components
- `/content` - Markdown content
- `/lib` - Utility functions
- `/public` - Static assets

## Design Guidelines

### Design System
- Follow the space-themed color palette
- Use Tailwind CSS utilities
- Maintain consistent spacing and typography
- Ensure WCAG 2.1 AA accessibility compliance

### Component Development
- Create reusable components
- Use TypeScript interfaces for props
- Implement proper error handling
- Optimize for performance
- Follow mobile-first approach

## Content Guidelines

### Writing Style
- Clear and accessible language
- Encouraging and empowering tone
- Include practical examples
- Use visual aids (images, diagrams)
- Cite sources and references

### Content Types
- **Articles**: Educational essays
- **Tutorials**: Step-by-step guides
- **Resources**: Tools and references
- **Interviews**: STEM professional Q&As

## Community

### Communication Channels
- GitHub Issues: Bug reports and feature requests
- GitHub Discussions: General questions and ideas
- Pull Requests: Code contributions

### Getting Help
- Check the documentation first
- Search existing issues
- Ask in GitHub Discussions
- Tag maintainers for urgent issues

## Recognition

All contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to STEM•SPARK!** Together, we're building a platform that empowers women in STEM. 🚀✨
