import React from 'react'
import '../stylesheets/Quote.css'
import { BsTwitter } from 'react-icons/bs'

const Quote = props => {

  return (
    <div id='quote-box'>
      <div id='texts' className={`${props.active ? 'fade-in active' : 'fade-in'}`}>
        <div id='text-box'>
          <q 
            style={{
              color: props.color,
              transitionDelay: "0.5s"}}
            id='text'>
            {props.quote}
          </q>
        </div>
        <div  id='author-box'>
          <p 
            style={{color: props.color,
              transitionDelay: "0.5s"}}
            id='author'>
            {props.author}
          </p>
        </div>
      </div>
      <div  id='buttons-box'>
        <a 
          href={props.tweet}
          style={{backgroundColor: props.color}}
          id='tweet-quote'>
          <BsTwitter />
        </a>

        <button  
          onClick={() => props.generateNewQuote()}
          style={{backgroundColor: props.color}}
          id='new-quote'>
          New Quote
          </button>
      </div>
    </div>
  );
}

export default Quote;