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
    document.body.classList.remove('light');
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
    <div className='h-screen flex flex-col items-center bg-white '>
    
      <div className={darkMode ? 'dark' : 'light'}>
        <div id="title" className="container flex flex-col p-6 items-center gap-8 ">
          
          <button className='bg-lime-500 p-2 rounded-md mt-2' onClick={toggleDarkMode}>{darkMode ? <i className="bi bi-lamp bi-3x"></i> : <i className="bi bi-lamp-fill bi-3x"></i>}</button>
          <h2  className="title text-gray-900 font-bold text-2xl  p-2 rounded-md w-full text-center">Random Quote Machine</h2>
        </div>
        <div id="wrapper" className='border-2 border-lime-500 rounded-md m-2'>
           <div className="buttons text-center m-4 ">
              <button className='butt mr-4 text-xl bg-lime-500 rounded-md p-2 font-semibold' id="new-quote" onClick={getQuote}>
                New Quote
              </button>
              

            </div>
          <div id="quote-box " className='bg-lime-500 rounded-md m-2'>
            
            <div className="quote-text text-center  m-2 p-2 font-medium" id="text">
              <span></span>
              <i className="fa fa-quote-left"></i>
              
              <span></span>
              {quoteInfo.text}
            </div>
            <p className="quote-author text-right mr-4 text-white text-lg font-semibold" id="author">
              {quoteInfo.author}
            </p>
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
                <i className="fa fa-twitter text-4xl text-sky-500"></i>
              </a>
              </div>

            

          
        </div>
          <p className="text-sm mb-md-0 text-center mt-10">
          &copy; {new Date().getFullYear()} - Patuka Technologies
          <br /> All rights reserved.
        </p>
        {/* <footer id="footer">
         <h5>by Patricio Uskaer with React and ❤️</h5>
        </footer> */}
      </div>
    
    </div>
  );
}

export default App;



