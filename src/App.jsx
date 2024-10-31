import './App.css';
import { useState } from 'react';
import LaptopPage from './LaptopPage/LaptopPage'
import MyProfilePg from './MyProfilePage/MyProfilePg';

function App() {
  const [shwPrflePg, setShwPrflePg] = useState(false)

  return (
    <div className="App">
      {!shwPrflePg?
        <LaptopPage setShwPrflePg={setShwPrflePg}/> :
        <MyProfilePg/>
      }
      
    </div>
  );
}

export default App;
