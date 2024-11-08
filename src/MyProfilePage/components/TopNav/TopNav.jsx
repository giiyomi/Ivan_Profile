import './TopNav.css';
import { useState, useEffect, useRef,  useCallback } from 'react';
import navBrandName from '../../../Assets/images/navBrand-removebg-preview.png';

export default function TopNav() {
  const [chngeColorBg, setChngeColorBg] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [shwNavTabs, setShwNavTabs] =  useState(false)
  const navRef = useRef(null);

  // console.log(activeSection)

  const handleShowTabs = useCallback(() => {
    if (shwNavTabs) {
      document.querySelector('.navbarTabs-placer').classList.add('closing');

      setTimeout(() => {
        setShwNavTabs(false);
        document.querySelector('.navbarTabs-placer').classList.remove('closing');
      }, 400);
    } else {
      setShwNavTabs(true);
    }
  }, [shwNavTabs]);

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
        skills: document.getElementById('skills-section').offsetTop,
        portfolio: document.getElementById('portfolio-section').offsetTop,
      };

      if (scrollPosition >= sectionOffsets.contact - 50) {
        setActiveSection('contact');
      } else if (scrollPosition >= sectionOffsets.portfolio - 50) {
        setActiveSection('portfolio');
      } else if (scrollPosition >= sectionOffsets.skills - 50) {
        setActiveSection('skills');
      } else if (scrollPosition >= sectionOffsets.about - 50) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }

      if (window.innerWidth >= 950) {
        setChngeColorBg(scrollPosition > 70);
      }
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && shwNavTabs) {
        handleShowTabs();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);

    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside); 
    };
  }, [handleShowTabs, shwNavTabs]);

  return (
    <nav className={`topNav-container ${chngeColorBg ? 'scrolled' : ''}`} ref={navRef}>
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
            <a href="#portfolio-section" onClick={handleShowTabs}>
              <li className={activeSection === 'portfolio' ? 'active' : ''}>PORTFOLIO</li>
            </a>
            <a href="#contactMe-section" onClick={handleShowTabs}>
              <li className={activeSection === 'contact' ? 'active' : ''}>CONTACT ME</li>
            </a>
          </ul>

        </div>
      </div>
    </nav>
  );
}
