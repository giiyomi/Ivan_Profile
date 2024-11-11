import './LptpScreen.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useEffect, useRef } from 'react';
import GggleBrwsr from './components/GggleBrwsr/BrwsrWndw';

export default function LptpScreen(props) {
  const {setShwPrflePg} = props
  const [oneClick, setOneClick] = useState(false)
  const [shwGgleChrme, setShwGgleChrme] = useState(false)
  const [minChrme, setMinChrme] = useState(false)
  const [shwClckMe, setShwClckMe] = useState(false)
  const [hdClckMe, setHdClckMe] = useState(true)
  const [currentTime, setCurrentTime] = useState(null)
  const [currentDate, setCurrentDate] = useState(null)
  const myProfileRef = useRef(null);

  const doneWithLaptopView = localStorage.getItem('laptopView')

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const period = now.getHours() < 12 ? 'am' : 'pm';
  
      setCurrentTime(`${hours}:${minutes} ${period}`);
    };
  
    updateCurrentTime()
    const timer = setInterval(updateCurrentTime, 1000);
  
    return () => clearInterval(timer);
  }, []);

  useEffect(()=>{
    const updateCurrentDate = () => {
      const dateNow = new Date().toLocaleDateString()
      setCurrentDate(dateNow)
    }
    updateCurrentDate()
    const date = setInterval(updateCurrentDate, 1000)

    return () => clearInterval(date)
  },[setCurrentDate])
  
  useEffect(() => {
    if (shwGgleChrme) {
      const shwPrflPg = setTimeout(() => {
        setShwPrflePg(true);
        localStorage.setItem('laptopView', true);
      }, 8000);
      return () => clearTimeout(shwPrflPg);
    }
    setShwPrflePg(doneWithLaptopView);
  }, [shwGgleChrme, doneWithLaptopView, setShwPrflePg]);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (myProfileRef.current && !myProfileRef.current.contains(event.target)) {
        setOneClick(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && oneClick) {
        setShwGgleChrme(true);
        setOneClick(false);
        setShwClckMe(false)
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [oneClick]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if ((!shwGgleChrme) || (!shwClckMe && hdClckMe && !shwGgleChrme)) {
        setHdClckMe(false)
        setShwClckMe(true);
      }else{
        setShwClckMe(false)
      }
    }, 5000);

    shwGgleChrme && setShwClckMe(false) 

    return () => clearTimeout(timer);
  }, [shwGgleChrme, hdClckMe, shwClckMe]);

  const hndlMinBrwsr = () => {
    if (shwGgleChrme) {
      setShwGgleChrme(false);
      setMinChrme(true);
    } else {
      setShwGgleChrme(true);
      setMinChrme(false)
    }
  };

  const hideNotifFunc = () => {

    if (shwClckMe && !hdClckMe){
      setHdClckMe(true)
      const hideNotif = setTimeout(() => {
        console.log('ewan')
        !shwGgleChrme && setShwClckMe(false) 
      }, 1450);
      return () => clearTimeout(hideNotif);
    } else {
      setHdClckMe(false)
      setShwClckMe(true)
    }
  }

  return (
    <div className={`laptop-screen ${shwGgleChrme? 'activeBrwsr' : ''}`}>
        <div className={`myprofile-icon ${oneClick? 'active' : ''}`}
          ref={myProfileRef}
          onClick={()=>setOneClick(true)}
          onDoubleClick={()=>{
              setShwGgleChrme(true)
              setOneClick(false)
            }
          }>
            <div className="desktop chrome-icon"></div>
            <h4>Ivan's Website</h4>
        </div>

        
        {shwClckMe && 
          <div className={`dbleClckMeBttn ${hdClckMe? 'hidden' : ''}`}>
            <div className='mssgeTitleToClick'>
              <i class="bi bi-info-circle"/>
              <h5>Message</h5>
              <div className='clseMessge-notif'>
                <i class="bi bi-x" onClick={hideNotifFunc}/>
              </div>
            </div>

            <p>Please double-click on "Ivan's Website" or single-click the Google Chrome icon in the taskbar.</p>
          </div>
        }

        {shwGgleChrme &&
          <GggleBrwsr
            setShwGgleChrme={setShwGgleChrme}
            setMinChrme={setMinChrme}
            hndlMinBrwsr={hndlMinBrwsr}
          />
        }
        <div className="taskbar">
            <div className='leftTask-bar'>
              <div className="taskbar-button start-icon"/>
              <div className="taskbar-button search-icon"/>
              <div className={`taskbar-button chrome-icon
                ${shwGgleChrme && !minChrme? 'shwMx' : (!shwGgleChrme && minChrme? 'shwMin': '')}`}
                onClick={hndlMinBrwsr}
              />
            </div>
            <div className='rightTask-bar'>
                <div className='shwhddn-container'>
                  <i class="bi bi-chevron-up"/>
                </div>
                <div className='langIndicator-container'>
                  <p>ENG</p>
                  <p>US</p>
                </div>
                <div className='batWFVol-container'>
                  <div className='wifi-container'>
                    <i class="bi bi-wifi"></i>
                  </div>
                  <div className='vol-container'>
                    <i class="bi bi-volume-up"></i>
                  </div>
                  <div className='bat-container'>
                    <i class="bi bi-battery-full"></i>
                  </div>
                </div>
                <div className='dtTimeNotif-container' onClick={hideNotifFunc}>
                  <div className='dteAndTme-container'>
                    <p>{currentTime}</p>
                    <p>{currentDate}</p>
                  </div>
                  <div className='notifIcon-container' >
                    <i class="bi bi-bell"></i>
                  </div>
                </div>
            </div>

        </div>

    </div>
  )
}
