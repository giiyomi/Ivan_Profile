import './LaptopPage.css'
import MechKybrd from './components/MechKybrd/MechKybrd'
import LptpScreen from './components/LptpScreen/LptpScreen'

export default function LaptopPage(props) {
    const {setShwPrflePg} = props
    return ( 
        <div class='lptpPg-container'>
            <div class='lptpPg-content'>
                <div class="screen-holder">
                    <div class="screen-container">
                        <LptpScreen setShwPrflePg={setShwPrflePg}/>
                        <div class="acer-laptop">acer</div>
                    </div>
                </div>
                <div class="keyboard-holder">
                    <div class="laptop-keyboard">
                        <div class="exhaust-container">
                            <div class="exhausts">
                                {Array.from({ length: 400 }, (_, index) => (
                                    <div key={index} className="exhaust"></div>
                                ))}
                            </div>
                        </div>
                        <MechKybrd/>
                        <div class="mousepad-container">
                            <div class="mousepad"/>
                        </div>
                    </div>
                    <div class="laptop-volume"/>
                </div>
                <div className='tablePg-container'/>
                
            </div>

        </div>
    )
}