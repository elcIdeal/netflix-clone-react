import React from 'react'
import './Home.css'
import Navbar from '../../componnets/Navbar/Navbar'
import hero_banner from '../../componnets/assets/hero_banner.jpg' 
import hero_title from '../../componnets/assets/hero_title.png'
import play_icon from '../../componnets/assets/play_icon.png'
import info_icon from '../../componnets/assets/info_icon.png'
import TitleCards from '../../componnets/TitleCards/TitleCards'
import Footer from '../../componnets/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero_caption">
          <img src={hero_title}alt="" className='caption-img'/>
          <p>My name is ELsultanMy name is ELsultanMy name is ELsultanMy name is ELsultanMy name is ELsultanMy name is ELsultan</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon}alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon}alt="" />More info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className='more-cards'>
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Netflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top Pics for you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home