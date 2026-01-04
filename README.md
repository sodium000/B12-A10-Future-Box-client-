# PlateShare 🍽️

PlateShare is a modern web application designed to connect food donors with those in need, reducing food waste and helping communities share resources. Built with React and Firebase, PlateShare provides a seamless platform for individuals and organizations to donate surplus food and for recipients to request food assistance.

#Live Link
https://platshear.firebaseapp.com/

## 🌟 Features

### For Donors
- **Add Food Donations**: Easily post available food items with details including:
  - Food name and quantity
  - Pickup location
  - Expiration date
  - Food images
  - Additional notes (storage instructions, allergy info)
- **Manage My Food**: View and manage all your posted food donations
- **User Authentication**: Secure login and registration using Firebase Authentication

### For Recipients
- **Browse Available Food**: View all available food donations in your area
- **Request Food**: Submit food requests with location and need details
- **Food Details**: View detailed information about each food item
- **My Food Requests**: Track all your food requests in one place

### General Features
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Dark/Light Theme**: Theme toggle support for better user experience
- **Secure Authentication**: Firebase-powered user authentication
- **Real-time Updates**: Dynamic food listing with sorting capabilities
- **Private Routes**: Protected routes for authenticated users

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **Framer Motion** - Animation library for smooth UI transitions
- **React Icons** - Icon library
- **Styled Components** - CSS-in-JS styling
- **SweetAlert2** - Beautiful alert dialogs

### Backend & Services
- **Firebase** - Authentication and backend services
  - Firebase Authentication
  - Firebase Admin SDK
- **REST API** - Backend API for food data management (localhost:3000)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PlateShare
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_messaging_sender_id
   VITE_appId=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
PlateShare/
├── src/
│   ├── Component/          # Main application components
│   │   ├── AddFood/        # Food donation form
│   │   ├── FoodRequest/    # Food request form
│   │   ├── FoodDetails/    # Food item details page
│   │   ├── ManageMyFood/   # Manage user's food donations
│   │   ├── AllFoodShow/    # Display all available food
│   │   ├── Login/          # Login component
│   │   ├── Regiestration/  # Registration component
│   │   ├── HowWork/        # How it works section
│   │   └── OurMission/     # Mission statement
│   ├── AuthContext/        # Authentication context
│   ├── AuthProvider/       # Authentication provider
│   ├── NavBar/             # Navigation component
│   ├── Footer/             # Footer component
│   ├── BannerSection/      # Homepage banner
│   ├── FootCard/           # Food card component
│   ├── firebase/           # Firebase configuration
│   └── App.jsx             # Main App component
├── Routes/                 # Application routes
│   ├── Routes.jsx          # Main routing configuration
│   └── PrivateRoutes/      # Protected route wrapper
├── Layout/                 # Layout components
│   ├── HomeLayout.jsx      # Home page layout
│   └── AuthLayout.jsx      # Authentication pages layout
├── Pages/                  # Page components
└── public/                 # Static assets

```

## 🔐 Authentication

PlateShare uses Firebase Authentication for secure user management. Users can:
- Register with email and password
- Login with existing credentials
- Access protected routes only when authenticated

## 🎨 UI/UX Features

- **Modern Design**: Clean, intuitive interface with gradient backgrounds
- **Responsive Layout**: Mobile-first design that adapts to all screen sizes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Theme Support**: Dark/light theme toggle functionality
- **Form Validation**: Comprehensive form validation for better data quality

## 🌐 Routes

- `/` - Home page with featured food items
- `/auth/login` - User login page
- `/auth/regiestration` - User registration page
- `/addfood` - Add food donation (protected)
- `/allfood` - View all available food
- `/food/:id` - Food item details (protected)
- `/managemyfood` - Manage user's food donations (protected)
- `/myfoodrequest` - View user's food requests (protected)
- `/*` - 404 error page

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Reque

---

**Note**: Make sure your backend API server is running on `localhost:3000` for the application to function properly.
