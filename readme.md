# LearnSync

LearnSync is an AI-powered interactive learning platform that aims to revolutionize education by integrating AI-driven assistance, live sessions, and interactive study tools. The platform is designed for two primary roles: **Students** and **Teachers (Admins)**, ensuring a collaborative and engaging learning experience.

## Features

- **AI-Powered Learning** – AI chat, notes, and quiz generation using Gemini API.
- **Interactive Community** – Study groups, discussions, and live sessions.
- **Student Dashboard** – Tracks progress, exams, and achievements.
- **Teacher Panel** – Upload materials, manage quizzes, and monitor students.
- **Real-Time Features** – AI chat, live video/audio sessions, and a code editor.

LearnSync focuses on personalized learning, helping students grasp concepts effectively, while enabling teachers to manage resources, assessments, and student performance seamlessly.

---

## Technology Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **AI Features:** Gemini API (AI-powered assistance)
- **Authentication:** Supabase (secure user management)
- **Real-Time Communication:** WebRTC, Socket.io (live sessions and chat)
- **Storage:** Supabase (for managing study materials)

---

## Installation Guide

### Prerequisites
Ensure you have the following installed:
- Node.js (>= 18)
- PostgreSQL
- Supabase account setup
- Gemini API access

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/LearnSync.git
   cd LearnSync
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run database migrations**
   ```bash
   npm run migrate
   ```

5. **Start the backend server**
   ```bash
   npm start
   ```

6. **Start the frontend**
   ```bash
   cd client
   npm install
   npm run dev
   ```

---

## Usage

- **Students** can:
  - Join study groups
  - Access AI-generated notes and quizzes
  - Participate in live sessions
  - Track learning progress

- **Teachers (Admins)** can:
  - Upload study materials
  - Manage quizzes and assignments
  - Conduct live sessions
  - Monitor student performance

---

## Field of Project

- **Smart Education & E-Learning**
- **AI-Powered Interactive Learning**
- **Web-Based Learning Management Systems**
- **Real-Time Student-Teacher Collaboration**

---

## Contribution

We welcome contributions! Follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Added new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

---

## License

This project is licensed under the MIT License.

---

## Contact

For any issues or suggestions, feel free to open an issue or reach out to us!

Happy Learning! 🚀

