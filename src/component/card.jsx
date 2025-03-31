import React from 'react'
import {useEffect} from "react"
import "./card.css"
import "@fontsource/manrope"
import divider from "../assets/images/desk-div.svg"
import dice from "../assets/images/icon-dice.svg"
import App from '../App'









const Card = () => {

  const [quotes, setQuotes] = React.useState({
    id:21,
    quoteText:"The history of progress is written in the blood of… right to his body, or woman's right to her soul."

  })

  const [quotesData, setQuotesData] = React.useState([])


const api_url ="https://api.realinspire.live/v1/quotes";

useEffect(() => {
  fetch(api_url,{
    method:'GET'
  })
  .then(res => res.json())
  .then(data => setQuotesData(data.results))
  
}, [])

function getQuotesContent() {
  const randomNumber = Math.floor(Math.random() * quotesData.length)
  const newQuoteContent = quotesData[randomNumber].content
  const newQuoteId = quotesData[randomNumber].length
  setQuotes(prevQuotes => ({
      ...prevQuotes,
      quoteText: newQuoteContent,
      id: newQuoteId
  }))
}
  
       
       

  return (
    <div className='card'>
        <h4>Advice #<span>{quotes.id}</span></h4>

        <p>"{quotes.quoteText}"</p>
            
            
        <img src={divider} alt="divide" className='divider'/>
        <div className=' diceEl'>
        <button onClick={getQuotesContent}><img src={dice} alt="dice" className='dice' /> </button>
        
        </div> 
        
            
    </div>
  )
}

export default Card