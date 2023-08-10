import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ShowGallery } from './components/gallery'
import './components/gallery.css'
import HeaderBg from './assets/img/HeaderBackground.png'

function App() {
  const [count, setCount] = useState(0)

  const nameArray = [
    {name: "1"},
    {name: "2"},
    {name: "3"},
    {name: "4"},
    {name: "5"}

  ]

  return (
    <>
    
<div class="topnav">
  <a class="active" href="#home">HJEM</a>
  <a href="#news">KONCEPTER</a>
  <a href="#contact">UTM LOYALTY</a>
  <a href="#about">OM</a>
  <a href="#contact">KONTAKT</a>
</div>
      <h1 className='header'>Under the Moon</h1>
      <img className='Bg' src={HeaderBg}/>
      <div class="text-block">
    <h4>HAIRSTYLIST OG FRISØR</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, 
      lacus sed volutpat molestie, orci arcu pretium elit, non cursus nunc eros at est. 
      Vivamus sed tortor et tellus pretium mollis malesuada rhoncus magna. 
      Duis ullamcorper feugiat lacus, interdum malesuada nibh aliquam et. 
      Aenean hendrerit porttitor bibendum. Nunc commodo nulla eget urna molestie, 
      viverra tincidunt justo tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
      per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Vestibulum ut efficitur nulla. Maecenas et lobortis nunc.</p>
  </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>      
        {nameArray.map((item, index) => {
        return (
          <ShowGallery key={index} name={item.name} />
        )
        
      })}
      </div>
    </>
  )
}


export default App
