// 1. Create Date object for current date and time
const now = new Date();
// 2. Extract values
const year = now.getFullYear();
// Month is 0–11, so add 1
const month = now.getMonth() + 1;
const date = now.getDate();
// Day of week (0–6)
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day = days[now.getDay()];
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
// Display vaues
console.log(year);
console.log(month);
console.log(date);
console.log( day);
console.log("Time:", hours + ":" + minutes + ":" + seconds);
// 3. Display date in DD-MM-YYYY HH:mm:ss format
let dd = date<10?"0"+date:date;
let mm = month< 10 ? "0" + month : month;
let hh = hours <10? "0" + hours : hours;
let min = minutes< 10 ? "0" + minutes : minutes;
let sec = seconds < 10 ? "0" + seconds : seconds;
const formattedDate = dd + "-" + mm + "-" + year + " " + hh + ":" + min + ":" + sec;
console.log(formattedDate);
