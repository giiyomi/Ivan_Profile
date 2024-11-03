import './TopNav.css';
import { useState, useEffect } from 'react';
import navBrandName from '../../../Assets/images/navBrand-removebg-preview.png';

export default function TopNav() {
  const [chngeColorBg, setChngeColorBg] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [shwNavTabs, setShwNavTabs] =  useState(false)


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 950) {
        setChngeColorBg(true);
      } else {
        setChngeColorBg(false);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionOffsets = {
        home: document.getElementById('home-section').offsetTop,
        about: document.getElementById('aboutMe-section').offsetTop,
      };

      if (scrollPosition >= sectionOffsets.about - 50) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }

      if (window.innerWidth >= 950) {
        setChngeColorBg(scrollPosition > 70);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check in case the width is already less than 900px on load
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleShowTabs = () => {
    if (shwNavTabs) {
      document.querySelector('.navbarTabs-placer').classList.add('closing');

      setTimeout(()=>{
        setShwNavTabs(false)
        document.querySelector('.navbarTabs-placer').classList.remove('closing');
      },[400])

    }  else {
      setShwNavTabs(true)
    }
  }


  return (
    <nav className={`topNav-container ${chngeColorBg ? 'scrolled' : ''}`}>
      <div className='navbarBrand-container'>
        <span className='navbarBrand-placer'>    
          <img className='mybrand_name' src={navBrandName} alt='my_name'/>
        </span>
        <div className='menuList-container'
          onClick={handleShowTabs}>
          Menu <i class="bi bi-list"/>
        </div>
      </div>

      <div className={`navbarTabs-container ${shwNavTabs? 'active' : ''}`}>


        <div className='navbarTabs-placer'>
          
          <ul>
            <a href="#home-section" onClick={handleShowTabs}>
              <li className={activeSection === 'home' ? 'active' : ''}>HOME</li>
            </a>
            <a href="#aboutMe-section" onClick={handleShowTabs}>
              <li className={activeSection === 'about' ? 'active' : ''}>ABOUT ME</li>
            </a>
            <a href="#skills-section" onClick={handleShowTabs}>
              <li className={activeSection === 'skills' ? 'active' : ''}>SKILLS</li>
            </a>
            <a href="#portfolio-section">
              <li className={activeSection === 'portfolio' ? 'active' : ''}>PORTFOLIO</li>
            </a>
            <a href="#contact-section">
              <li className={activeSection === 'contact' ? 'active' : ''}>CONTACT ME</li>
            </a>
          </ul>

        </div>
      </div>
    </nav>
  );
}
