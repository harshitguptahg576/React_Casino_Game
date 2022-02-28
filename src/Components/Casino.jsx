import React, { Fragment, useEffect, useState } from 'react'
import './Casino.css'
import glitter from '../../public/Images/gold-glitter.gif'

let Allop;
const emozy=['🔥','🥳','💲']
const Icon1=emozy[Math.floor(Math.random()*emozy.length)];
const Icon2=emozy[Math.floor(Math.random()*emozy.length)];
const Icon3=emozy[Math.floor(Math.random()*emozy.length)];
const Casino = () => {

  const [Result, setResult] = useState("💫Check Your Luck🤞");

  useEffect(() => {
    const Boxes = document.querySelectorAll('.box')
    const Victory=document.querySelector(".victory")
    let Jackpot = new Set()
    console.log(Boxes);
    Boxes.forEach(Box => {
      Jackpot.add(Box.children[1].innerHTML)
      Box.addEventListener('click', () => {
        Box.classList.add('active')
        Allop = document.querySelectorAll('.active')
        Box.children[0].style.display = "none"
        Box.children[1].style.display = "block"
      })
    })
    const check = setInterval(() => {
      if (Allop.length === 3) {
        if (Jackpot.size === 1) {
          Victory.style.background= `url("${glitter}") no-repeat center center /cover`
          setResult("🥳Congrat's, You Win✨")
        }
        else
          setResult("😢Sorry, You Lose💔")
      }
    }, 500);

    setTimeout(()=>{
      clearInterval(check)
    },10000)
  }, []);

  return (
    <Fragment>
      <div className='main'>
      <div className='victory'>
        <h2 className='heading text-white p-5 text-center  w-100'>
          <span style={{ fontWeight: 900 }}>🎰 Casino Game 🔥</span>
        </h2>
        <div className='game'>
          <div className='boxes'>
            <div className='box box1'>
              <div className='hide h-100'></div>
              <div className='icon'>{Icon1}</div>
            </div>
            <div className='box box1'>
              <div className='hide h-100'></div>
              <div className='icon'>{Icon2}</div>
            </div>
            <div className='box box1'>
              <div className='hide h-100'></div>
              <div className='icon'>{Icon3}</div>
            </div>
          </div>
        </div>
        <h2 className='heading text-white py-2 text-center w-100'>
          <span style={{ fontWeight: 900 }}>{Result}</span>
        </h2>
        <h2 className='heading text-white p-5 text-center  w-100'>

          <a href='' style={{ textDecoration: 'none' }}>
            <span style={{ fontWeight: 900, color: 'white' }}>❤️ Start Again 👈 </span>
          </a>
        </h2>
        </div>
      </div>
    </Fragment>
  )
}

export default Casino
