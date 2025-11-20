#!/bin/bash

# Portfolio Deployment Preparation Script
echo "🚀 Preparing your portfolio for deployment..."

# Create deployment folder
mkdir -p deploy-ready

# Copy essential files
echo "📁 Copying files..."
cp index.html deploy-ready/
cp -r css deploy-ready/
cp -r js deploy-ready/
cp -r images deploy-ready/
cp -r projects deploy-ready/
cp -r assets deploy-ready/

# Create zip file for easy deployment
echo "📦 Creating deployment package..."
cd deploy-ready
zip -r ../portfolio-deployment.zip .
cd ..

echo "✅ Deployment package ready!"
echo ""
echo "📋 Next steps:"
echo "1. Go to https://netlify.com"
echo "2. Drag & drop 'portfolio-deployment.zip'"
echo "3. Your site will be live instantly!"
echo ""
echo "📁 Files ready in: ./deploy-ready/"
echo "📦 Zip package: ./portfolio-deployment.zip"
echo ""
echo "🎉 Your portfolio is ready to deploy!"
