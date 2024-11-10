import './MyProfilePg.css'
import { useState } from 'react'
import TopNav from './components/TopNav/TopNav'
import HomeSec from './components/HomeSec/HomeSec'
import AbtmeSec from './components/AbtmeSec/AbtmeSec'
import SkillsSec from './components/SkillsSec/SkillsSec'
import PrtfolioSec from './components/PrtfolioSec/PrtfolioSec'
import WbDetails from './components/PrtfolioSec/components/WbDetails/WbDetails'
import CntactSec from './components/CntactSec/CntactSec'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function MyProfilePg() {
  const [shwVwWbDtls, setShwVwWbDtls] = useState(false)
  const [prjctName, setPrjctName] =  useState([])

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
      <CntactSec/>
      <div className='copyright-container'>
        <div className='copyright-placer'>
          <p className='footer-links-container'>
            <div className='footer-links left'>
              <a href='#home-section'>HOME</a>
              <a href='#aboutMe-section'>ABOUT</a>
              <a href='#skills-section'>SKILLS</a>
            </div>
            <div className='footer-links right'>
              <a href='#portfolio-section'>PORTFOLIO</a>
              <a href='#contactMe-section'>CONNECT</a>
            </div>
          </p>
        </div>
        <div className='copyright-placer'>
          <p className='footer-designer-name'> <span>All Rights Reserved. © 2024 <a href='https://ivanlang.netlify.app/' target="_blank" rel="noreferrer">Ivan</a> </span><span>Github Account : <a href='https://github.com/giiyomi' target="_blank" rel="noreferrer">Giiyomi</a></span>
          </p>
        </div>

      </div>


    </div>
  )
}
