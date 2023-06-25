import { useEffect, useState } from 'react';
// import './App.css';

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
    <div className={darkMode ? 'dark' : 'light '}>
      {darkMode ?
        <div className='h-screen flex flex-col items-center bg-white '>
          <div id="container" className="container flex flex-col p-2 items-center gap-4 ">
            <button
              className='bg-lime-500 p-2 rounded-md mt-2  shadow-md border-gray-900 hover:bg-lime-400'
              onClick={toggleDarkMode}>{darkMode ? <i className="bi bi-lamp bi-3x"></i> : <i className="bi bi-lamp-fill bi-3x"></i>}</button>
            <h2 className="title  font-bold text-2xl bg-blue-700  shadow-md p-2 rounded-md w-full text-white text-center ">
              Random Quote Machine<i class="bi bi-chat-quote-fill ml-2"></i>
            </h2>
          </div>
          <div id="wrapper" className='  rounded-md m-2 bg-lime-500 shadow-md'>
            <div className="buttons text-center m-4  ">
              <button className='butt mr-4 text-md  bg-blue-700 rounded-md p-2 font-semibold text-white hover:bg-blue-600' id="new-quote" onClick={getQuote}>
                New Quote
              </button>
            </div>
            <div id="quote-box " className='bg-lime-500 rounded-md m-2'>
              <div className="quote-text text-center  m-2 p-2 font-medium" id="text">
                <span></span>
                <i className="fa fa-quote-left mr-1"></i>
                <span></span>
                {quoteInfo.text}
                <span></span>
                <i className='fa fa-quote-right ml-1'></i>
                <span></span>
              </div>
              <p className="quote-author text-right mr-4 text-blue-700 text-lg font-semibold" id="author">
                {quoteInfo.author}
              </p>
            </div>
          </div>
          <div className='text-center '>
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
              <i className="fa fa-twitter text-4xl text-blue-700 mt-2 hover:text-blue-600"><p className='text-sm '>Share on Twitter!</p></i>
            </a>
          </div>
          <p className="text-xs mb-md-0 text-center mt-2">
            &copy; {new Date().getFullYear()} - Patuka Technologies
            <br /> All rights reserved.
          </p>
        </div>
        :
        <div className='h-screen flex flex-col items-center bg-gray-900 '>
          <div id="container" className="container flex flex-col p-2 items-center gap-4 ">
            <button
              className='bg-blue-700 p-2 rounded-md mt-2  shadow-md border-gray-900 hover:bg-blue-600'
              onClick={toggleDarkMode}>{darkMode ? <i className="bi bi-lamp bi-3x"></i> : <i className="bi bi-lamp-fill bi-3x"></i>}</button>
            <h2 className="title  font-bold text-2xl bg-lime-500  shadow-md p-2 rounded-md w-full text-gray-900 text-center">
              Random Quote Machine<i class="bi bi-chat-quote-fill ml-2"></i>
            </h2>
          </div>
          <div id="wrapper" className='  rounded-md m-2 bg-blue-700 shadow-md'>
            <div className="buttons text-center m-4  ">
              <button className='butt mr-4 text-md  bg-lime-500 rounded-md p-2 font-semibold text-gray-900 hover:bg-lime-400' id="new-quote" onClick={getQuote}>
                New Quote
              </button>
            </div>
            <div id="quote-box " className='bg-blue-700 rounded-md m-2'>
              <div className="quote-text text-center text-white  m-2 p-2 font-medium" id="text">
                <span></span>
                <i className="fa fa-quote-left mr-1"></i>
                <span></span>
                {quoteInfo.text}
                <span></span>
                <i className='fa fa-quote-right ml-1'></i>
                <span></span>
              </div>
              <p className="quote-author text-right mr-4 text-lime-500 text-lg font-semibold" id="author">
                {quoteInfo.author}
              </p>
            </div>
          </div>
          <div className='text-center '>
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
              <i className="fa fa-twitter text-4xl text-lime-500 mt-2 hover:text-lime-400"><p className='text-sm'>Share on Twitter!</p></i>
            </a>
          </div>
          <p className="text-xs mb-md-0 text-center mt-2 text-white">
            &copy; {new Date().getFullYear()} - Patuka Technologies
            <br /> All rights reserved.
          </p>
        </div>
      }
    </div>
  );
}

export default App;



