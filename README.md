# Modern Portfolio Website

A stunning, modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, a sophisticated design system, and full responsiveness.

## ✨ Features

- **Modern Design**: Sophisticated aesthetic with gradient accents and glassmorphic elements
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Fully Responsive**: Optimized for all screen sizes and devices
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Built with Next.js 15 for optimal performance and SEO
- **Custom Design System**: Unique color palette and typography
- **Interactive Sections**:
  - Hero with animated background
  - About section with skills and expertise bars
  - Projects showcase with hover effects
  - Work experience timeline
  - Contact form with social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this project

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Personal Information

Edit the following files to add your personal information:

1. **Hero Section** (`components/Hero.tsx`):
   - Change the title and tagline
   - Update the description

2. **About Section** (`components/About.tsx`):
   - Update the bio paragraphs
   - Modify the skills array
   - Adjust expertise percentages

3. **Projects Section** (`components/Projects.tsx`):
   - Replace the projects array with your own projects
   - Add project URLs and GitHub links
   - Update descriptions and tech stacks

4. **Experience Section** (`components/Experience.tsx`):
   - Replace the experiences array with your work history
   - Update roles, companies, and achievements

5. **Contact Section** (`components/Contact.tsx`):
   - Update email address
   - Change location
   - Add your social media links

### Design Customization

#### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --background: 8 8 12;        /* Dark background */
  --foreground: 250 250 252;   /* Light text */
  --primary: 99 102 241;       /* Indigo */
  --secondary: 139 92 246;     /* Purple */
  --accent: 236 72 153;        /* Pink */
}
```

Colors are in RGB format (without commas). You can use any color picker and convert to this format.

#### Fonts

The portfolio uses:
- **Playfair Display** for headings (elegant serif)
- **Outfit** for body text (modern sans-serif)

To change fonts, edit `app/layout.tsx` and import different Google Fonts.

#### Animations

Modify animation timings and effects in individual components. All animations use Framer Motion and can be customized in the respective component files.

### SEO & Metadata

Update the metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Software Developer",
  description: "Your custom description",
};
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   ├── Experience.tsx      # Work experience timeline
│   ├── Contact.tsx         # Contact form
│   ├── Navigation.tsx      # Navigation bar
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── package.json
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🛠️ Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React 19** - UI library

## 📝 Adding Content

### Adding a New Project

In `components/Projects.tsx`, add to the projects array:

```typescript
{
  title: 'Your Project',
  description: 'Project description...',
  tags: ['React', 'Node.js', 'MongoDB'],
  gradient: 'from-blue-500 to-purple-600',
}
```

### Adding Work Experience

In `components/Experience.tsx`, add to the experiences array:

```typescript
{
  role: 'Your Role',
  company: 'Company Name',
  period: '2023 - Present',
  description: 'What you did...',
  achievements: [
    'Achievement 1',
    'Achievement 2',
  ]
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the production version:

```bash
npm run build
npm run start
```

The app can be deployed to any platform that supports Next.js (Netlify, AWS, etc.)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 💡 Tips

- Replace placeholder content with your actual information
- Add your own project images to the `public` folder
- Customize colors to match your personal brand
- Test on multiple devices for responsiveness
- Optimize images before adding them
- Add your actual social media links

---

Built with ❤️ using Next.js 15
