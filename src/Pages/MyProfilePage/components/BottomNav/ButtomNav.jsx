import './ButtomNav.css'

const ButtomNav = () => {
  return (
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
        <p className='footer-designer-name'> <span>All Rights Reserved. © 2024 <a href='https://ivannollora.netlify.app/' target="_blank" rel="noreferrer">Ivan</a> </span><span>Github Account : <a href='https://github.com/giiyomi' target="_blank" rel="noreferrer">Giiyomi</a></span>
        </p>
        </div>

    </div>
  )
}



export default ButtomNav
