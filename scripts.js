const countDownDateTime = new Date("Aug 26, 2023 18:00:00").getTime();
const daysValue = document.querySelector("#days");
const hoursValue = document.querySelector("#hours");
const minutesValue = document.querySelector("#minutes");
const secondsValue = document.querySelector("#seconds");

//run this function every 1 second'
let x = setInterval(function (){
  const dateTimeNow = new Date().getTime();
  let difference = countDownDateTime - dateTimeNow;

  //calculating time and assigning values
  daysValue.innerHTML = Math.floor(difference / (1000*60*60*24));
  hoursValue.innerHTML = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutesValue.innerHTML = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  secondsValue.innerHTML= Math.floor((difference % (1000 * 60)) / 1000);

  if (difference < 0){
    clearInterval(x);
  }
}, 1000);


function checkPswd(){
  var correctPassword = "isolemnlysweariamuptonogood";
  var password = document.getElementById("pswd").value;
 
  if(password == correctPassword){
    window.location = 'hemligOpen.html';
    return false;
  }
  else{
    alert("hmmm.... maybe this is just an ordinary map..");
  }

  console.log(correctPassword);
  console.log(password);
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}