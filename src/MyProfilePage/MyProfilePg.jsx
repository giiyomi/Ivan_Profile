import './MyProfilePg.css'
import { useState } from 'react'
import TopNav from './components/TopNav/TopNav'
import HomeSec from './components/HomeSec/HomeSec'
import AbtmeSec from './components/AbtmeSec/AbtmeSec'
import SkillsSec from './components/SkillsSec/SkillsSec'
import PrtfolioSec from './components/PrtfolioSec/PrtfolioSec'
import WbDetails from './components/PrtfolioSec/components/WbDetails/WbDetails'
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

    </div>
  )
}
