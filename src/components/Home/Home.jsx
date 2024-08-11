import React, { useEffect, useState } from 'react';
import './Home.scss';
import Front from '../front/Front';
import Lock from '../lock/Lock';

function Home() {
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [btnShow, setBtnShow] = useState(false);

  const playBg =() => {
    const backgroundAudio = document.getElementById('backgroundAudio');

        backgroundAudio.play().catch(error => {
          console.error("Audio playback failed: ", error);
        });
        setAudioPlayed(true);
  };

  const timeoutId = setTimeout(() => {
    setBtnShow(true)
  }, 5000);

  const lbtn = ()=>{
    console.log('l clickled')
    playBg()
  }
  const rbtn = ()=>{
    console.log('r clickled')
    playBg()
  }

  return (
    <div className='body'>
      <audio id="backgroundAudio"  src="./bg.mp3" />
     
      <div className="background">
        {btnShow&&<div className="btns">
          <div className="lBtn btn" onClick={lbtn}>Preview</div>
          <div className="rBtn btn" onClick={rbtn}>Click here to continue</div>
        </div>
         }
        {/* <Lock/> */}
        <Front/>

        
      </div> 
    
    </div>
  );
}

export default Home;
