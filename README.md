# portfolio

# Portfolio Website - BI, Data & Reporting Administrator

A professional portfolio website showcasing Power BI dashboards and data analytics projects. Built with clean HTML, CSS, and JavaScript - no frameworks required.

## Features

- **Collapsible Sidebar Navigation** - Clean navigation that can be minimized for more screen space
- **Dark Mode Toggle** - Fully functional light/dark theme with localStorage persistence
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Power BI Embedding Ready** - Designed specifically to showcase Power BI dashboards
- **Print Friendly** - Optimized CSS for printing/PDF generation
- **Fast Loading** - No external dependencies, just clean code

## File Structure

```
portfolio-website/
├── index.html              # Home page with portfolio/dashboards
├── css/
│   └── styles.css          # All styling with CSS variables for easy customization
├── js/
│   └── script.js           # Sidebar and dark mode functionality
├── pages/
│   ├── about.html          # About Me page
│   └── career.html         # Career timeline page
└── images/                 # Place your images here (screenshots, profile photo, etc.)
```

## Getting Started with GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in (or create an account)
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `yourusername.github.io` (replace with your actual username)
   - Example: If your username is "jsmith", name it `jsmith.github.io`
4. Make sure it's set to **Public**
5. Do NOT initialize with README (we'll add files ourselves)
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Upload via GitHub Website (Easiest for beginners)**

1. On your new repository page, click "uploading an existing file"
2. Drag and drop all the files from this portfolio-website folder
   - Make sure to maintain the folder structure (css/, js/, pages/)
3. Write a commit message like "Initial portfolio upload"
4. Click "Commit changes"

**Option B: Use Git Command Line (If you're comfortable with Git)**

```bash
# Navigate to the portfolio-website folder
cd portfolio-website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio upload"

# Connect to your GitHub repository
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push files
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar under "Code and automation")
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main" and "/" (root) folder
6. Click "Save"

### Step 4: Wait for Deployment

- GitHub will build and deploy your site (usually takes 2-5 minutes)
- Your site will be live at: `https://yourusername.github.io`
- You'll see a green checkmark when it's ready

## Customization Guide

### 1. Update Personal Information

**In all HTML files** (index.html, pages/about.html, pages/career.html):
- Replace "Firstname Lastname" with your actual name
- Replace "Stoke on Trent" with your location
- Update the meta description tags
- Update page titles

**In pages/about.html**:
- Update all content sections with your information
- Update skills lists
- Update contact links (email, LinkedIn, GitHub)

**In pages/career.html**:
- Add your actual work experience
- Update company names, dates, and responsibilities
- Add your certifications

### 2. Add Power BI Dashboards

1. **Publish your dashboard to Power BI Service**
   - Open your report in Power BI Desktop
   - Click "File" → "Publish" → "Publish to Power BI"
   - Select your workspace

2. **Get the embed code**
   - Go to app.powerbi.com and open your report
   - Click "File" → "Embed report" → "Website or portal"
   - Copy the iframe code provided

3. **Add to your website**
   - Open index.html
   - Find the `.powerbi-placeholder` div inside a dashboard card
   - Replace it with your iframe code
   - Example:
   ```html
   <div class="powerbi-container">
       <iframe 
           title="Sales Dashboard" 
           width="100%" 
           height="600" 
           src="https://app.powerbi.com/view?r=YOUR_REPORT_ID" 
           frameborder="0" 
           allowFullScreen="true">
       </iframe>
   </div>
   ```

4. **Add more dashboard cards**
   - Copy an entire `<article class="dashboard-card">` section
   - Paste it below the existing ones
   - Update the title, description, and embed code

### 3. Customize Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    /* Light mode colors */
    --accent-color: #0066cc;      /* Change to your preferred color */
    --accent-hover: #0052a3;      /* Darker shade of accent */
    /* ... other variables */
}

[data-theme="dark"] {
    --accent-color: #4a9eff;      /* Accent color for dark mode */
    /* ... other variables */
}
```

### 4. Add Your Profile Photo

1. Add your photo to the `images/` folder (name it `profile.jpg` or similar)
2. Add it to the sidebar in all HTML files:

```html
<div class="sidebar-header">
    <img src="../images/profile.jpg" alt="Your Name" class="profile-photo">
    <h1>Firstname Lastname</h1>
    ...
</div>
```

3. Add CSS for the photo in `styles.css`:

```css
.profile-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: var(--spacing-medium);
    border: 3px solid var(--accent-color);
}
```

## Adding New Pages

To add a new page (e.g., "Projects"):

1. Copy `pages/about.html` to `pages/projects.html`
2. Update the content
3. Add a link in the sidebar navigation of ALL pages:
   ```html
   <a href="projects.html" class="nav-link">Projects</a>
   ```

## Updating Your Site

Whenever you make changes:

**Via GitHub Website:**
1. Navigate to the file you want to edit
2. Click the pencil icon (Edit)
3. Make your changes
4. Click "Commit changes"
5. Wait 1-2 minutes for the site to rebuild

**Via Git:**
```bash
git add .
git commit -m "Description of your changes"
git push
```

## Tips for Success

### For Power BI Embeds:
- Make sure reports are published to a workspace in Power BI Service
- Use "Publish to web" for fully public dashboards (no sign-in required)
- Test embeds work before adding to portfolio
- Consider adding a static image as a fallback

### For Job Applications:
- Add Google Analytics to track views (optional)
- Include specific metrics in dashboard descriptions (e.g., "Reduced reporting time by 60%")
- Link to this portfolio in your CV and LinkedIn profile
- Keep dashboards updated with recent work

### Performance:
- Optimize images before uploading (use tools like TinyPNG)
- Keep image file sizes under 500KB
- Don't embed too many Power BI reports on one page (they're data-intensive)

### SEO:
- Update all meta descriptions
- Use descriptive page titles
- Add alt text to images
- Consider adding a sitemap.xml

## Browser Support

This website works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Troubleshooting

**Site not loading?**
- Check GitHub Pages settings are enabled
- Ensure repository is public
- Wait a few minutes for deployment
- Check repository name is correct format (`username.github.io`)

**Sidebar not collapsing?**
- Check JavaScript file is loaded correctly
- Check browser console for errors (F12 → Console tab)

**Dark mode not working?**
- Clear browser cache and cookies
- Check localStorage is enabled in browser

**Power BI not showing?**
- Verify report is published and shared publicly
- Check embed URL is correct
- Try opening embed URL directly in browser

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Power BI Embed Documentation](https://docs.microsoft.com/en-us/power-bi/collaborate-share/service-embed-secure)
- [HTML/CSS/JS Resources on MDN](https://developer.mozilla.org/)

## License

This portfolio template is free to use and modify for your personal portfolio. No attribution required.

---

**Good luck with your job search!** 🎯
