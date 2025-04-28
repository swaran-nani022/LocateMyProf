import React from 'react';
import ReactDOM from 'react-dom/client';
//import './style.css'; // We'll inline the CSS to ensure it's applied

const App = () => {
  const redirectTo = (role) => {
    if (role === 'student') {
      window.location.href = 'https://student-app-livid-six.vercel.app/';
    } else if (role === 'teacher') {
      window.location.href = 'https://teacher-locate-app.vercel.app/';
    }
  };

  return (
    <div style={{
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '320px',
      minHeight: '100vh',
      backgroundColor: '#', // Very dark gray
      color: '#BFBFBF',         // Light gray
      fontFamily: "'Inter', sans-serif",
      textAlign: 'center',
    }}>
      <h1 style={{
        fontSize: '3rem',
        lineHeight: 1.1,
        fontWeight: 700,
        marginBottom: '2rem',
        backgroundImage: 'linear-gradient(to right,rgb(95, 227, 248),rgb(11, 10, 10))', // Medium gray to black
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}>
        Welcome to LocateMyProf
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: '#000',       // Light gray
        marginBottom: '2rem',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        Who are you?
      </p>
      <div style={{display: 'flex'}}>
        <button
          onClick={() => redirectTo('student')}
          style={{
            padding: '0.75rem 2rem',
            borderRadius: '100px',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', // Darker shadow
            border: 'none',
            margin: '0.5rem',
            backgroundColor: '#6B6B6B',  // Dark Gray
            color: '#000',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.4)'; // Darker shadow
            e.currentTarget.style.backgroundColor = '#90e0ef'; // Lighter dark gray
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';  // Darker shadow
            e.currentTarget.style.backgroundColor = '#6B6B6B';
          }}
          onFocus={(e) => {
            e.currentTarget.style.outline = 'none';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(179, 179, 179, 0.5)'; // Light gray outline
          }}
        >
          Student
        </button>
        <button
          onClick={() => redirectTo('teacher')}
          style={{
            padding: '0.75rem 2rem',
            borderRadius: '100px',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',  // Darker shadow
            border: 'none',
            margin: '0.5rem',
            backgroundColor: '#6B6B6B', // Dark Gray
            color: '#000',
          }}
           onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.4)'; // Darker shadow
             e.currentTarget.style.backgroundColor = '#90e0ef';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
             e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';  // Darker shadow
             e.currentTarget.style.backgroundColor = '#6B6B6B';
          }}
          onFocus={(e) => {
            e.currentTarget.style.outline = 'none';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(179, 179, 179, 0.5)'; // Light gray outline
          }}
        >
          Teacher
        </button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
