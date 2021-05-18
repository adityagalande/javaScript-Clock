const secndHand = document.querySelector(".second_hand");
const minuteHand = document.querySelector(".minute_hand");
const hourHand = document.querySelector(".hour_hand");

function setDate(){
  const now = new Date();
  const second = now.getSeconds();
  const secondDegree = ((second / 60) * 360) + 90;
  secndHand.style.transform = `rotate(${secondDegree}deg)`;
  console.log(secondDegree);

  const minute = now.getMinutes();
  const minuteDegree = ((minute / 60) * 360) + ((second/60)*6) + 90;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  console.log(minute);

  const hour = now.getHours();
  const hourDegree = ((hour / 12) * 360) + ((minute / 60) * 60) + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  console.log(hourDegree);

}

// It Runs the function every 1sec
setInterval(setDate, 1000);
setDate();
