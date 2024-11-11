import './LftSdeButton.css'
import { useState, useEffect, useRef } from 'react'

const LftSdeButton = () => {
  const [clickedSideBut, setClickedSideBut] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setClickedSideBut(false); 
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []); 

  const backToLptpView = () => {
    localStorage.removeItem('laptopView');
    window.location.reload(); 
  }


  return (
    <div
        ref={buttonRef}
        className={`buttonToLptpPg-placer ${clickedSideBut? 'active' : ''}`}
        onClick={() => setClickedSideBut(!clickedSideBut)}
    >
      <i class="bi bi-chevron-compact-right"></i>
      <button onClick={backToLptpView}> Click here to view the laptop intro again</button>
    </div>
  )
}

export default LftSdeButton