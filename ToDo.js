window.localStorageWithExpiry = {
  setItem: (key, value, time) => {
    const currentDate = new Date;
    const valueAndExpirySeconds = {
      value: value,
      expirySeconds: currentDate.getTime()+ (time*1000)   // that mean in this date exactly the data will expire
    };
    localStorage.setItem(key, JSON.stringify(valueAndExpirySeconds));
    console.log("added successfuly")
},

  getItem :(key)=>{
    const itemString = localStorage.getItem(key)
    const valueAndExpirySeconds=JSON.parse(itemString)
    const currentDate = new Date;
    if(valueAndExpirySeconds.expirySeconds<= currentDate.getTime()){
        localStorage.removeItem(key)
        console.log('Answer -->',undefined)
        return undefined
    }else{
        console.log('Answer -->',valueAndExpirySeconds.value)
        return itemString.value
    }
  }
};


 