# E-commerce Chatbot Interface

A modern, responsive chatbot interface built with Next.js and Tailwind CSS for e-commerce websites. This chatbot provides an engaging user experience with automatic greetings, discount offers, and intelligent responses to customer inquiries.

## Features

- 🎯 **Responsive Design**: Works seamlessly on both desktop and mobile devices
- 💬 **Interactive Chat**: Real-time messaging with typing indicators
- 🎁 **Smart Responses**: Context-aware responses for common e-commerce queries
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- 📱 **Floating Interface**: Non-intrusive floating chat button
- 🚀 **Quick Actions**: Pre-filled message buttons for common questions
- ⚡ **Performance**: Built with Next.js 14 and optimized for speed

## Chatbot Capabilities

The chatbot can handle various customer inquiries including:

- **Discounts & Promotions**: Information about current offers and coupon codes
- **Shipping & Delivery**: Details about shipping options and delivery times
- **Returns & Refunds**: Policy information and return procedures
- **General Support**: Product recommendations and store information
- **Human Agent**: Seamless handoff to customer service team

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Animations**: CSS animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ecommerce-chatbot
```

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with demo e-commerce layout
├── components/
│   └── Chatbot.tsx          # Main chatbot component
├── lib/
│   └── utils.ts             # Utility functions
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Customization

### Styling

The chatbot uses Tailwind CSS with custom color schemes. You can modify the colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Main brand color
    // ... other shades
  },
  secondary: {
    500: '#d946ef', // Accent color
    // ... other shades
  }
}
```

### Chatbot Responses

Modify the `generateBotResponse` function in `components/Chatbot.tsx` to customize responses based on your business needs.

### Quick Action Buttons

Add or modify the quick action buttons in the chat footer to match your most common customer inquiries.

## Deployment

This project can be deployed to various platforms:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting service**

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue in the GitHub repository or contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
