import React from "react";

function Sushi({sushi, onEatenSushi}) {
  const {name, img_url, price, eaten} = sushi;
  
  function handleOnPlateClick(){
    if (!eaten) {
     onEatenSushi(sushi);
   } else {
     alert("no more")
   }
}
  return (
    <div className="sushi">
      <div className="plate" onClick={handleOnPlateClick}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
