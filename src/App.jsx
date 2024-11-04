import './App.css';
import { useState, useEffect } from 'react';
import LaptopPage from './LaptopPage/LaptopPage'
import MyProfilePg from './MyProfilePage/MyProfilePg';

function App() {
  const [shwPrflePg, setShwPrflePg] = useState(false)

  useEffect(() => {
    const handleResize = () => window.innerWidth < 950 ? setShwPrflePg(true) : setShwPrflePg(false);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`App ${shwPrflePg? 'myProfile' : ''}`}>
      {!shwPrflePg?
        <LaptopPage setShwPrflePg={setShwPrflePg}/> :
        <MyProfilePg/>
      }
      
    </div>
  );
}

export default App;
