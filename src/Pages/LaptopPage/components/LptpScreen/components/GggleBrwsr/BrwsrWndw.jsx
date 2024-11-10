import './BrwsrWndw.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ggleIcon from '../../../../../../Assets/images/lptp_pg/chrome_icon.png'
import ggleWlcmPg from '../../../../../../Assets/images/lptp_pg/google-homepage.jpg'

export default function GggleBrwsr(props) {
    const {setShwGgleChrme, setMinChrme, hndlMinBrwsr} = props

  return (
    <div className='google-browser'>
        <div className='browser-header'>
            <div className='tab-container'>
                <div className='tab-right'>
                <div className='drpDown-container'>
                    <div className='drpDownIcn-holder'>
                    <i class="bi bi-chevron-down" id='dropDown-icon'/>
                    </div>

                </div>
                <div className='openTab'>
                    <img src={ggleIcon} alt="google-icon"/>
                    Ivan's Profile
                    <i class="bi bi-x" id='tabBrowser-close'
                        onClick={()=>{
                            setShwGgleChrme(false);
                            setMinChrme(false)}
                        }
                    />
                </div>
                <div className='addtab-container'>
                    <div className='addTbIcon-holder'>
                    <i className="bi bi-plus"/>
                    </div>
                </div>

                </div>
                <div className='clseMinMaxContainer'>
                <div className='minWin-holder' onClick={hndlMinBrwsr}>
                    <i className="bi bi-dash-lg"></i>
                </div>
                <div className='maxWin-holder'>
                    <i className="bi bi-fullscreen" id='mxmzIcon'></i>
                </div>
                <div  className='clseWin-Holder'
                    onClick={()=>{
                    setShwGgleChrme(false);
                    setMinChrme(false)}
                    }>
                    <i className="bi bi-x" id='browser-close'/>
                </div>
                </div>
            </div>
            <div className='searchbar-container'>

                <div className='bckFrwrdRldHm-placer'>
                <div className='bckFrwrdRldHm'>
                    <i className="bi bi-arrow-left-short"></i>
                </div>
                <div className='bckFrwrdRldHm'>
                    <i className="bi bi-arrow-right-short"></i>
                </div>
                <div className='bckFrwrdRldHm reload'>
                    <i class="bi bi-arrow-clockwise"></i>
                </div>
                <div className='bckFrwrdRldHm home'>
                    <i className="bi bi-house-door"></i>
                </div>

                </div>

                <div className='searchField-placer'>

                <div className='srchbar-leftsde'>
                    <div className='nodeplus-icon'>
                    <i className="bi bi-node-plus"/>
                    </div>
                    <p className='website-name'>
                    ivannollora.com
                    </p>
                </div>

                <div className='srchbr-rightsde'>
                    <div className='favoriteWeb-container'>
                    <i className="bi bi-star-fill"/>
                    </div>
                </div>
                
                </div>

                <div className='prfleBrwsrIcn-container'>
                <div><i className="bi bi-person-fill"/></div>
                <div><i className="bi bi-three-dots-vertical"/></div>

                </div>
            </div>
        </div>
        <div className='browser-content'>
            <img className='ggleHmPage' src={ggleWlcmPg} alt='ggleHmePge'/>
        </div>
    </div>
  )
}
