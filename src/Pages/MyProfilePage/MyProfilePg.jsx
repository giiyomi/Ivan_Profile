import './MyProfilePg.css'
import { useState, useEffect } from 'react'
import TopNav from './components/TopNav/TopNav'
import HomeSec from './components/HomeSec/HomeSec'
import AbtmeSec from './components/AbtmeSec/AbtmeSec'
import SkillsSec from './components/SkillsSec/SkillsSec'
import PrtfolioSec from './components/PrtfolioSec/PrtfolioSec'
import WbDetails from './components/PrtfolioSec/components/WbDetails/WbDetails'
import CntactSec from './components/CntactSec/CntactSec'
import ButtomNav from './components/BottomNav/ButtomNav'
import LftSdeButton from './components/LftSdeBut/LftSdeButton'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function MyProfilePg() {
  const [lptpView, setLptpView] = useState(true)
  const [shwVwWbDtls, setShwVwWbDtls] = useState(false)
  const [prjctName, setPrjctName] =  useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleResize = () => setLptpView(window.innerWidth > 950);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () =>  window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='myProfile-page'>
      <TopNav/>
      <HomeSec/>
      <AbtmeSec/>
      <SkillsSec/>
      <PrtfolioSec
        setShwVwWbDtls={setShwVwWbDtls}
        setPrjctName={setPrjctName}
      />
      {shwVwWbDtls && 
        <WbDetails
        setShwVwWbDtls={setShwVwWbDtls}
        setPrjctName={setPrjctName}
        prjctName={prjctName}
        />
      }
      <CntactSec
       setIsLoading={setIsLoading}
      />
      <ButtomNav/>

      {lptpView && 
        <LftSdeButton/>
      }

      {isLoading &&
        <div className='submitDelay-container'>
          <div class="spinner-border m-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
            <h4>Thank you! Please don't refresh as we process your details.</h4>
        </div>
      }
    </div>
  )
}
