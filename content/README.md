# Content Directory

This directory manages all content for the STEM•SPARK platform, including articles, tutorials, resources, and curriculum materials.

## Structure

```
content/
├── articles/              # Educational articles
│   ├── stem-basics/      # Introductory STEM concepts
│   ├── career-guides/    # Career path information
│   ├── interviews/       # Interviews with STEM professionals
│   └── success-stories/  # Inspirational success stories
│
├── tutorials/            # Step-by-step tutorials
│   ├── coding/          # Programming tutorials
│   ├── robotics/        # Robotics projects
│   ├── data-science/    # Data science tutorials
│   └── engineering/     # Engineering projects
│
├── resources/           # Learning resources
│   ├── books/          # Recommended books
│   ├── courses/        # External course listings
│   ├── tools/          # STEM tools and software
│   └── scholarships/   # Scholarship opportunities
│
├── learning-paths/     # Structured learning journeys
│   ├── beginner/       # Beginner-level paths
│   ├── intermediate/   # Intermediate-level paths
│   └── advanced/       # Advanced-level paths
│
└── mentorship/         # Mentorship program content
    ├── mentor-profiles/ # Mentor information
    └── guides/         # Mentorship guides and tips
```

## Content Format

All content is stored in Markdown format with frontmatter metadata.

### Article Template
```markdown
---
title: "Article Title"
author: "Author Name"
date: "2024-01-08"
category: "stem-basics"
tags: ["science", "technology", "beginner"]
difficulty: "beginner"
readTime: 5
featuredImage: "/images/articles/article-slug.jpg"
excerpt: "Brief description of the article for previews"
---

# Article Title

Article content goes here...
```

### Tutorial Template
```markdown
---
title: "Tutorial Title"
author: "Author Name"
date: "2024-01-08"
category: "coding"
tags: ["python", "beginner", "hands-on"]
difficulty: "beginner"
estimatedTime: 30
materials: ["Computer", "Python installed", "Text editor"]
learningOutcomes:
  - "Understand basic Python syntax"
  - "Create your first Python program"
  - "Use variables and data types"
featuredImage: "/images/tutorials/tutorial-slug.jpg"
---

# Tutorial Title

## Prerequisites
- List prerequisites here

## What You'll Learn
- Learning objectives

## Step 1: Setup
Instructions...

## Step 2: Implementation
Instructions...

## Conclusion
Wrap-up and next steps...
```

### Learning Path Template
```markdown
---
title: "Path Title"
description: "Path description"
difficulty: "beginner"
estimatedHours: 20
modules:
  - title: "Module 1"
    lessons: ["lesson-1", "lesson-2"]
  - title: "Module 2"
    lessons: ["lesson-3", "lesson-4"]
prerequisites: []
learningOutcomes: []
featuredImage: "/images/paths/path-slug.jpg"
---

# Path Title

Detailed path description and curriculum...
```

## Content Guidelines

### Writing Style
1. **Clear and Accessible**: Write for your target audience (girls and women interested in STEM)
2. **Encouraging Tone**: Be positive and empowering
3. **Practical Examples**: Include real-world applications
4. **Visual Support**: Use images, diagrams, and code snippets
5. **Inclusive Language**: Use gender-neutral and inclusive terms

### Content Quality
1. **Accuracy**: Ensure technical accuracy of all information
2. **Citations**: Link to sources and references
3. **Updates**: Keep content current and relevant
4. **Peer Review**: Have content reviewed before publishing

### SEO Optimization
1. **Keywords**: Include relevant STEM keywords naturally
2. **Meta Descriptions**: Write compelling excerpts
3. **Headings**: Use proper heading hierarchy (H1-H6)
4. **Internal Links**: Link to related content

### Accessibility
1. **Alt Text**: Provide descriptive alt text for images
2. **Clear Structure**: Use proper markdown formatting
3. **Readability**: Aim for 8th-9th grade reading level
4. **Code Blocks**: Use syntax highlighting for code

## Adding New Content

### Process
1. Create content file in appropriate directory
2. Follow the template structure
3. Add frontmatter metadata
4. Write content following guidelines
5. Add images to `/public/images/` directory
6. Test rendering in development
7. Submit for review

### Naming Conventions
- Use kebab-case for file names: `introduction-to-python.md`
- Include date prefix for time-sensitive content: `2024-01-08-new-feature.md`
- Keep names descriptive but concise

## Content Categories

### STEM Fields
- Science (Biology, Chemistry, Physics, Earth Science)
- Technology (Software, Hardware, Networking)
- Engineering (Mechanical, Electrical, Civil, Biomedical)
- Mathematics (Pure, Applied, Statistics)

### Difficulty Levels
- **Beginner**: No prior knowledge required
- **Intermediate**: Basic understanding of the topic
- **Advanced**: Strong foundation and experience

### Content Types
- **Article**: Educational essay or discussion
- **Tutorial**: Step-by-step hands-on guide
- **Resource**: External tool, course, or reference
- **Interview**: Q&A with STEM professional
- **Project**: Complete project with instructions

## Resources for Contributors

- [Markdown Guide](https://www.markdownguide.org/)
- [Writing Inclusive Documentation](https://developers.google.com/style/inclusive-documentation)
- [Technical Writing Best Practices](https://google.github.io/styleguide/)

## Review Process

1. **Self-Review**: Check spelling, grammar, and formatting
2. **Technical Review**: Verify accuracy and completeness
3. **Editorial Review**: Check style and tone
4. **Final Approval**: Ready for publication

---

**Questions?** Reach out to the content team or open an issue on GitHub.
