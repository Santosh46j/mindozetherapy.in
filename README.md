# Mindoze Therapy - React Application

A modern, responsive React application for Mindoze Therapy, providing professional therapy and counseling services.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Quiz**: Mental health assessment quiz with personalized results
- **FAQ Section**: Expandable FAQ section with smooth animations
- **Counselor Profiles**: Professional counselor profiles with booking functionality
- **Blog Section**: Latest articles and resources
- **Contact Form**: Integrated contact form for inquiries
- **Smooth Animations**: CSS-based scroll reveal animations
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## Technologies Used

- **React 18.2.0**: Modern React with functional components and hooks
- **CSS Modules**: Scoped styling with CSS custom properties
- **React Hooks**: useState for state management, useEffect for animations
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mindoze-therapy-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── App.js              # Main application component
├── App.css             # Main application styles
├── index.js            # React application entry point
└── index.css           # Global styles

public/
├── index.html          # HTML template
├── manifest.json       # PWA manifest
├── robots.txt          # Search engine crawling rules
└── favicon.ico         # Website favicon
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## Deployment

The application can be deployed to any static hosting service:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use the `gh-pages` package for deployment

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Mindoze Therapy
- Website: [mindozetherapy.com](https://mindozetherapy.com)
- Email: contact@mindozetherapy.com

---

Built with ❤️ using React