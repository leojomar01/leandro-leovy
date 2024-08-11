import React, { useEffect, useState } from 'react';
import './Home.scss';
import Front from '../front/Front';

function Home() {
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    const backgroundAudio = document.getElementById('backgroundAudio');

        backgroundAudio.play().catch(error => {
          console.error("Audio playback failed: ", error);
        });
        setAudioPlayed(true);
  }, []);

  return (
    <div className='body'>
      <audio id="backgroundAudio"  src="./bg.mp3" />
   
      <div className="background">
        <div className="btns">
          <div className="lBtn"></div>
          <div className="rBtn"></div>
        </div>
        <Front/>
        
      </div> 
    
    </div>
  );
}

export default Home;
