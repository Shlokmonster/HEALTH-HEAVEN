🌿 Health-Heaven
A responsive web application designed for users to easily book doctor appointments, get real-time insights, and interact with healthcare professionals. Built using React.js, TypeScript, and TailwindCSS, this platform aims to bridge the gap between prospective patients and trusted healthcare providers.



🚀 Features
🔍 Search & Filter: Find doctors by specialty or location in real-time.

📄 Doctor Profiles: View detailed doctor information including experience, ratings, availability, and consultation fees.

📆 Appointment Booking: Simple UI to book and view appointments (mock functionality for now).

🌗 Dark Mode: Toggle between dark and light themes for a personalized experience.

📱 Responsive Design: Seamless experience across desktop and mobile devices.

🛠 Tech Stack

Frontend	Styling	Hosting
React 18	TailwindCSS	Firebase Hosting
TypeScript	Headless UI	Firebase Firestore
📂 Repository Structure
php
Copy
Edit
Health-Heaven/
├── public/               # Static assets and index.html
├── src/                  
│   ├── components/       # UI components (Navbar, DoctorProfile, etc.)
│   ├── context/          # Context for theme and booking data
│   ├── pages/            # Routes for different pages
│   ├── lib/              # Helper functions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── firebase.json         # Firebase Hosting configuration
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind configuration
└── vite.config.ts        # Vite config for fast builds
🚀 Getting Started
Clone the Repository

bash
Copy
Edit
git clone https://github.com/Shlokmonster/Health-Heaven.git
cd Health-Heaven
Install Dependencies

bash
Copy
Edit
npm install
Run Locally

bash
Copy
Edit
npm run dev
# Open http://localhost:5173
Deploy to Firebase

bash
Copy
Edit
npm run build
firebase deploy
🌟 Future Improvements
Backend integration for live booking and doctor availability

User authentication using Firebase Auth

Add calendar functionality to manage appointments

Implement real-time doctor availability and notifications

🤝 Contributing
Feel free to open issues, suggest features, or submit pull requests to improve the platform.

📄 License
Distributed under the MIT License. See LICENSE.md for details.

