import './AbtmeSec.css'
import mypic from '../../../Assets/images/mygrad_pic.png'

export default function AbtmeSec() {
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
                    After completing my degree in 2018, I pivoted to the BPO industry,
                    immersing myself in customer service and technical support roles.
                    Over the years, I’ve developed a strong foundation in communication, 
                    problem-solving, and adaptability—qualities that I now aim to bring into the tech and data industries
                    as I pursue opportunities to grow and contribute in these fields.
                    </p>

                    <div className='dLcv-placer'>
                    <button className="download-cv">Download CV</button>
                    </div>
                </div>

                <div className='abMe-myPic'>
                    <img src={mypic} alt='my_picture'/>
                    <div className='myPic'/>
                </div>

            </div>

        </div> 
    )
}
