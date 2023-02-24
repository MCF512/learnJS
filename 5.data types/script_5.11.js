//1
let date = new Date(2012, 1, 20, 3, 12)
alert(date)

//2
function getWeekDay(date) {
  let weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  let currentDay = weekDays[date.getDay()];

  return currentDay
}

//3 
function getLocakDay(date) {
  let currentDay = date.getDay();

  return currentDay == 0 ? 7 : currentDay
}

//4
function getDateAgo(date, days) {
  let newDate = new Date(date);
  newDate.setDate(date.getDate() - days);
  return newDate.getDate();
}

//5
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

//6
function getSecondsToday() {
  let currentDate = new Date();

  return currentDate.getHours() * 3600 + currentDate.getMinutes() * 60 + currentDate.getSeconds()
}

//7
function getSecondsToTomorrow() {
  let d = new Date();
  let secondsInDay = 24 * 60 * 60;

  return secondsInDay - (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds())
}

//8 
function formatDate(date) {
  let milisecDifference = new Date() - date;
  let secDifference = Math.round(milisecDifference / 1000);
  let minuteDifference = secDifference / 60;
  let hoursDifference = minuteDifference / 60;
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  minutes = minutes < 10 ? '0' + minutes : minutes;
  hour = hour < 10 ? '0' + hour : hour;
  month = month < 10 ? '0' + month : month;
  year = String(year).slice(2);
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;

  if (secDifference < 1) {
    return 'прямо сейчас';
  } else if (minuteDifference < 1) {
    return `${secDifference} сек. назад`
  } else if (hoursDifference < 1) {
    return `${minuteDifference} мин. назад`
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
  }
}