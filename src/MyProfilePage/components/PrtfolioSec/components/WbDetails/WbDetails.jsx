import './WbDetails.css'
import { useRef, useEffect, useState } from 'react'
import projectList from '../prjctsList/prjctsList'



export default function WbDetails(props) {
  const {setShwVwWbDtls, setPrjctName, prjctName} = props
  const [imgIndex, setImgIndex] = useState(0)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const outsideWbDtlsWndw = useRef()
  const dotsForImagesRef = useRef()
  const clickedWebsite = projectList.find(project => project.name === prjctName[0] && project.description === prjctName[1])

  const prevImage = () => {
    if (imgIndex > 0) {
      setImgIndex(prevIndex => prevIndex - 1);
    }
  };

  const nextImage = () => {
    if (imgIndex < clickedWebsite.src.length - 1) {
      setImgIndex(prevIndex => prevIndex + 1);
    }
  };

  useEffect(() => {
    const checkOverflow = () => {
      const dotsContainer = dotsForImagesRef.current;
      if (dotsContainer) {
        setIsOverflowing(dotsContainer.scrollWidth > dotsContainer.clientWidth);
      }
    };

    checkOverflow();

    window.addEventListener('resize', checkOverflow);
    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);


  useEffect(()=>{
    const handleClickOutside = (event) => {
      if (outsideWbDtlsWndw.current && !outsideWbDtlsWndw.current.contains(event.target)) {
        document.querySelector('.wbDtls-container').classList.add('closing')

        setTimeout(() => {
          setShwVwWbDtls(false); 
          document.querySelector('.wbDtls-container').classList.remove('closing');
          setPrjctName(null)
        },400)
      }
    };

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [setShwVwWbDtls, setPrjctName] )

  const handleClickOutside = () => {
      document.querySelector('.wbDtls-container').classList.add('closing')

      setTimeout(() => {
        setShwVwWbDtls(false); 
        document.querySelector('.wbDtls-container').classList.remove('closing');
        setPrjctName(null)
      },400)
    
  };


  const isVideo = (filePath) => {
    const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv', '.flv'];
    return videoExtensions.some(extension => filePath.toLowerCase().endsWith(extension));
  };


  return (
    <div className='wbDtls-container'>
        <div className='wbDtls-placer'>

            <div className='wbDtls-window' ref={outsideWbDtlsWndw}>
              <div className='clseClckedPrjct' onClick={handleClickOutside}>
                <div>CLOSE</div>
                <i class="bi bi-x-circle-fill"></i>
              </div>
              <div className='wbstImages-container'>
                <div className='wbstImages'>
                  <div className='dotsForImages'  ref={dotsForImagesRef} style={{ justifyContent: isOverflowing ? 'flex-start' : 'center' }}>
                  {clickedWebsite.src.map((_, index) => (
                    <div
                      key={index}
                      className={`dot ${imgIndex === index ? 'active' : ''}`}
                      onClick={() => setImgIndex(index)}/>
                  ))}
                  </div>  
                  <div className='prvsImg-container' onClick={prevImage} style={{ opacity: imgIndex === 0 ? 0.5 : 1, pointerEvents: imgIndex === 0 ? 'none' : 'auto' }}> 
                    <div className='prvsImg'>
                      <i class="bi bi-arrow-left-square-fill"/>
                    </div>
                  </div>
                  {isVideo(clickedWebsite.src[imgIndex]) ? (
                    <video src={clickedWebsite.src[imgIndex]} controls className='slctedPrjctImg' />
                    ) : (
                    <img src={clickedWebsite.src[imgIndex]} alt='slctedPrjctImg' className='slctedPrjctImg' />
                    )
                  }
                  <div className='nxtImg-container' onClick={nextImage} style={{ opacity: imgIndex === clickedWebsite.src.length - 1 ? 0.5 : 1, pointerEvents: imgIndex === clickedWebsite.src.length - 1 ? 'none' : 'auto' }}> 
                    <div className='nxtImg'>
                      <i class="bi bi-arrow-right-square-fill"/>
                    </div>
                  </div>
                </div>
                

                <div className='wbstDtails'>
                  <h2>{clickedWebsite.name}</h2>
                  <p className='url-container'>
                    <b>URL:</b> <a href={clickedWebsite.link} target="_blank" rel="noopener noreferrer">{clickedWebsite.link}</a>
                  </p>
                  <p className='wbsteExplntn'>{clickedWebsite.description}</p>
                </div>
              </div>
              {/* <div className='wbstDetails-container'>
                Details
              </div> */}
            </div>


        </div>
    </div>
  )
}