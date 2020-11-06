#!/bin/sh

echo "Setting git config"
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

echo "Deleting old publication"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages public origin/gh-pages

echo "Removing existing files"
rm -rf public/*

echo "Generating site"
npm run build:production

echo "Updating gh-pages branch"
cd public || exit
git add .
git commit -m "ci: gh-pages"

echo "Pushing to github"
git push --all https://${GITHUB_TOKEN}@github.com/matteobertoldo/freedomhood.git
