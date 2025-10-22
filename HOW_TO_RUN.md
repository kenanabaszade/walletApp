# How to Run the Wallet App

## Prerequisites

- Node.js (v20.16.0 or higher)
- npm (v10.8.1 or higher)

## Installation & Setup

### 1. Navigate to the Project Directory

```bash
cd walletApp
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 19.1.1
- TypeScript
- Vite
- React Router DOM
- FontAwesome icons

## Running the Application

### Development Mode

To run the app in development mode with hot reload:

```bash
npm run dev
```

The application will start and be available at:
- **Local**: `http://localhost:5173`
- If port 5173 is occupied, Vite will automatically use the next available port

**Note:** The terminal will display the exact URL where the app is running.

### Production Build

To create an optimized production build:

```bash
npm run build
```

The built files will be generated in the `dist/` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
walletApp/
├── src/
│   ├── components/          # React components
│   │   ├── CardBalance.tsx
│   │   ├── DailyPoints.tsx
│   │   ├── NoPaymentDue.tsx
│   │   ├── TransactionItem.tsx
│   │   ├── TransactionsList.tsx
│   │   └── TransactionDetail.tsx
│   ├── data/
│   │   └── transactions.json    # Test transaction data
│   ├── types/
│   │   └── Transaction.ts       # TypeScript interfaces
│   ├── utils/
│   │   ├── dateUtils.ts         # Date formatting utilities
│   │   └── pointsCalculator.ts  # Daily points calculation
│   ├── App.tsx                  # Main app with routing
│   └── main.tsx                 # Entry point
├── package.json
└── README.md
```

## Features to Test

### Main Screen (TransactionsList)

1. **Card Balance Block**
   - Shows current balance: $17.30
   - Shows available credit: $1,482.70 (out of $1,500 limit)

2. **No Payment Due Block**
   - Displays payment status message
   - Shows checkmark icon at bottom-right

3. **Daily Points Block**
   - Calculates points based on current season day
   - Displays in "K" format if over 1000

4. **Latest Transactions List**
   - 10 transactions with various types
   - Payment transactions have rainbow gradient icons
   - Credit transactions have branded color icons
   - Click any transaction to view details

### Transaction Detail Screen

1. Click any transaction from the list
2. View detailed information:
   - Large amount display
   - Merchant name and date/time
   - Transaction status
   - Card used
   - Total amount
3. Click back button (blue chevron) to return to list

### Special Features to Verify

1. **Pending Transactions**
   - First transaction (Apple) shows "Pending - " prefix in description

2. **Authorized User**
   - First and third transactions show "Diana - " before the date

3. **Date Formatting**
   - Recent transactions (within 7 days): Show day names (Today, Yesterday, Monday, etc.)
   - Older transactions: Show date format (M/D/YY)

4. **Payment Types**
   - Payment transactions: Amount prefixed with "+"
   - Credit transactions: Regular amount display

5. **Daily Points Calculation**
   - Day 1 of season: 2 points
   - Day 2 of season: 3 points
   - Day 3+: 100% of (day-2) + 60% of (day-1)
   - Displayed in "K" format when over 1000

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically select another port. Check the terminal output for the actual URL.

### Dependencies Not Installing

If you encounter issues installing dependencies:

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Build Errors

If you see TypeScript or build errors:

```bash
# Check for linting errors
npm run lint

# Rebuild the project
npm run build
```

## Browser Compatibility

The app works best on:
- Chrome (recommended)
- Firefox
- Safari
- Edge

**Optimized for mobile viewport (max-width: 425px)**

## Screenshots

After running the app, you should see:
- Clean, modern mobile interface
- White cards on light gray background
- Transaction list with colorful icons
- Smooth navigation between screens

## Support

For any issues or questions, please check:
1. Node.js version: `node --version`
2. npm version: `npm --version`
3. Terminal output for error messages

---

**Enjoy exploring the Wallet App!** 🎉

