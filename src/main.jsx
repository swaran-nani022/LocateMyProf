import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState('technology');

  const API_KEY = '2f3555884c9045c8b1961c9573ad6166';

  const fetchNews = () => {
    setLoading(true);
    fetch(`https://newsapi.org/v2/top-headlines?category=${topic}&country=us&apiKey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.articles
          .filter(article =>
            article.title &&
            (article.title.toLowerCase().includes('ai') ||
              article.title.toLowerCase().includes('openai'))
          )
          .slice(0, 5)
          .map(article => ({
            title: article.title,
            url: article.url
          }));
        setNews(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch news:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNews(); // initial fetch

    const interval = setInterval(() => {
      fetchNews(); // auto-refresh every 5 minutes
    }, 5 * 60 * 1000); // every 5 minutes (in milliseconds)

    return () => clearInterval(interval); // cleanup on unmount
  }, [topic]);

  const redirectTo = (role) => {
    const urls = {
      student: 'https://student-app-livid-six.vercel.app/',
      teacher: 'https://teacher-locate-app.vercel.app/'
    };
    window.location.href = urls[role];
  };

  return (
    <div style={{
      margin: 0,
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '320px',
      minHeight: '100vh',
      backgroundColor: '#EAEAEA',
      color: '#231F20',
      fontFamily: "'Inter', sans-serif",
      textAlign: 'center',
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 700,
        marginBottom: '2rem',
        backgroundImage: 'linear-gradient(to right, #8E793E, #AD974F)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}>
        Welcome to LocateMyProf
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: '#231F20',
        marginBottom: '2rem',
        maxWidth: '600px',
      }}>
        Select your account type
      </p>

      <div style={{ display: 'flex' }}>
        {['student', 'teacher'].map(role => (
          <button
            key={role}
            onClick={() => redirectTo(role)}
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '100px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
              border: 'none',
              margin: '0.5rem',
              backgroundColor: '#8E793E',
              color: '#EAEAEA',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.4)';
              e.currentTarget.style.backgroundColor = '#AD974F';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.backgroundColor = '#8E793E';
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = 'none';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(179, 179, 179, 0.5)';
            }}
          >
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        ))}
      </div>

      {/* Category Selector */}
      <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
        <label style={{ marginRight: '1rem', fontSize: '1rem', color: '#231F20' }}><b>News Topic:</b></label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            fontSize: '1rem',
            backgroundColor: '#EAEAEA',
            color: '#231F20',
            border: '1px solid #444',
          }}
        >
          <option value="technology">Tech</option>
          <option value="science">Science</option>
          <option value="business">Crypto</option>
        </select>
      </div>

      {/* NEWS SCROLLER */}
      <div className="news-ticker">
        <div className="news-scroll">
          {loading ? (
            <div className="news-item spinner">Loading news...</div>
          ) : news.length > 0 ? (
            news.map((item, index) => (
              <a
                className="news-item"
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                📰 {item.title}
              </a>
            ))
          ) : (
            <div className="news-item">No relevant news found.</div>
          )}
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .news-ticker {
            margin-top: 2rem;
            width: 80%;
            height: 10rem;
            overflow: hidden;
            position: relative;
            background-color: rgba(42, 41, 41, 0.36);
            border-radius: 10px;
            color: #EAEAEA;
            font-size: 1rem;
            font-weight: 500;
            border: black;
          }

          .news-scroll {
            display: flex;
            flex-direction: column;
            animation: scrollUp 20s linear infinite;
          }

          .news-ticker:hover .news-scroll {
            animation-play-state: paused;
          }

          .news-item {
            padding: 0.75rem 1rem;
            height: 3rem;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            color: rgb(0, 0, 0);
            text-decoration: none;
            transition: background 0.3s;
          }

          .news-item:hover {
            background-color: #AD974F;
          }

          .spinner {
            font-style: italic;
            color: #999;
            justify-content: center;
          }

          @keyframes scrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-100%); }
          }
        `}
      </style>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
