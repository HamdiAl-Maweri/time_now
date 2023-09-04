

let x = setInterval(()=>{
    const currentTime = new Date().toLocaleTimeString();
    time_now = document.getElementById("time").innerHTML = currentTime
        
    },1000)
