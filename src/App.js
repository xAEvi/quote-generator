import './App.css';
import Quote from "./components/Quote";
import { useState, useEffect } from 'react';
import colors from "./colors";

function App() {

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data);
        setTweet(generateTweetQuote(data));
      });
  };

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomIndex];
    return randomColor
  }

  const [quote, setQuote] = useState('');
  const [color, setColor] = useState(getRandomColor());
  const [tweet, setTweet] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    fetchQuote();
    setActive(true);
  }, []);

  const generateTweetQuote = (data) => {
    return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + data.content + '" ' + data.author);
  }

  const newQuote = () => {
    setActive(false);
    setColor(getRandomColor());
    
    setTimeout(() => {
      fetchQuote();
      setActive(true);
    }, 1500);
  }

  return (
    <div 
      style={{
        backgroundColor: color,
        transition: "background-color 1.5s ease-in-out"
      }}
      className="App">
      <Quote 
        active={active}
        quote={quote.content}
        author={quote.author}
        color={color}
        generateNewQuote={newQuote}
        tweet={tweet}
        >
      </Quote>
    </div>
  );
}

export default App;
