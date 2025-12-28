# GitHub Pages Deployment Guide

This repository contains a GitHub Pages documentation site for the Age of Empires IV Content Editor API.

## Deployment

The site will be automatically published to GitHub Pages when this branch is merged to the main branch and GitHub Pages is enabled in the repository settings.

### Enabling GitHub Pages

1. Go to repository Settings
2. Navigate to "Pages" section
3. Under "Source", select:
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
4. Click "Save"

The site will be available at: `https://callfreak.github.io/aoeiv-unoffical-api/`

## Local Development

To run the site locally for testing:

### Prerequisites
- Ruby 3.x
- Bundler

### Steps

```bash
# Install dependencies
bundle install

# Run Jekyll server
bundle exec jekyll serve

# Visit http://localhost:4000/aoeiv-unoffical-api/
```

## Site Structure

```
├── _config.yml           # Jekyll configuration
├── _layouts/            # HTML layouts
│   └── default.html
├── _docs/               # Documentation pages
│   ├── overview.md
│   ├── text-api.md
│   ├── image-api.md
│   ├── examples.md
│   └── reference.md
├── assets/
│   ├── css/
│   │   └── style.css    # Dark mode styling
│   └── js/
│       └── main.js      # Interactive features
├── index.html           # Homepage
└── README.md            # Project information
```

## Features

- **Dark Mode Only**: Professional dark theme for comfortable reading
- **Left Sidebar Navigation**: Quick access to all documentation sections
- **Multiple Documentation Pages**: Organized content for different API categories
- **Interactive Tab Navigation**: Widget switcher in API Reference section
- **Responsive Design**: Works on all device sizes
- **Code Examples**: JavaScript and Python examples

## Documentation Categories

1. **Home**: Welcome page with quick links
2. **Overview**: API architecture and core concepts
3. **Text API**: Text and localization management endpoints
4. **Image API**: Image asset handling and processing endpoints
5. **Code Examples**: Practical code samples
6. **API Reference**: Complete endpoint reference with interactive tabs

## Customization

### Changing Colors

Edit `assets/css/style.css` and modify the CSS variables in the `:root` selector:

```css
:root {
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --accent-primary: #4a90e2;
    /* ... more variables */
}
```

### Adding New Pages

1. Create a new `.md` file in `_docs/` directory
2. Add front matter:
   ```yaml
   ---
   layout: default
   title: Your Page Title
   ---
   ```
3. Add content in Markdown
4. Update navigation in `_layouts/default.html`

### Modifying Navigation

Edit the navigation section in `_layouts/default.html`:

```html
<ul class="nav-list">
    <li class="nav-item">
        <a href="{{ site.baseurl }}/docs/your-new-page" class="nav-link">
            Your Page Name
        </a>
    </li>
</ul>
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This documentation is provided for the Age of Empires IV modding community.
