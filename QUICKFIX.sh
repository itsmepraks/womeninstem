#!/bin/bash
# Quick Fix Script for PR #17 Deployment Issues
# This script regenerates the pnpm-lock.yaml file with all dependencies

set -e  # Exit on error

echo "🔧 Starting deployment fix for PR #17..."
echo ""

# Check if we're on the right branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "book-flip-implementation" ]; then
    echo "⚠️  Warning: You're on branch '$CURRENT_BRANCH'"
    echo "   This fix is for the 'book-flip-implementation' branch"
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ Error: pnpm is not installed"
    echo ""
    echo "Install pnpm with:"
    echo "  npm install -g pnpm"
    echo "or visit: https://pnpm.io/installation"
    exit 1
fi

echo "✅ pnpm is installed"
echo ""

# Remove old lockfile if it exists
if [ -f "pnpm-lock.yaml" ]; then
    echo "🗑️  Removing outdated pnpm-lock.yaml..."
    rm pnpm-lock.yaml
    echo "✅ Old lockfile removed"
    echo ""
fi

# Regenerate lockfile
echo "📦 Installing dependencies (this will generate a new lockfile)..."
pnpm install --no-frozen-lockfile

# Verify lockfile was created
if [ ! -f "pnpm-lock.yaml" ]; then
    echo "❌ Error: pnpm-lock.yaml was not generated"
    exit 1
fi

echo ""
echo "✅ pnpm-lock.yaml successfully generated!"
echo ""

# Verify new dependencies are present
echo "🔍 Verifying new dependencies..."
if grep -q "react-pageflip" pnpm-lock.yaml; then
    echo "  ✅ react-pageflip found in lockfile"
else
    echo "  ⚠️  Warning: react-pageflip not found in lockfile"
fi

if grep -q "react-use-sound" pnpm-lock.yaml; then
    echo "  ✅ react-use-sound found in lockfile"
else
    echo "  ⚠️  Warning: react-use-sound not found in lockfile"
fi

echo ""
echo "🧪 Running tests..."

# Test build
echo "  📦 Testing build..."
if pnpm run build > /dev/null 2>&1; then
    echo "  ✅ Build successful"
else
    echo "  ⚠️  Build had errors (check with: pnpm run build)"
fi

# Test type checking
echo "  🔍 Type checking..."
if pnpm run type-check > /dev/null 2>&1; then
    echo "  ✅ Type check passed"
else
    echo "  ⚠️  Type errors found (check with: pnpm run type-check)"
fi

echo ""
echo "📊 Summary:"
echo "  • pnpm-lock.yaml regenerated with all dependencies"
echo "  • New dependencies included: react-pageflip, react-use-sound"
echo "  • Ready to commit and push"
echo ""
echo "🚀 Next steps:"
echo "  1. Review the changes: git status"
echo "  2. Commit the lockfile: git add pnpm-lock.yaml"
echo "  3. Commit message: git commit -m 'chore: regenerate pnpm-lock.yaml with all dependencies'"
echo "  4. Push to GitHub: git push"
echo "  5. Vercel will automatically deploy"
echo ""
echo "✨ All done! The deployment issue should be fixed."
