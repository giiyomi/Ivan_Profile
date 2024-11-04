import './MyProfilePg.css'
import TopNav from './components/TopNav/TopNav'
import HomeSec from './components/HomeSec/HomeSec'
import AbtmeSec from './components/AbtmeSec/AbtmeSec'
import SkillsSec from './components/SkillsSec/SkillsSec'

export default function MyProfilePg() {

  return (
    <div className='myProfile-page'>
      <TopNav/>
      <HomeSec/>
      <AbtmeSec/>
      <SkillsSec/>
      <div className="portfolio-section" id='portfolio-section'>
        <div className='portfolio-placer'>
          <h1>My Portfolio</h1>
          <div className="project">
            <h2>Project Title</h2>
            {/* <img src="project-screenshot.jpg" alt="Screenshot of Project"> */}
            <p>Description of the project, what technologies you used, and your role.</p>
            <a href="link-to-project.com">View Project</a>
          </div>
        </div>
      </div>
    </div>
  )
}
