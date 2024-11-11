import { useEffect, useState } from 'react';
import './AbtmeSec.css';
import mypic from '../../../../Assets/images/mygrad_pic.png';

const my_resume_au = '/my_resume/LesterIvanNollora.pdf';
const my_resume_ph = '/my_resume/LesterIvanNolloraPhp.pdf';

export default function AbtmeSec() {
    const [cvLink, setCvLink] = useState(my_resume_au);

    useEffect(() => {
        fetch('https://api.ipapi.com/api/check?access_key=de3ac659763f77cb270b553d441109ed')
            .then(response => response.json())
            .then(data => {
                if (data.country_code === 'AU') {
                    setCvLink(my_resume_au);
                } else {
                    setCvLink(my_resume_ph);
                }
            })
            .catch(error => console.error('Error fetching location:', error));
    }, []);

    return (
        <div className='aboutMe-section' id='aboutMe-section'>
            <div className='aboutMe-placer'>

                <div className='abtMe-field'>
                    <h2>About Ivan.</h2>

                    <p>
                        With a degree in Business Administration majoring in Accounting,
                        my career journey took an exciting turn when I followed my passion for technology.
                        In early 2017, I landed a role as a Data Analyst in a collections agency, where I honed my analytical skills.
                    </p>

                    <p>
                        After earning my degree in 2018, I immersed myself in customer service and technical support roles in the BPO industry.
                        Driven by a passion for technology and a background in accounting,
                        I completed a Data Analytics course at Refocus Digital Academy, earning a certificate,
                        and recently graduated from Avion School’s Software Engineering program with a focus on web development.
                    </p>

                    <div className='dLcv-placer'>
                    <a href={cvLink} download className="download-cv"><button className='download-cv'>Download CV</button></a>
                    </div>
                </div>

                <div className='abMe-myPic'>
                    <img src={mypic} alt='my_picture'/>
                    <div className='myPic'/>
                </div>

            </div>
        </div> 
    );
}
