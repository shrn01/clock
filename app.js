setInterval(setTime, 1000);

const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

function setTime() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const minRatio = (seconds / 60 + minutes) / 60;
  const hourRatio = (minRatio + hours) / 12;

  setAngles(minute, minRatio);
  setAngles(hour, hourRatio);
}

function setAngles(hand, ratio) {
  hand.style.setProperty("--rotation", ratio * 360);
}

setTime();
