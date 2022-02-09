import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [wallet, setWallet] = useState(50)

  useEffect(() => {
    fetch(API)
    .then(r=>r.json())
    .then(sushis => {
      const updatedSushis = sushis.map(sushi => {
        return {...sushi, eaten:false}
      });
      setSushis(updatedSushis);
    })
  }, [])


  function sushiEaten(eatenSushi) {
    const updatedSushi = sushis.map(sushi => {
      if(sushi.id === eatenSushi.id) return {...sushi, eaten:true};
      return sushi;
    })
    setSushis(updatedSushi)
    setWallet(wallet => wallet-eatenSushi.price)
  }

  function handleAddMoney(addedMoney){
    setWallet(wallet => wallet + addedMoney)
  }

  const plates = sushis.filter(sushi=>sushi.eaten)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatenSushi={sushiEaten}/>
      <Table wallet={wallet} onAddMoney={handleAddMoney}
      plates={plates}/>
    </div>
  );
}

export default App;
