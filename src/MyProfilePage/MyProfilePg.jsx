import './MyProfilePg.css'
import TopNav from './components/TopNav/TopNav'
import HomeSec from './components/HomeSec/HomeSec'
import AbtmeSec from './components/AbtmeSec/AbtmeSec'

export default function MyProfilePg() {

  return (
    <div className='myProfile-page'>
      <TopNav/>
      <HomeSec/>
      <AbtmeSec/>

      {/* <div className='skill-services'>
        <div className='skill-placer'>
          
        </div>
      </div> */}
    </div>
  )
}
