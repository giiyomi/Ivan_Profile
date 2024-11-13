import './CntactSec.css'
import { useState, useEffect } from 'react'
import SubmitInterest from '../../../../Services/SubmitInterest'

export default function CntactSec({setIsLoading}) {
    const [clientName, setClientName] =  useState('')
    const [clientEmail, setClientEmail] =  useState('')
    const [clientPhone, setClientPhone] =  useState('')
    const [clientMessage, setClientMessage] =  useState('')
    const [successfull, setSuccessful] = useState(false)

    console.log(successfull)

    useEffect(()=>{
        if (successfull) {
            setClientName('')
            setClientEmail('')
            setClientPhone('')
            setClientMessage('')
        }
    },[successfull])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Thank you for submitting interest!')

        const clientDetails = {
            name: clientName,
            email: clientEmail,
            phone: clientPhone,
            message:  clientMessage
        }

        await SubmitInterest.sendDetails(clientDetails, setIsLoading, setSuccessful)
        
    }

  return (
    <div className='contactMe-section' id='contactMe-section'>
        <div className='contactMe-placer'>
        <div className='contactMe-header'>
            <h1 className='cntctMe-Title'> Contact</h1>
            <p className='cntctMe-explntion'>Looking to create, analyze, or innovate? I’m just a message away!</p>
        </div>

        <div className='contactMe-container'>
            <form className='cntct-form' type="submit" onSubmit={handleSubmit}>
            <div className='cntctInputs-container'>
                
                <div className='nmeEmailPhone-container'>
                    <input
                        type="text"
                        name="client_name"
                        placeholder='Your Name'
                        value={clientName}
                        onChange={e=> setClientName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        name="client_email"
                        placeholder='Your Email'
                        value={clientEmail}
                        onChange={e=> setClientEmail(e.target.value)}
                        required
                    />

                    <input
                        type="tel"
                        name="client_contact#"
                        placeholder='Your Phone'
                        value={clientPhone}
                        minLength={9}
                        onChange={e=> setClientPhone(e.target.value)}
                        required
                    />
                </div>

                <div className='yourMessage-container'>
                    <textarea
                        placeholder='Your Message'
                        value={clientMessage}
                        onChange={e => setClientMessage(e.target.value)}
                        required
                    />         
                </div>

            </div>
            <div className='sndMessgeButtn-container'>
                <button type='submit'>Send Message</button>
            </div>
            </form>

        </div>

        </div>
    </div>
    )
}
