import React from 'react';
import ReactDOM from 'react-dom/client'; // Use `react-dom/client` for React 18
import './style.css';  // Include your styles

const App = () => {
  const redirectTo = (role) => {
    if (role === 'student') {
      window.location.href = 'https://student-app-livid-six.vercel.app/'; // Replace with your actual student app URL
    } else if (role === 'teacher') {
      window.location.href = 'https://teacher-locate-app.vercel.app/'; // Replace with your actual teacher app URL
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to LocateMyProf</h1>
      <p>Who are you?</p>
      <button onClick={() => redirectTo('student')} style={{ marginRight: '20px', padding: '10px 20px' }}>
        Student
      </button>
      <button onClick={() => redirectTo('teacher')} style={{ padding: '10px 20px' }}>
        Teacher
      </button>
    </div>
  );
};

// Use createRoot for React 18
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
