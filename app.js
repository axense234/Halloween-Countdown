const Countdown = (date) => {
  const holidayDate = new Date(date).getTime();

  setInterval(() => {
    const currentDate = new Date().getTime();
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const currentSecond = new Date().getSeconds();

    // Selecting the HTML elements
    const daysTimer = document.querySelector("#days-timer");
    const hoursTimer = document.querySelector("#hours-timer");
    const minutesTimer = document.querySelector("#minutes-timer");
    const secondsTimer = document.querySelector("#seconds-timer");

    // Calculating how much time left till the respective date
    const daysTimerNumber =
      holidayDate / 1000 / 60 / 60 / 24 - currentDate / 1000 / 60 / 60 / 24;
    const hoursTimerNumber = 24 - currentHour;
    const minutesTimerNumber = 60 - currentMinute;
    const secondsTimerNumber = 60 - currentSecond;

    // Displaying how much time left till the respective date
    daysTimer.textContent = Math.floor(daysTimerNumber) - 1;
    hoursTimer.textContent = hoursTimerNumber - 1;
    minutesTimer.textContent = minutesTimerNumber - 1;
    secondsTimer.textContent = secondsTimerNumber;
  }, 1000);
};

Countdown("Oct 31, 2024 24:00:00");
