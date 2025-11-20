# Data Engineering Portfolio

A modern, responsive portfolio website showcasing data engineering projects and skills.

## 🚀 Live Demo

[View Portfolio](https://omar-dataengineer.github.io/portfolio) *(Replace with your actual URL)*

## 📋 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive**: Smooth scrolling, hover effects, and dynamic content
- **SEO Optimized**: Meta tags, semantic HTML, and fast loading
- **Accessible**: WCAG compliant with keyboard navigation support
- **Performance**: Optimized images, minified CSS/JS, and lazy loading

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)
- **Code Highlighting**: Prism.js
- **Deployment**: GitHub Pages (or any static hosting)

## 📁 Project Structure

```
portofolio/
├── index.html              # Main homepage
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # Interactive functionality
├── images/                # Image assets
├── projects/              # Individual project pages
│   ├── etl-pipeline.html
│   ├── streaming-pipeline.html
│   ├── data-warehouse.html
│   └── ml-pipeline.html
├── assets/
│   ├── resume.pdf         # Downloadable resume
│   └── diagrams/          # Architecture diagrams
└── README.md
```

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Customize Content

1. **Personal Information**: Update name, email, and social links in `index.html`
2. **Projects**: Modify project descriptions and add your GitHub links
3. **Resume**: Replace `assets/resume.pdf` with your actual resume
4. **Images**: Add your profile photo and project screenshots to `images/`

### 3. Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Visit `http://localhost:8000` to view your portfolio.

## 🌐 Deployment Options

### GitHub Pages (Free)

1. Create a new repository on GitHub
2. Upload your files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify (Free)

1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Your site will be deployed automatically
3. Get a custom domain or use the provided netlify.app URL

### Vercel (Free)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

### Traditional Web Hosting

Upload all files to your web hosting provider's public_html or www directory.

## ✏️ Customization Guide

### Colors and Branding

Edit the CSS custom properties in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #06b6d4;  /* Accent color */
    --accent-color: #f59e0b;     /* Highlight color */
    /* ... other colors */
}
```

### Adding New Projects

1. Create a new HTML file in the `projects/` directory
2. Use `etl-pipeline.html` as a template
3. Add the project card to `index.html` in the projects section
4. Update navigation links

### Content Updates

- **About Section**: Edit the about text in `index.html`
- **Skills**: Update the skills section with your technologies
- **Contact Info**: Change email and social media links
- **Meta Tags**: Update title, description, and keywords for SEO

## 📊 Performance Optimization

### Images
- Use WebP format for better compression
- Implement lazy loading for images
- Optimize image sizes for different screen resolutions

### CSS/JS
- Minify CSS and JavaScript files for production
- Use CSS custom properties for consistent theming
- Implement critical CSS for faster initial load

### SEO
- Add structured data markup
- Optimize meta descriptions and titles
- Include Open Graph tags for social sharing

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images for different screen densities
- Fast loading on mobile networks

## 🎨 Design System

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: 700 weight
- **Body Text**: 400 weight
- **UI Elements**: 500-600 weight

### Color Palette
- **Primary**: Indigo (#6366f1)
- **Secondary**: Cyan (#06b6d4)
- **Accent**: Amber (#f59e0b)
- **Neutrals**: Gray scale from 50-900

### Spacing
- Based on 0.25rem (4px) increments
- Consistent spacing using CSS custom properties
- Responsive spacing that scales with screen size

## 🚀 Advanced Features

### Analytics Integration
Add Google Analytics or other tracking:

```html
<!-- Add to <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Contact Form Integration
Integrate with services like:
- Netlify Forms
- Formspree
- EmailJS
- Custom backend API

### Progressive Web App (PWA)
Add PWA features:
- Service worker for offline functionality
- Web app manifest
- Push notifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have questions or need help customizing your portfolio:

- **Email**: omar.dataengineer@email.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **GitHub Issues**: [Create an issue](https://github.com/yourusername/portfolio/issues)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Code highlighting by [Prism.js](https://prismjs.com/)

---

**Built with ❤️ for the data engineering community**

*Last updated: November 2024*
