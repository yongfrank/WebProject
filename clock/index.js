/*
 * @Author: Frank Chu
 * @Date: 2022-10-28 11:33:48
 * @LastEditors: Frank Chu
 * @LastEditTime: 2022-10-28 12:11:52
 * @FilePath: /WebProject/clock/index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Frank Chu, All Rights Reserved. 
 */

// querySelector
// Returns the first element that is a descendant 
// of node that matches selectors.
const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")

function updateClock() {
    const currentDate = new Date();

    // setTimeout(updateClock, 1000);
    
    // print(currentDate)
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const hourDeg = (hour / 12) * 360;
    const minuteDeg = (minute / 60) * 360;
    const secondDeg = (second / 60) * 360;

    // change degree in css
    hourEl.style.transform = `rotate(${hourDeg}deg)`
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`
    secondEl.style.transform = `rotate(${secondDeg}deg)`
    
    console.log(hour, minute, second);
}

// updateClock()
setInterval(updateClock, 1000);