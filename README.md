

# 🚀 Vaibhav Chaudhary - ML/AI Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📋 About

A modern, responsive, and highly customizable portfolio website built with **Next.js 15** and **React 19**. This portfolio showcases expertise in **Machine Learning**, **Artificial Intelligence**, and **Data Science** with an elegant, professional design that highlights ML/AI projects, research work, and technical skills.

### ✨ Key Features

- 🎨 **Modern UI/UX** with smooth animations and responsive design
- 🚀 **Next.js 15** with App Router for optimal performance
- 🎭 **Interactive Skills Section** with animated skill cards
- 📱 **Fully Responsive** design for all devices
- 🌙 **Dark Theme** optimized for developer portfolios
- 📧 **Contact Form** with email integration
- 📝 **Blog Integration** with dev.to API
- 🎯 **SEO Optimized** with proper meta tags
- 🔧 **Easy Customization** through configuration files

---

## 🎬 Demo

![Portfolio Preview](./public/image/screen.png)

### 🌐 Live Preview
**View the live portfolio:** [vaibhav-chaudhary.netlify.app](https://vaibhav-chaudhary.netlify.app/)

### 📱 Mobile Responsive
The portfolio is fully responsive and optimized for all devices - desktop, tablet, and mobile.

---

## 📑 Table of Contents

- [About](#-about)
- [Demo](#-demo)
- [Sections](#-sections)
- [Installation](#-installation)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Tutorials](#-tutorials)
- [Tech Stack](#-tech-stack)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Sections

The portfolio includes the following main sections:

- 🏠 **Hero Section** - Introduction with animated background
- 👨‍💻 **About Me** - Personal information and professional summary
- 💼 **Experience** - Work experience and professional journey
- 🛠️ **Skills** - Technical skills with interactive skill cards
- 🚀 **Projects** - Showcase of ML/AI projects and applications
- 🎓 **Education** - Academic background and certifications
- 📝 **Blog** - Latest blog posts from dev.to integration
- 📞 **Contact** - Contact form and social media links

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.0 or higher) - [Download here](https://nodejs.org/en/download/)
- **Git** - [Download here](https://git-scm.com/downloads)
- **npm** or **yarn** package manager

### Verify Installation

Check that you have the correct versions installed:

```bash
node --version    # Should be v18.0 or higher
npm --version     # Should be v8.0 or higher
git --version     # Any recent version
```

## 🚀 Getting Started

### 1. Fork and Clone the Repository

First, fork this repository by clicking the **Fork** button at the top right of the page. Then clone your forked repository:

```bash
git clone https://github.com/<YOUR-GITHUB-USERNAME>/developer-portfolio.git
cd developer-portfolio
```

### 2. Install Dependencies

Install all required packages using npm or yarn:

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### 3. Start Development Server

Run the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

### 4. View the Application

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio running locally.

The page will automatically reload when you make changes to the source files.

---

### 🐳 Running with Docker

#### Option 1: Using Docker Compose (Recommended)

```bash
# Build and run the application
docker-compose up --build

# Access the application at http://localhost:3000
```

#### Option 2: Using Docker directly

```bash
# Build the Docker image
docker build -t nextjs-portfolio -f Dockerfile.dev .

# Run the container
docker run -p 3000:3000 nextjs-portfolio

# Access the application at http://localhost:3000
```

---

## ⚙️ Usage

### 1. Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Google Tag Manager (Optional)
NEXT_PUBLIC_GTM=your_gtm_id

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Telegram Bot (Optional - for contact form notifications)
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Email Configuration (Optional)
GMAIL_PASSKEY=your_gmail_app_password
EMAIL_ADDRESS=your_email@gmail.com
```

### 2. Customize Your Data

Edit the files in the `utils/data/` folder to personalize your portfolio:

#### Personal Information (`utils/data/personal-data.js`)

```javascript
export const personalData = {
  name: "YOUR NAME",
  profile: "/your-profile-image.png",
  designation: "Your Professional Title",
  description: "Your professional description...",
  email: "your.email@example.com",
  phone: "+1234567890",
  address: "Your Location",
  github: "https://github.com/yourusername",
  linkedIn: "https://www.linkedin.com/in/yourprofile",
  devUsername: "yourdevusername", // For dev.to blog integration
  resume: "https://your-resume-link.com",
};
```

#### Skills (`utils/data/skills.js`)

```javascript
export const skillsData = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "PyTorch",
  // Add your skills here
];
```

#### Projects (`utils/data/projects-data.js`)

```javascript
export const projectsData = [
  {
    id: 1,
    title: "Your Project Title",
    des: "Project description...",
    img: "/image/project1.jpg",
    iconLists: ["/path/to/icon1.svg", "/path/to/icon2.svg"],
    link: "https://your-project-link.com",
  },
  // Add more projects
];
```

### 3. Add Your Images

- Replace `/public/vaibhav.png` with your profile image
- Add project images to `/public/image/` folder
- Update image paths in your data files accordingly

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Sign up/Login** to [Vercel](https://vercel.com/)
2. Click **"New Project"**
3. Import your GitHub repository
4. Configure environment variables in the Vercel dashboard
5. Click **Deploy**

Vercel will automatically detect your Next.js app and deploy it with optimal settings.

### Deploy to Netlify

1. **Sign up/Login** to [Netlify](https://www.netlify.com/)
2. Click **"New site from Git"**
3. Connect your GitHub account and select your repo
4. Configure environment variables in **Site Settings > Environment**
5. Click **Deploy Site**

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Environment Variables for Deployment

Make sure to set these environment variables in your deployment platform:

- `NEXT_PUBLIC_GTM` - Google Tag Manager ID
- `NEXT_PUBLIC_APP_URL` - Your deployed app URL
- `TELEGRAM_BOT_TOKEN` - For contact form notifications
- `TELEGRAM_CHAT_ID` - Your Telegram chat ID
- `GMAIL_PASSKEY` - Gmail app password
- `EMAIL_ADDRESS` - Your email address

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. Build Errors

**Error:** `ReferenceError: document is not defined`
- **Solution:** This has been fixed in the latest version. The issue was caused by the GoogleTagManager component trying to access the document object during SSR. The component has been removed from the layout to prevent this error.

**Error:** `next is not recognized as an internal or external command`
```bash
npm install -g next
npm run dev
```

#### 2. Skills Icons Not Showing

**Issue:** Skills section shows question marks instead of icons
- **Solution:** This has been resolved. The SVG icons are now properly configured as React components.

#### 3. Environment Variables Not Working

**Issue:** Contact form or other features not working
- **Solution:** Make sure your `.env.local` file is in the root directory and variables are properly named.

#### 4. Docker Issues

**Issue:** Docker build fails
```bash
# Clear Docker cache and rebuild
docker system prune -a
docker-compose up --build
```

#### 5. Port Already in Use

**Issue:** Port 3000 is already in use
```bash
# Kill process using port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

---

## 📚 Tutorials

### Gmail App Password Setup

1. **Log in to your Google Account** at [https://myaccount.google.com/](https://myaccount.google.com/)
2. Navigate to **Security** from the left sidebar
3. Enable **2-Step Verification** if not already enabled
4. Click on **App Passwords**
5. Select **Mail** and **Other (Custom name)**
6. Name it "Portfolio" and click **Generate**
7. Copy the 16-character password for your `GMAIL_PASSKEY` environment variable

### Create a Telegram Bot

1. **Open Telegram** and search for **@BotFather**
2. Start a chat and use `/newbot` command
3. Choose a name and username for your bot
4. Save the **Token** for your `TELEGRAM_BOT_TOKEN` environment variable
5. To get your **Chat ID**:
   - Send a message to your bot
   - Visit: `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates`
   - Find your chat ID in the response

### Blog Integration with dev.to

1. Set your `devUsername` in `utils/data/personal-data.js`
2. The app automatically fetches your latest blog posts
3. Ensure your blogs are publicly visible on dev.to

---

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 15.5.2** - React framework with App Router
- **React 19.0.0** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Sass** - CSS preprocessor

### Key Dependencies
- **@emailjs/browser** - Email service integration
- **@next/third-parties** - Third-party integrations
- **axios** - HTTP client
- **lottie-react** - Animation library
- **nodemailer** - Email sending
- **react-fast-marquee** - Scrolling text animations
- **react-google-recaptcha** - Form protection
- **react-icons** - Icon library
- **react-toastify** - Toast notifications
- **sharp** - Image optimization

### Development Tools
- **@svgr/webpack** - SVG as React components
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Thanks to all contributors who have helped improve this portfolio template
- Special thanks to the Next.js and React communities
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Lottie](https://lottiefiles.com/)

---

## 📞 Contact

**Vaibhav Chaudhary**
- Email: vaibhavchaudhary508@gmail.com
- LinkedIn: [vaibhav-chaudhary-4bb80933b](https://www.linkedin.com/in/vaibhav-chaudhary-4bb80933b)
- GitHub: [vaibhavchau37](https://github.com/vaibhavchau37)
- Portfolio: [vaibhav-chaudhary.netlify.app](https://vaibhav-chaudhary.netlify.app/)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Vaibhav Chaudhary](https://github.com/vaibhavchau37)

</div> 
