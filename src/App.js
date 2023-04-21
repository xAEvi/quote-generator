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

  const generateTweetQuote = (data) => {
    return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + data.content + '" ' + data.author);
  }

  const [quote, setQuote] = useState('');
  const [color, setColor] = useState(getRandomColor());
  const [tweet, setTweet] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const newQuote = () => {
    fetchQuote();
    setColor(getRandomColor());
  }

  return (
    <div 
      style={{
        backgroundColor: color,
      }}
      className="App">
      <Quote 
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
