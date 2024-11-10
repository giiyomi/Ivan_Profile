import './AbtmeSec.css'
import mypic from '../../../../Assets/images/mygrad_pic.png'

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
                        After earning my degree in 2018, I immersed myself in customer service and technical support roles in the BPO industry.
                        Driven by a passion for technology and a background in accounting,
                        I completed a Data Analytics course at Refocus Digital Academy, earning a certificate,
                        and recently graduated from Avion School’s Software Engineering program with a focus on web development.
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
