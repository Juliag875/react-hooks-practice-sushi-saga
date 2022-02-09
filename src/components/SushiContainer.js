import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, onEatenSushi}) {
  const [index, setIndex] = useState(0);
 
 const sushiList = sushis.slice(index, index + 4).map(sushi => (
   <Sushi 
    key={sushi.id}
    sushi={sushi}
    onEatenSushi={onEatenSushi}
   />
 ));

 function handleAddSushi(){
   setIndex(index => (index + 4))
 }

  return (
    <div className="belt">
      {sushiList}
      <MoreButton onClickMore = {handleAddSushi}/>
    </div>
  );
}

export default SushiContainer;
