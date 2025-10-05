# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project features a clean design, smooth animations, and comprehensive sections for showcasing your professional work.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone or extract the project**
   ```bash
   # If you have the zip file, extract it first
   # If cloning from git:
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view your portfolio

## 📁 Project Structure

```
portfolio-website/
├── public/                     # Static assets (images, icons, etc.)
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── about/
│   │   │   └── TimelineItem.tsx    # Timeline component for about page
│   │   ├── contact/
│   │   │   └── ContactForm.tsx     # Contact form component
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navigation header
│   │   │   └── Footer.tsx          # Site footer
│   │   ├── projects/
│   │   │   └── ProjectCard.tsx     # Project showcase cards
│   │   ├── resume/
│   │   │   ├── ExperienceItem.tsx  # Experience timeline items
│   │   │   └── ResumeSection.tsx   # Resume sections wrapper
│   │   ├── services/
│   │   │   └── PricingCard.tsx     # Service pricing cards
│   │   └── ui/
│   │       └── Button.tsx          # Reusable button component
│   ├── pages/                 # Page components (routes)
│   │   ├── Home.tsx           # Landing page
│   │   ├── About.tsx          # About page
│   │   ├── Projects.tsx       # Projects listing
│   │   ├── ProjectDetail.tsx  # Individual project details
│   │   ├── Services.tsx       # Services and pricing
│   │   ├── Resume.tsx         # Resume/CV page
│   │   ├── Contact.tsx        # Contact page
│   │   ├── PrivacyPolicy.tsx  # Privacy policy page
│   │   └── NotFound.tsx       # 404 error page
│   ├── context/
│   │   └── ThemeContext.tsx   # Theme management (if needed)
│   ├── types/
│   │   └── index.ts           # TypeScript type definitions
│   ├── config.ts              # Site configuration and content
│   ├── App.tsx                # Main app component with routing
│   ├── main.tsx               # App entry point
│   └── index.css              # Global styles and CSS variables
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite build configuration
├── netlify.toml               # Netlify deployment configuration
└── README.md                  # This file
```

## 🎨 Customizing Fonts and Colors

### Color Customization

The website uses a CSS custom properties system for easy color theming. All colors are defined in `src/index.css`:

```css
:root {
  --background: 13 13 13;      /* Dark background (#0D0D0D) */
  --foreground: 230 230 230;   /* Light text (#E6E6E6) */
  --primary: 190 242 100;      /* Primary accent (#BEF264) */
  --primary-hover: 174 223 92; /* Primary hover state */
  --muted: 115 115 115;        /* Muted text (#737373) */
  --muted-foreground: 163 163 163; /* Secondary text (#A3A3A3) */
  --border: 38 38 38;          /* Border color (#262626) */
}
```

**To change colors:**
1. Open `src/index.css`
2. Modify the RGB values in the `:root` section
3. Save the file - changes will appear immediately

**Color format:** Use RGB values without commas (e.g., `255 0 0` for red)

### Font Customization

Fonts are configured in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Inter', ...defaultTheme.fontFamily.sans],
  heading: ['Poppins', ...defaultTheme.fontFamily.sans],
}
```

**To change fonts:**

1. **Add new fonts** (e.g., from Google Fonts):
   - Add the font link to `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
   ```

2. **Update Tailwind config** in `tailwind.config.js`:
   ```javascript
   fontFamily: {
     sans: ['YourFont', ...defaultTheme.fontFamily.sans],
     heading: ['YourHeadingFont', ...defaultTheme.fontFamily.sans],
   }
   ```

3. **Apply fonts in CSS** in `src/index.css`:
   ```css
   h1, h2, h3, h4, h5, h6 {
     @apply font-heading; /* Uses the 'heading' font family */
   }
   ```

## 🧩 Component Documentation

### Layout Components

#### Header (`src/components/layout/Header.tsx`)
- **Purpose**: Main navigation header with responsive mobile menu
- **Features**: 
  - Sticky navigation
  - Active route highlighting
  - Mobile hamburger menu with smooth animations
  - Backdrop blur effect

#### Footer (`src/components/layout/Footer.tsx`)
- **Purpose**: Site footer with links and social media
- **Features**: 
  - Social media links
  - Copyright information
  - Quick navigation links

### Page Components

#### Home (`src/pages/Home.tsx`)
- **Purpose**: Landing page with hero section and featured projects
- **Features**:
  - Animated hero section with call-to-action buttons
  - Featured projects showcase (first 3 projects)
  - Smooth scroll animations

#### About (`src/pages/About.tsx`)
- **Purpose**: Personal story, timeline, and values
- **Features**:
  - Personal bio and headshot
  - Professional timeline
  - Core values with icons
  - Failure story section

