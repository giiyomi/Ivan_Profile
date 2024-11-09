import './CntactSec.css'

export default function CntactSec() {
  return (
    <div className='contactMe-section' id='contactMe-section'>
        <div className='contactMe-placer'>
        <div className='contactMe-header'>
            <h1 className='cntctMe-Title'> Contact</h1>
            <p className='cntctMe-explntion'>Looking to create, analyze, or innovate? I’m just a message away!</p>
        </div>

        <div className='contactMe-container'>
            <form className='cntct-form'>
            <div className='cntctInputs-container'>
                <div className='nmeEmailPhone-container'>
                <input type="text" name="client_name" placeholder='Your Name'/>
                <input type="email" name="client_email" placeholder='Your Email'/>
                <input type="tel" name="client_contact#" placeholder='Your Phone'/>
                </div>
                <div className='yourMessage-container'>
                <textarea placeholder='Your Message'/>
                </div>
            </div>
            <div className='sndMessgeButtn-container'>
                <button type='submit' onClick={e => e.preventDefault()}>Send Message</button>
            </div>
            </form>

        </div>

        </div>
    </div>
    )
}
