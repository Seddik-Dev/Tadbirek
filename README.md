# 💰 Tadbirek

<p align="center">
  <strong>A Moroccan Personal Expense Management Application</strong><br>
  Organize • Track • Control your money daily
</p>

---

## 🌍 About Tadbirek

**Tadbirek** is a Moroccan personal finance management web application designed to help users manage their income and expenses in a simple, clear, and efficient way.

It allows users to monitor their financial activity, control budgets, and gain better insights into their spending habits — all through a clean and user-friendly dashboard.

The goal of Tadbirek is to make personal finance management accessible and stress-free.

---

## ✨ Features

- 🔐 Secure Authentication (Register / Login / Logout)
- 📊 Financial Dashboard Overview
- 💰 Track Income
- 💸 Manage Expenses
- 🏷 Expense Categories
- 📈 Income vs Expenses Visualization
- 🎯 Budget Tracking
- 🧾 Transaction History
- 📱 Fully Responsive Design

---

## 📊 Dashboard Overview

The dashboard provides:

- Total Balance
- Monthly Income
- Monthly Expenses
- Remaining Budget
- Recent Transactions
- Financial Charts & Insights

All displayed in a modern, minimal and easy-to-read interface.

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap / Tailwind CSS
- JavaScript

### Backend
- PHP / Laravel
- MySQL

### Authentication
- Laravel Sanctum (if used)

---

## 🚀 Installation Guide

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/tadbirek.git
cd tadbirek
```

### 2️⃣ Install dependencies

```bash
composer install
npm install
```

### 3️⃣ Configure environment file

```bash
cp .env.example .env
```

Update your database credentials inside `.env`.

### 4️⃣ Generate application key

```bash
php artisan key:generate
```

### 5️⃣ Run migrations

```bash
php artisan migrate
```

### 6️⃣ Start development server

```bash
php artisan serve
```

Application will run at:

```
http://127.0.0.1:8000
```

---

## 📁 Project Structure

```
tadbirek/
│
├── app/
├── database/
├── resources/
├── routes/
├── public/
└── README.md
```

---

## 🎯 Future Improvements

- 📊 Advanced Analytics
- 📄 Export Reports (PDF / Excel)
- 🌙 Dark Mode
- 📲 Mobile App Version
- 🔔 Smart Financial Notifications
- 🎯 Savings Goals System

---

## 🇲🇦 Built for Moroccan Users

- Currency: MAD (Moroccan Dirham)
- Designed for daily personal finance management
- Simple and intuitive UX

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📜 License

This project is open-source and available under the MIT License.

---

<p align="center">
  Made with ❤️ for smarter financial management
</p>
