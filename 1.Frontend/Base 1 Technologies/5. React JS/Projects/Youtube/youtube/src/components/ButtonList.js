import React from 'react'
import Button from './Button'

const ButtonList = () => {
  // Button List
  const list = [
    "Gaming",
    "Songs",
    "Movies",
    "News",
    "Series",
    "Lamb",
    "Punnjabi Cuisine",
    "Live",
    "Mixes",
    "Coding",
    "Hill Station"
  ]

  return (
    <div className="flex">
      {
        list.map((button , index) => (
          <Button key={index} name={button}/>
        ))
      }
    </div>
  )
}

export default ButtonList