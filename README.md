# Personal Portfolio

A modern, responsive portfolio website built with Next.js 13+, TypeScript, and Tailwind CSS.

## Features

- 🚀 Next.js 13+ with App Router
- 💻 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🔍 SEO friendly
- 📝 Blog support (optional)
- 📬 Contact form
- 🌙 Dark mode support

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file based on `.env.example`:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── 📁 public/                     # Static assets
├── 📁 src/                        # Source code
│   ├── 📁 app/                    # App Router
│   ├── 📁 components/             # React components
│   ├── 📁 lib/                    # Utility libraries
│   ├── 📁 hooks/                  # Custom React hooks
│   ├── 📁 types/                  # TypeScript types
│   ├── 📁 data/                   # Static data
│   ├── 📁 styles/                 # CSS files
│   └── 📁 utils/                  # Utility functions
└── 📁 docs/                       # Documentation
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
