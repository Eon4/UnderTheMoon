import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ShowGallery } from './components/gallery'
import './components/gallery.css'
import HeaderBg from './assets/img/HeaderBackground.png'
import sectionImg from './assets/img/img7.png'

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
<nav >
      <ul>
        <li>
          <a href="#">Hjem</a>
        </li>
        <li>
          <a href="#">Koncepter</a>
        </li>
        <li>
          <a href="#">UTM loyality</a>
        </li>
        <li>
          <a href="#">Om</a>
        </li>
        <li>
          <a href="#">Kontakt</a>
        </li>
      </ul>
    </nav>
</div>
      <h1 className='header'>Under the Moon</h1>
      <img className='Bg' src={HeaderBg}/>
      <div class="text-block">
    <h4>HAIRSTYLIST OG FRISØR</h4>
    <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, 
      lacus sed volutpat molestie, orci arcu pretium elit, non cursus nunc eros at est. 
      Vivamus sed tortor et tellus pretium mollis malesuada rhoncus magna. 
      Duis ullamcorper feugiat lacus, interdum malesuada nibh aliquam et. 
      Aenean hendrerit porttitor bibendum. Nunc commodo nulla eget urna molestie, 
      viverra tincidunt justo tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
      per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Vestibulum ut efficitur nulla. Maecenas et lobortis nunc.</p>
  </div>
<div className='middleText'>
<h4>UNDER THE MOON - NEW STYLE</h4>
  <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, 
      lacus sed volutpat molestie, orci arcu pretium elit, non cursus nunc eros at est. 
      Vivamus sed tortor et tellus pretium mollis malesuada rhoncus magna. 
      Duis ullamcorper feugiat lacus, interdum malesuada nibh aliquam et. 
      Aenean hendrerit porttitor bibendum. Nunc commodo nulla eget urna molestie, 
      viverra tincidunt justo tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
      per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Vestibulum ut efficitur nulla. Maecenas et lobortis nunc.</p> 
</div>
<div className='middleButton'>
<button type="button" onclick="#">LÆS MERE</button>
</div>
<div>
  <section className='middleGrid'>
  <img className='img01' src={sectionImg}/>
  <p className='gridText1'>ONE 2 ONE</p>
  <p className='grid1'>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, 
      lacus sed volutpat molestie, orci arcu pretium elit, non cursus nunc eros at est. 
      Vivamus sed tortor et tellus pretium mollis malesuada rhoncus magna. 
      Duis ullamcorper feugiat lacus, interdum malesuada nibh aliquam et. 
      Aenean hendrerit porttitor bibendum. Nunc commodo nulla eget urna molestie, 
      viverra tincidunt justo tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
      per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Vestibulum ut efficitur nulla. Maecenas et lobortis nunc.</p> 
  <img className='img02' src={sectionImg}/>
  <p className='gridText2'>LOYALTY FREE</p>
  <p className='grid2'>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, 
      lacus sed volutpat molestie, orci arcu pretium elit, non cursus nunc eros at est. 
      Vivamus sed tortor et tellus pretium mollis malesuada rhoncus magna. 
      Duis ullamcorper feugiat lacus, interdum malesuada nibh aliquam et. 
      Aenean hendrerit porttitor bibendum. Nunc commodo nulla eget urna molestie, 
      viverra tincidunt justo tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
      per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Vestibulum ut efficitur nulla. Maecenas et lobortis nunc.</p> 
  </section>
</div>
<h4>FOLLOW US ON INSTAGRAM</h4>

      {/* <div>      
        {nameArray.map((item, index) => {
        return (
          <ShowGallery key={index} name={item.name} />
        )
        
      })}
      </div> */}
    </>
  )
}


export default App
