import './PrtfolioSec.css'
import { useState } from 'react';
import webProjectList from './components/prjctsList/prjctsList'

export default function PrtfolioSec(props) {
    const { setShwVwWbDtls, setPrjctName} = props
    const [activeTab, setActiveTab] = useState('')
    const [fadeOut, setFadeOut] = useState(false);

    const canbeFilteredList = activeTab === '' ? webProjectList : webProjectList.filter(project => project.category === activeTab);
  
    const hndlSwtchngTabs = (e) =>{
      const tabName = e.target.innerText;
  
      setFadeOut(true);
      
      setTimeout(() => {
        switch (tabName) {
          case 'ALL':
            setActiveTab(''); 
            break;
          case 'HTML & CSS':
            setActiveTab('html_css'); 
            break;
          case 'REACT JS':
            setActiveTab('react'); 
            break;
          case 'RUBY ON RAILS':
            setActiveTab('rails');
            break;
          case 'POWERBI':
            setActiveTab('powerbi');
            break;
          case 'EXCEL & SQL':
            setActiveTab('excel_sql');
            break;
          default:
            setActiveTab('');
            break;
        }
        setFadeOut(false);
      }, 100);
  
    };

    const hndlShwWbDtls = (projName, projDescription) => {
        setShwVwWbDtls(true)
        setPrjctName([projName, projDescription])
    }

  return (
    <div className="portfolio-section" id='portfolio-section'>
        <div className='portfolio-placer'>
        <div className='portfolio-header'>
            <h1 className='myPrftlio-title'>Portfolio</h1>
            <p className='prtflio-explntion'>
            Showcasing projects built with a focus on practical functionality and feature-rich solutions.
            </p>
        </div>

        <div className='portfolio-container'>
            <div className='prtflioTabs-placer'>
            <div className='prtflioTabs-container'>
                <div className={`${activeTab === '' ? 'activeTab' : ''}`} onClick={(e)=>hndlSwtchngTabs(e)} >ALL</div>
                <div className={`${activeTab === 'html_css' ? 'activeTab' : ''}`} onClick={(e)=>hndlSwtchngTabs(e)}>HTML & CSS</div>
                <div className={`${activeTab === 'react' ? 'activeTab' : ''}`} onClick={(e)=>hndlSwtchngTabs(e)}>REACT JS</div>
                <div className={`${activeTab === 'rails' ? 'activeTab' : ''}`} onClick={(e)=>hndlSwtchngTabs(e)}>RUBY ON  RAILS</div>
                <div className={`${activeTab === 'powerbi' ? 'activeTab' : ''}`} onClick={(e)=>hndlSwtchngTabs(e)}>POWERBI</div>
                <div className={`${activeTab === 'excel_sql' ? 'activeTab' : ''}`} onClick={(e)=>hndlSwtchngTabs(e)}>EXCEL & SQL</div>
            </div>
            </div>
            <div className={`projects-container ${fadeOut ? 'fade-out' : 'fade-in'}`}>

            {canbeFilteredList.map((project, index) => (
                <div className='project' key={project.id} style={{ animationDelay: `${index * 0.02}s` }}>

                  <div className='project-item-center'>
                  <h2>{project.name}</h2>

                  <div className='imgProj-container'>
                    <div className='imgProj'>
                      
                    <div className='viewProj-hover'>
                        <div className='eyeSee-container' onClick={()=>hndlShwWbDtls(project.name, project.description)}>
                            <i class="bi bi-eye"/>
                            <div>see more</div>
                        </div>
                    </div>
                    <img src={project.src[0]} alt="lampaz_booking_form"/> 
                  </div>
                  <h6 className='projField'>{project.field === 'web_development' ? "Web Development" : "Data Analytics"}</h6>
                  </div>
                  </div>
                </div>
            )
            )}
            </div>
        </div>
        </div>
    </div>
  )
}
