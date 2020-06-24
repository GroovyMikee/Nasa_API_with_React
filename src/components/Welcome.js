import React, { useState, useEffect } from 'react'

function Welcome() {

  useEffect(() => {
    fetchWelcome();
  }, [])

  const [item, setItem] = useState([]);

  const fetchWelcome = async () => {
    const data = await fetch('https://api.nasa.gov/planetary/apod?api_key=jGaF9ZbWSz4wuqwV4gFlyVYkcfd9u4v7e5Fxx524');
    const item = await data.json();
    // const item = data.json()
    console.log(item)
    setItem(item)
  }

  return (
    <div>
      <h3>Astronomy Picture of a Day</h3>
      <p>{item.date}</p>
      <img src={item.url} alt="cos" />
      <p>Author: {item.copyright}</p>
      <p>{item.explanation}</p>
    </div>
  )
}

export default Welcome;