#### Projects (`src/pages/Projects.tsx`)
- **Purpose**: Complete projects portfolio
- **Features**:
  - Grid layout of all projects
  - Filtering by category
  - Project metrics and tags
  - Links to live demos and repositories

#### ProjectDetail (`src/pages/ProjectDetail.tsx`)
- **Purpose**: Detailed view of individual projects
- **Features**:
  - Problem/solution narrative
  - Development process timeline
  - Image gallery
  - Technical details and deliverables

#### Services (`src/pages/Services.tsx`)
- **Purpose**: Service offerings and pricing
- **Features**:
  - Tiered pricing cards
  - Service descriptions
  - Popular plan highlighting
  - Retainer information

#### Resume (`src/pages/Resume.tsx`)
- **Purpose**: Professional resume/CV
- **Features**:
  - Downloadable PDF resume
  - Experience timeline
  - Skills categorization
  - Education history

#### Contact (`src/pages/Contact.tsx`)
- **Purpose**: Contact form and information
- **Features**:
  - Contact form with validation
  - Social media links
  - Calendly integration
  - Email and location information

### UI Components

#### Button (`src/components/ui/Button.tsx`)
- **Purpose**: Reusable button component
- **Props**:
  - `variant`: 'primary' | 'secondary' | 'outline'
  - `to`: Link destination (for navigation)
  - `onClick`: Click handler function
  - `disabled`: Boolean for disabled state
  - `children`: Button content

#### ProjectCard (`src/components/projects/ProjectCard.tsx`)
- **Purpose**: Project showcase card
- **Features**:
  - Project image and title
  - Category and tags
  - Performance metrics
  - Hover animations

#### TimelineItem (`src/components/about/TimelineItem.tsx`)
- **Purpose**: Timeline entry for about page
- **Features**:
  - Date and title
  - Description text
  - Animated timeline connector

#### ContactForm (`src/components/contact/ContactForm.tsx`)
- **Purpose**: Contact form with validation
- **Features**:
  - Form validation
  - Success/error states
  - Email integration

#### PricingCard (`src/components/services/PricingCard.tsx`)
- **Purpose**: Service pricing display
- **Features**:
  - Tiered pricing
  - Feature lists
  - Popular plan highlighting

#### ExperienceItem (`src/components/resume/ExperienceItem.tsx`)
- **Purpose**: Individual experience entry
- **Features**:
  - Company and role information
  - Date range
  - Description text

## ⚙️ Configuration

### Site Content (`src/config.ts`)

All site content is centralized in `src/config.ts`. Update this file to customize:

- **Personal Information**: Name, headline, bio, contact details
- **Social Links**: GitHub, LinkedIn, Twitter profiles
- **Timeline**: Professional experience and education
- **Projects**: Project details, images, and metrics
- **Services**: Pricing tiers and service descriptions
- **Skills**: Technical skills and categories

### Key Configuration Sections:

```typescript
export const siteConfig = {
  name: "Your Name",
  headline: "Your Professional Title",
  pitch: "Your value proposition",
  headshotUrl: "URL to your photo",
  email: "your.email@example.com",
  socialLinks: { /* Your social profiles */ },
  bio: "Your personal story",
  timeline: [ /* Your experience timeline */ ],
  projects: [ /* Your project portfolio */ ],
  services: [ /* Your service offerings */ ],
  // ... and more
};
```

## 🚀 Deployment

### Netlify (Recommended)

The project includes `netlify.toml` for easy Netlify deployment:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Push your code to GitHub/GitLab
   - Connect your repository to Netlify
   - Netlify will automatically detect the build settings
   - Your site will be live at `https://your-site.netlify.app`

### Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your deployment

### GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script** to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your web server

3. **Configure your server** to serve `index.html` for all routes (SPA routing)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run lint:dualite` - Run Dualite-specific linting rules

## 📦 Dependencies

### Core Dependencies
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **Axios** - HTTP client

### Development Dependencies
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🎯 Customization Tips

1. **Content Updates**: All content is in `src/config.ts` - update this file to personalize your portfolio

2. **Styling**: Use Tailwind classes or modify CSS variables in `src/index.css`

3. **Images**: Replace placeholder images in the config with your actual project screenshots

4. **Animations**: Adjust animation timing and effects in component files using Framer Motion

5. **SEO**: Update meta tags in `index.html` and add structured data as needed

## 📄 License

This project was generated through [Dualite](https://dualite.dev). Feel free to customize and use it for your personal portfolio.

## 🤝 Support

If you need help customizing this portfolio:
1. Check the configuration file (`src/config.ts`) for content updates
2. Review component documentation above
3. Refer to [Tailwind CSS documentation](https://tailwindcss.com/docs) for styling
4. Check [Framer Motion documentation](https://www.framer.com/motion/) for animations