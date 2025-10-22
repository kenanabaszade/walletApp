# 💳 Wallet App - Modern Transaction Management

<div align="center">

![Wallet App Banner](./screenshots/banner.png)
<!-- Replace with your app banner/logo -->

A beautiful, mobile-first wallet application built with React, TypeScript, and modern web technologies.

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.11-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](https://wallet-app-roan.vercel.app/) • [Report Bug](https://github.com/kenanabaszade/walletApp/issues) • [Request Feature](https://github.com/kenanabaszade/walletApp/issues)

</div>

---

## 📱 Screenshots

<div align="center">

### Main Screen (Transactions List)
<img width="516" height="1454" alt="image" src="https://github.com/user-attachments/assets/a5df1d66-b6a4-48c2-b255-fc7dd4be13d3" />
 
<!-- Screenshot of the main screen with card balance, daily points, and transaction list -->

### Transaction Detail Screen
 
<!-- Screenshot of the detail screen showing transaction information -->

 <img width="564" height="1454" alt="image" src="https://github.com/user-attachments/assets/5b5182c8-6067-4c41-b6dd-4f8cc4b0e237" />


## ✨ Features

### 💰 Financial Management
- 💳 **Card Balance Tracking** - Monitor your current balance and available credit ($1,500 limit)
- 📊 **Payment Status** - Real-time payment due notifications
- 🎯 **Daily Points System** - Earn points based on seasonal day calculations

### 📋 Transaction Features
- 📝 **Latest Transactions** - View your 10 most recent transactions
- 🌈 **Visual Indicators** - Color-coded transaction types with brand icons
- ⚡ **Pending Status** - Clear marking of pending transactions
- 👥 **Authorized Users** - Track transactions made by other users
- 🔍 **Detailed View** - Comprehensive transaction details on tap

### 🎨 User Interface
- 📱 **Mobile-First Design** - Optimized for mobile devices (max-width: 425px)
- 🎭 **Modern UI** - Clean, minimalist design with smooth animations
- 🌓 **Intuitive Navigation** - Easy-to-use interface with back navigation
- 🎨 **Brand Icons** - FontAwesome icons for visual appeal

### 💡 Smart Features
- 📅 **Smart Date Formatting** - "Yesterday", "Today" for recent, dates for older transactions
- ➕ **Payment Indicators** - "+" prefix for payments, regular for expenses
- 📈 **Percentage Display** - Cashback/rewards percentage on transactions
- 🔢 **K-Format Numbers** - Large numbers displayed in thousands (e.g., 456K)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v20.16.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v10.8.1 or higher) - Comes with Node.js

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kenanabaszade/walletApp.git
   cd walletApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern UI library
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Vite 7.1.11** - Next-generation frontend tooling
- **React Router DOM** - Client-side routing

### Styling & Icons
- **CSS3** - Modern styling with Flexbox/Grid
- **FontAwesome** - Icon library for brands and solid icons

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules

---

## 📂 Project Structure

```
walletApp/
├── 📁 src/
│   ├── 📁 components/          # React components
│   │   ├── CardBalance.tsx     # Card balance display
│   │   ├── DailyPoints.tsx     # Daily points calculator
│   │   ├── NoPaymentDue.tsx    # Payment status indicator
│   │   ├── TransactionItem.tsx # Individual transaction row
│   │   ├── TransactionsList.tsx # Main transactions screen
│   │   └── TransactionDetail.tsx # Transaction detail screen
│   ├── 📁 data/
│   │   └── transactions.json   # Test transaction data (10 items)
│   ├── 📁 types/
│   │   └── Transaction.ts      # TypeScript interfaces
│   ├── 📁 utils/
│   │   ├── dateUtils.ts        # Date formatting utilities
│   │   └── pointsCalculator.ts # Daily points calculation logic
│   ├── App.tsx                 # Main app component with routing
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles
├── 📁 public/                  # Static assets
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
├── HOW_TO_RUN.md               # Detailed running instructions
└── README.md                   # This file
```

---

## 🎯 Key Features Implementation

