function swapNumbers(obj) {
    obj.x += obj.y;
    obj.y = obj.x - obj.y;
    obj.x = obj.x - obj.y;
  }
  
  let swapObj = {
    x: 10,
    y: 11,
  };
  
  console.log("--------before swap------");
  console.log("x = " + swapObj.x);
  console.log("y = " + swapObj.y);
  
  swapNumbers(swapObj);
  
  console.log("--------after swap------");
  console.log("x = " + swapObj.x);
  console.log("y = " + swapObj.y);
  