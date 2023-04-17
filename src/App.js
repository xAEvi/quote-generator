import './App.css';
import Quote from "./components/Quote";
import quotes from "./data/quotes";
import { useState } from 'react';

function App() {

  const newRandomNumber = () => {
    return Math.floor(Math.random() * quotes.length);
  }

  const getRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const pastel = 'hsl(' + hue + ', 100%, 85%';
    return pastel;
  }

  const generateNewQuote = () => {
    const quote = quotes[randomNumber];
    return quote["quote"];
  }

  const generateNewAuthor = () => {
    const author = quotes[randomNumber];
    return author["author"];
  }

  const generateTweetQuote = () => {
    return 'https://twitter.com/intent/tweet?hashtags=programming&text=' + encodeURIComponent('"' + quote + '" ' + author);
  }

  const [randomNumber, setRandomNumber] = useState(newRandomNumber());
  const [color, setColor] = useState(getRandomPastelColor());
  const [quote, setQuote] = useState(generateNewQuote());
  const [author, setAuthor] = useState(generateNewAuthor());
  const [tweet, setTweet] = useState(generateTweetQuote());

  const newQuote = () => {
    setRandomNumber(newRandomNumber);
    setAuthor(generateNewAuthor());
    setColor(getRandomPastelColor());
    setQuote(generateNewQuote());
    setTweet(generateTweetQuote());
  }

  return (
    <div 

      style={{
        backgroundColor: color,
        transition: "transform 1s ease-in-out"
      }}
      className="App">
      <Quote 
        quote={quote}
        author={author}
        color={color}
        generateNewQuote={newQuote}
        tweet={tweet}
        >
      </Quote>
    </div>
  );
}

export default App;