### Daily Points Calculator
The app implements a sophisticated daily points system based on seasonal days:

```typescript
Day 1 of season: 2 points
Day 2 of season: 3 points
Day 3+: 100% of (day-2) points + 60% of (day-1) points
```

**Example:**
- September 1st: 2 points
- September 2nd: 3 points
- September 3rd: 4 points (100% of Sept 1 + 60% of Sept 2)

Points over 1000 are displayed in K format (e.g., 28745 → 29K).

### Transaction Display Logic

1. **Pending Transactions**
   - Displays "Pending - " prefix before description
   - Example: "Pending - Card Number Used"

2. **Authorized User Transactions**
   - Shows user's name before the date
   - Example: "Diana - Yesterday"

3. **Date Formatting**
   - Within 7 days: Day names (Today, Yesterday, Monday)
   - Older: Date format (10/1/22)

4. **Payment vs Credit**
   - Payments: Amount prefixed with "+" (e.g., +$174.00)
   - Credits: Regular amount (e.g., $14.06)

---

## 💻 Usage Examples

### Viewing Transactions
1. Launch the app to see the main screen
2. View card balance, daily points, and payment status at the top
3. Scroll through the latest transactions list
4. Look for:
   - 🟣 Rainbow gradient icons for Payment transactions
   - 🎨 Branded color icons for merchants (Apple, IKEA, Target, etc.)

### Checking Transaction Details
1. Click/tap any transaction from the list
2. View detailed information:
   - Large transaction amount
   - Merchant name and timestamp
   - Transaction status (Approved/Pending)
   - Card used for the transaction
   - Total amount
3. Click the back button (blue chevron) to return

### Understanding Daily Points
The points displayed are calculated based on the current day within the season:
- The calculation uses a recursive formula
- Points accumulate throughout the season
- Displayed in "K" format when over 1000

---

## 🎨 Design Details

### Color Palette
- **Background**: `#F5F5F5` (Light gray)
- **Cards**: `#FFFFFF` (White)
- **Primary Text**: `#000000` (Black)
- **Secondary Text**: `#9CA3AF` (Gray)
- **Success**: `#4CAF50` (Green)
- **Accent**: `#5B9FED` (Blue)

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI)
- **Card Labels**: 12px, gray
- **Main Values**: 24px, bold, black
- **Transaction Names**: 16px, medium weight

### Icons & Branding
- **Apple**: Black background with white logo
- **Payment**: Rainbow gradient background
- **IKEA**: Blue background (#005AA0)
- **Target**: Red background (#CC0000)
- **Amazon**: Orange background (#FF9900)
- **Walmart**: Blue background (#0071CE)

---

## 🧪 Testing

The app includes comprehensive test data with 10 transactions covering various scenarios:

- ✅ Pending transactions
- ✅ Authorized user transactions
- ✅ Payment and credit types
- ✅ Recent and old dates
- ✅ Different merchant brands
- ✅ Various transaction amounts

### Test Checklist
- [ ] Card balance displays correctly
- [ ] Daily points calculation is accurate
- [ ] Payment status shows properly
- [ ] All 10 transactions are visible
- [ ] Payment icons have rainbow gradient
- [ ] Pending transactions show "Pending" prefix
- [ ] Authorized user names appear correctly
- [ ] Date formatting works (day names vs dates)
- [ ] Transaction details screen opens on click
- [ ] Back navigation works smoothly

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Kenan Abaszade**

- GitHub: [@kenanabaszade](https://github.com/kenanabaszade)
- Repository: [walletApp](https://github.com/kenanabaszade/walletApp)

---

## 🙏 Acknowledgments

- Design inspiration from modern fintech applications
- FontAwesome for the beautiful icon library
- React community for excellent documentation and support
- Vite for blazing-fast development experience

---

## 📧 Contact & Support

Have questions or suggestions? Feel free to:
- 🐛 [Open an issue](https://github.com/kenanabaszade/walletApp/issues)
- 💬 [Start a discussion](https://github.com/kenanabaszade/walletApp/discussions)
- 📧 Contact via GitHub

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

Made with ❤️ using React & TypeScript

</div>
