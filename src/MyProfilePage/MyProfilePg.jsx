import './MyProfilePg.css'
import mypic from '../Assets/images/my_pic1.png'

export default function MyProfilePg() {
  return (
    <div className='myProfile-page'>
        <h1  className='tryLang'>My Profile</h1>

        <div className='portrait-bg'>
            <img src={mypic} alt='myPic' className='myPic'/>
        </div>
    </div>
  )
}
