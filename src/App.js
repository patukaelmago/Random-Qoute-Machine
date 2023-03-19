import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [quoteInfo, setQuoteInfo] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    getQuote();
  }, []);
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  if (darkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author,
        });
      });
  };

  return (
    <div className='container'>
      <div className={darkMode ? 'dark' : 'light'}>
        <div id="title">
          <h1>Random Quote Machine</h1>
          <button className='dm' onClick={toggleDarkMode}>{darkMode ? <i className="bi bi-lamp bi-3x"></i> : <i className="bi bi-lamp-fill bi-3x"></i>}</button>
        </div>
        <div id="wrapper">
          <div id="quote-box">
            <div className="quote-text" id="text">
              <span></span>
              <i className="fa fa-quote-left"></i>
              <span></span>
              {quoteInfo.text}
            </div>
            <p className="quote-author" id="author">
              {quoteInfo.author}
            </p>
            <div className="buttons">
              <button className='butt' id="new-quote" onClick={getQuote}>
                New Quote
              </button>
              <a
                title="Tweet this quote!"
                href={
                  'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
                  quoteInfo.text
                }
                target="_blank"
                rel="noreferrer"
                id="tweet-quote"
              >
                <i className="fa fa-twitter "></i>
              </a>

            </div>

          </div>
        </div>
        <footer id="footer">
          <h5>by Patricio Uskaer with React and ❤️</h5>
        </footer>
      </div>
    </div>
  );
}

export default App;



