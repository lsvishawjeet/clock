// setInterval(clock, 1000)
//     function clock(){
//         var x = 30/3600;
//         document.getElementById("clocksui").style.transform += "rotate(3deg)";
//         document.getElementById("vaddisui").style.transform += "rotate(0.025deg)";
//         document.getElementById("shotisui").style.transform += "rotate(xdeg)";
//     }


setInterval(clock, 1000)
    function clock(){
        d = new Date();
        hour = d.getHours();
        minute = d.getMinutes();
        seconds = d.getSeconds();
        day = d.getDay();
        month = d.getMonth();
        year = d.getFullYear();

        clocksui = 6*seconds;
        vaddisui = 6*minute ;
        shotisui = 30*hour + (minute/2);

        document.getElementById("clocksui").style.transform = `rotate(${clocksui}deg)`;
        document.getElementById("dot2").style.transform = `rotate(${clocksui}deg)`;
        document.getElementById("vaddisui").style.transform = `rotate(${vaddisui}deg)`;
        document.getElementById("shotisui").style.transform = `rotate(${shotisui}deg)`;
        document.getElementById("datee").innerHTML = day + "/" + month + "/" + year;
    }