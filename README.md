# The Dominican Restaurant - Raleigh

A modern, responsive website for The Dominican Restaurant in Raleigh, NC.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Animated menu items
- Mobile-friendly hamburger menu
- Modern UI with Dominican flag colors

## Deploying to Netlify

### Option 1: Deploy via Netlify CLI (Recommended)

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
```

Follow the prompts to:
- Create a new site or link to an existing one
- Configure build settings (already set in netlify.toml)
- Deploy the site

4. For subsequent deployments:
```bash
netlify deploy --prod
```

### Option 2: Deploy via Git

1. Initialize a git repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub/GitLab/Bitbucket

3. Go to [Netlify](https://app.netlify.com)
4. Click "Add new site" > "Import an existing project"
5. Connect your Git provider and select your repository
6. Netlify will automatically detect the settings from netlify.toml
7. Click "Deploy site"

### Option 3: Drag and Drop

1. Go to [Netlify](https://app.netlify.com)
2. Drag and drop this entire folder onto the Netlify dashboard
3. Your site will be deployed instantly

## Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## Customization

- Update restaurant information in `index.html`
- Modify colors in `styles.css` (see CSS variables in `:root`)
- Add more menu items in the menu section
- Update contact information and hours

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Netlify for hosting
