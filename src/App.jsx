import './App.css';
import { useState, useEffect } from 'react';
import LaptopPage from './Pages/LaptopPage/LaptopPage'
import MyProfilePg from './Pages/MyProfilePage/MyProfilePg';

function App() {
  const [shwPrflePg, setShwPrflePg] = useState(true)

  useEffect(() => {
    const doneWithLaptopView = localStorage.getItem('laptopView')
    const handleResize = () => setShwPrflePg(doneWithLaptopView || window.innerWidth < 950);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`App ${shwPrflePg? 'myProfile' : ''}`}>
      {!shwPrflePg?
        <LaptopPage setShwPrflePg={setShwPrflePg}/> :
        <MyProfilePg  />
      }
      
    </div>
  );
}

export default App;
