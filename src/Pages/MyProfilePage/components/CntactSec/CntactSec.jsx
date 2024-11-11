import './CntactSec.css'
import { useState } from 'react'
import SubmitInterest from '../../../../Services/SubmitInterest'

export default function CntactSec() {
    const [clientName, setClientName] =  useState('')
    const [clientEmail, setClientEmail] =  useState('')
    const [clientPhone, setClientPhone] =  useState('')
    const [clientMessage, setClientMessage] =  useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Thank you for your interest!')

        const clientDetails = {
            name: clientName,
            email: clientEmail,
            phone: clientPhone,
            message:  clientMessage
        }

        SubmitInterest.sendDetails(clientDetails)
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
                    onChange={e=> setClientName(e.target.value)}
                />

                <input
                    type="email"
                    name="client_email"
                    placeholder='Your Email'
                    
                    onChange={e=> setClientEmail(e.target.value)}
                />

                <input
                    type="tel"
                    name="client_contact#"
                    placeholder='Your Phone'
                    onChange={e=> setClientPhone(e.target.value)}
                />
                </div>

                <div className='yourMessage-container'>
                    <textarea placeholder='Your Message' onChange={e=> setClientMessage(e.target.value)}/>
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
