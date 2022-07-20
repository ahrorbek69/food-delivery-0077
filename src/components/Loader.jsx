import React from 'react'
import '../style/loader.css'
import { gsap} from 'gsap'

const Loader = () => {

    const TLLoader = gsap.timeline({repeat: -1});

TLLoader
.to('.loader', {rotation: 45, duration: 0.5})
.to('.loader .square', {rotation: 90}, '-=0.5')
.to('.loader .s1', {backgroundColor: '#36C5F0', duration: 0.2})
.to('.loader .s2', {backgroundColor: '#1EB67D', duration: 0.2})
.to('.loader .s4', {backgroundColor: '#E01E5A', duration: 0.2})
.to('.loader .s3', {backgroundColor: '#ECB22E', duration: 0.2})
.to('.loader .square', {borderRadius: 50, duration: 0.5})
.to('.loader', { rotation: 360, ease: "elastic.inOut(1, 0.3)", duration: 2.5}, '-=0.5')
.to('.loader .square', {borderRadius: 0, duration: 0.5}, '-=0.5')

  return (
<div className='body'>
<div className="loader">
  <div className="square s1"></div>
  <div className="square s2"></div>
  <div className="square s3"></div>
  <div className="square s4"></div>  
</div>
</div>
  )
}

export default Loader
// git add . git commit -m 'ghjkllkj0j' git push