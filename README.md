# Time Tracking Dashboard

![Dashboard Screenshot](/public/desktop-preview.jpg)

## Overview

A sophisticated time tracking dashboard built with React and TypeScript, designed to help users monitor and optimize their productivity. This interactive application provides a clean, modern interface for managing daily activities and analyzing time allocation patterns.

## Features

- 📊 Interactive time tracking dashboard
- 🕒 Real-time activity monitoring
- 📱 Responsive design for all devices
- 🎨 Modern UI with Rubik font family
- 📈 Visual data representation
- 🔄 Dynamic time period switching (daily/weekly/monthly)

## Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Font:** Rubik (Google Fonts)
- **Version Control:** Git with gitmoji

## Project Structure

```
project/
├── public/
│   ├── desktop-preview.jpg
│   ├── image-jeremy.png
│   └── favicon-32x32.png
├── src/
│   ├── components/
│   │   ├── TimeCard.tsx     # Time tracking card component
│   │   └── ProfileCard.tsx  # User profile and timeframe selection
│   ├── types/               # TypeScript type definitions
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── index.html
├── tailwind.config.js      # Tailwind configuration
└── package.json
```

## Design System

### Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Components

#### ProfileCard

- User information display
- Timeframe selection (daily/weekly/monthly)
- Responsive layout adapting to different viewports

#### TimeCard

- Activity time tracking
- Previous period comparison
- Dynamic background colors
- Hover interactions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. Clone the repository

   ```bash
   git clone [https://github.com/mechitoua/time-tracking-dashboard.git]
   cd time-tracking-dashboard
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Build for production
   ```bash
   npm run build
   # or
   yarn build
   ```

## Usage

The dashboard provides an intuitive interface for:

- Viewing time spent on different activities
- Switching between daily, weekly, and monthly views
- Analyzing time allocation patterns
- Managing and tracking various tasks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Maintain component modularity
- Write meaningful commit messages
- Add appropriate documentation
- Ensure responsive design

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design from Frontend Mentor
- Rubik font family by Google Fonts
- React community for excellent tools and resources
