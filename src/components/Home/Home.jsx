import React, { useEffect, useState } from 'react';
import './Home.scss';
import Front from '../front/Front';
import Lock from '../lock/Lock';
import Page1 from '../page1/Page1';
import Page2 from '../page2/Page2';
import LastPage from '../lastPage/LastPage';

function Home() {
  const [btnShow, setBtnShow] = useState(false);
  const [page, setPage] = useState(1);
  const [timeoutId, setTimeoutId] = useState(null);

  const playBg = () => {
    const backgroundAudio = document.getElementById('backgroundAudio');
    backgroundAudio.play().catch(error => {
      console.error("Audio playback failed: ", error);
    });
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setBtnShow(true);
    }, 5000);

    setTimeoutId(id);

    return () => clearTimeout(id); 
  }, []);

  const rbtn = () => {
    if(page<5){setPage(prevPage => prevPage + 1)}
      if(page<4){
        playBg(); 
      
        clearTimeout(timeoutId);
        const id = setTimeout(() => {
          setBtnShow(true);
        }, 6000);
        setTimeoutId(id);
      }
      setBtnShow(false); 

  };

  return (
    <div className='body'>
      <audio id="backgroundAudio" loop src="./bg.mp3" />
     
      <div className="background">
        {btnShow && (
          <div className="btns">
            <div className="rBtn btn" onClick={rbtn}>
              <div className="click">Click here to continue</div>
            </div>
          </div>
        )}
        
        {page === 1 && <Lock />}
        {page === 2 && <Front />}
        {page === 3 && <Page1 />}
        {page === 4 && <Page2 />}
        {page === 5 && <LastPage />}
        
      </div> 
    </div>
  );
}

export default Home;
