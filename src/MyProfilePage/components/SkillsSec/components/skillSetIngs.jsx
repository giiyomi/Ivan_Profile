import HTML_logo from './../../../../Assets/images/myPrfle_pg/skills/HTML_logo.png';
import JS_logo from './../../../../Assets/images/myPrfle_pg/skills/JS_logo.png';
import CSS_logo from './../../../../Assets/images/myPrfle_pg/skills/CSS_logo.png';
import REACTJS_logo from './../../../../Assets/images/myPrfle_pg/skills/REACT_logo.png';
import RUBY_logo from './../../../../Assets/images/myPrfle_pg/skills/RUBY_logo.png';
import RAILS_logo from './../../../../Assets/images/myPrfle_pg/skills/RAILS_logo.png';
import PYTHON_logo from './../../../../Assets/images/myPrfle_pg/skills/PYTHON_logo.png';
import POSTGRESQL_logo from './../../../../Assets/images/myPrfle_pg/skills/POSTGRESQL_logo.png';
import PGADMIN_logo from './../../../../Assets/images/myPrfle_pg/skills/pgAdmin_logo.png';
import PowerBI_logo from './../../../../Assets/images/myPrfle_pg/skills/PowerBI_logo.png';
import VSCode_logo from './../../../../Assets/images/myPrfle_pg/skills/VSCoode_logo.png';
import EXCEL_logo from './../../../../Assets/images/myPrfle_pg/skills/EXCEL_ logo.png';
import PPT_logo from './../../../../Assets/images/myPrfle_pg/skills/PPT_icon.png'
import WORD_logo from './../../../../Assets/images/myPrfle_pg/skills/WORD_icon.png'
import SASS_logo from './../../../../Assets/images/myPrfle_pg/skills/SASS_logo.png'
import BOOTSRATP_icon from './../../../../Assets/images/myPrfle_pg/skills/BOOTSTRAP_icon.png'
import GIT_icon from './../../../../Assets/images/myPrfle_pg/skills/GIT_icon.png'
import GITHUB_icon from './../../../../Assets/images/myPrfle_pg/skills/GITHUB_icon.png'
import API_icon from './../../../../Assets/images/myPrfle_pg/skills/API_icon.png'

const skillsImages = [
  { name: 'HTML', src: HTML_logo, proficiency: 'good' },
  { name: 'CSS', src: CSS_logo, proficiency: 'good' },
  { name: 'JAVASCRIPT', src: JS_logo, proficiency: 'good' },
  { name: 'ReactJS', src: REACTJS_logo, proficiency: 'good' },
  { name: 'RUBY', src: RUBY_logo, proficiency: 'good' },
  { name: 'RAILS', src: RAILS_logo, proficiency: 'good' },
  { name: 'pgAdmin', src: PGADMIN_logo, proficiency: 'good' },
  { name: 'POSTGRE SQL', src: POSTGRESQL_logo, proficiency: 'good' },
  { name: 'VSCode', src: VSCode_logo, proficiency: 'good' },
  { name: 'PowerBI', src: PowerBI_logo, proficiency: 'good' },
  { name: 'EXCEL', src: EXCEL_logo, proficiency: 'good' },
  { name: 'POWERPOINT', src: PPT_logo, proficiency: 'good' },
  { name: 'WORD', src: WORD_logo, proficiency: 'good' },
  { name: 'PYTHON', src: PYTHON_logo, proficiency: 'familiar' },
  { name: 'SASS CSS', src: SASS_logo, proficiency: 'familiar' },
  { name: 'BOOTSRAP', src: BOOTSRATP_icon, proficiency: 'familiar' },
  { name: 'GIT', src: GIT_icon, proficiency: 'familiar' },
  { name: 'GITHUB', src: GITHUB_icon, proficiency: 'familiar' },
  { name: 'API', src: API_icon, proficiency: 'familiar' },
].map((skill, index) => ({ ...skill, id: index + 1 }));

export default skillsImages;
