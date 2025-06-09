# Aryan Mishra's Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and blog posts in a clean and professional design.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Built-in dark mode support
- **Blog Section**: MDX-powered blog with syntax highlighting
- **Contact Form**: Working contact form with email integration
- **Project Showcase**: Interactive project cards with live demos
- **Skills Timeline**: Visual representation of skills and experience
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Content**: MDX
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aryanmishra24/my_portfolio.git
   ```

2. Install dependencies:
   ```bash
   cd my_portfolio
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
my_portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── sections/    # Page sections
│   │   ├── ui/         # Reusable UI components
│   │   └── layout/     # Layout components
│   ├── content/         # Blog content (MDX)
│   ├── data/           # Static data
│   ├── lib/            # Utility functions
│   └── types/          # TypeScript types
├── public/             # Static assets
└── tailwind.config.js  # Tailwind configuration
```

## 🎨 Customization

1. **Projects**: Edit `src/data/projects.ts` to update your projects
2. **Skills**: Modify `src/data/skills.ts` to update your skills
3. **Blog Posts**: Add new MDX files in `src/content/blog/`
4. **Styling**: Customize colors and theme in `tailwind.config.js`

## 📝 Blog Posts

The blog section uses MDX for content. To add a new blog post:

1. Create a new `.mdx` file in `src/content/blog/`
2. Add frontmatter with title, date, and description
3. Write your content using MDX syntax

## 📧 Contact Form

The contact form uses Nodemailer to send emails. Make sure to:

1. Set up your email credentials in `.env.local`
2. For Gmail, use an App Password instead of your regular password
3. Test the form after deployment

## 🚀 Deployment

This portfolio is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Create a new project on Vercel
3. Import your forked repository
4. Add your environment variables
5. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Aryan Mishra**
- GitHub: [@aryanmishra24](https://github.com/aryanmishra24)
- LinkedIn: [Aryan Mishra](https://www.linkedin.com/in/aryan--mishra)
- Email: mishraaryan350@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
