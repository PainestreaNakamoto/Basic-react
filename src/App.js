import React, { useEffect , useState } from 'react';
import './App.css';
import MyBar from './components/MyBar';
import MyCard from './components/MyCard';

// var data  = require('./attractions.json')




function App() {
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch("https://www.mecallapi.com/api/attractions/")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        setData(result);
      }
    )
  },[])
  return (
    <div className="App">
      <MyBar/>
      <div className='grid-container'>
      {data.map(item => (
      <MyCard key={item.id} name={item.name} coverimage={item.coverimage} detail={item.detail}/>
      ))}

      </div>
    </div>
  );
}

export default App;
