import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [data, setData] = useState([] );

  const jsonData = "/data.json";

  useEffect(() => {
    async function fetchData() {
      var res = await fetch(jsonData);
      var data = await res.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, [])

  return (
    <>
      {
        data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
