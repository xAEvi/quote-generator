import './App.css';
import Quote from "./components/Quote";
import { useState, useEffect } from 'react';

function App() {

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data);
        setTweet(generateTweetQuote(data));
      });
  };

  const getRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const pastel = 'hsl(' + hue + ', 100%, 85%';
    return pastel;
  }

  const generateTweetQuote = (data) => {
    return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + data.content + '" ' + data.author);
  }

  const [quote, setQuote] = useState('');
  const [color, setColor] = useState(getRandomPastelColor());
  const [tweet, setTweet] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const newQuote = () => {
    fetchQuote();
    setColor(getRandomPastelColor());
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
