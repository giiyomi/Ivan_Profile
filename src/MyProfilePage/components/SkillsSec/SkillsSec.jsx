import './SkillsSec.css'
import skillsImages from '../../components/SkillsSec/components/skillSetIngs'

export default function SkillsSec() {

    const goodSkills = skillsImages.filter(skill => skill.proficiency === 'good');
    const familiarSkills = skillsImages.filter(skill => skill.proficiency === 'familiar');

  return (
    <div className='skills-section' id='skills-section'>
        <div className='skills-list-container'>
            <div className='skillList-header'>
                <h1 className='skills-title'> Skills</h1>
                <p className='sklls-explntn'>
                    Proficient in web technologies, data tools, and backend frameworks,
                    with a versatile skill set for building functional,
                    data-driven applications.
                </p>
            </div>
            <div className='skills-list'>
            
                <div className='skllPrfcncy-container'>
                    <h3 className='prfcncy-classification'>Proficient</h3>
                    <div className='skllPrfcncy'>
                    {goodSkills.map(skill => (
                        <div className='skill' key={skill.id}>
                        <img src={skill.src} alt='html_logo'/>
                        <h3>{skill.name}</h3>
                        </div>
                        )
                    )}
                    </div>
                </div>

                <div className='skllPrfcncy-container'>
                    <h3 className='prfcncy-classification'>Supporting Skills</h3>
                    <div className='skllPrfcncy'>
                    {familiarSkills.map(skill => (
                        <div className='skill' key={skill.id}>
                        <img src={skill.src} alt='html_logo'/>
                        <h3>{skill.name}</h3>
                        </div>
                        )
                    )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
