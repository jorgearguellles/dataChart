

function unixTimeToWeekDay(dt) {
	const unixTimestamp = dt;
	const milliseconds = unixTimestamp * 1000;
	const dateObject = new Date(milliseconds);
  let day = dateObject.toLocaleString("es", { weekday: "long", day: "numeric", month: "long" });
  return day;
}

function unixTimeToNumberDay(dt) {
	const unixTimestamp = dt;
	const milliseconds = unixTimestamp * 1000;
	const dateObject = new Date(milliseconds);
  let day = dateObject.toLocaleString("es", { day: "numeric"});
  return day;
}

console.log("Number day:",unixTimeToNumberDay(1624302000000));

function unixTimeToHour(dt) {
	const unixTimestamp = dt;
	const milliseconds = unixTimestamp * 1000;
	const dateObject = new Date(milliseconds);
  let hourMinutes = dateObject.toLocaleString("en-US", {hour: "numeric", minute: "numeric"})
  
	return hourMinutes;
}


console.log("Hour:",unixTimeToHour(1624273200000));


function unixTimeToHuman(dt) {
	const unixTimestamp = dt;
	const milliseconds = unixTimestamp * 1000;
	const dateObject = new Date(milliseconds);
  let shortTime = dateObject.toLocaleString("en-US", {timeZoneName: "short"})
  
	return shortTime;
}

console.log("Human Friendly:",unixTimeToHuman(1624273200000));


function unixTimeToHumanF(dt) {
	const unixTimestamp = dt;
	const milliseconds = unixTimestamp * 1000;
	const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString()
  
	return humanDateFormat;
}

