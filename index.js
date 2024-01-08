const inputStartDate = document.getElementById("startDate");
const inputEndDate = document.getElementById("endDate");
const totalDays = document.getElementById("totalDays");
const checkbox = document.getElementsByClassName("service");

const calculateTotalDays = () => {
  // converts date strings to date obj
  const startDate = new Date(inputStartDate.value);
  const endDate = new Date(inputEndDate.value);

  // removes time (hr, min, sec, millisec) by setting it to midnight
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);

  // total days will remain 0
  const startDateValue = inputStartDate.value;
  const endDateValue = inputEndDate.value;
  if(!endDateValue || !startDateValue) {
    totalDays.textContact = "0";
    return;
  }

  // calculates diff btwn two days, which is the num of days
  numDays = Math.round(((endDate - startDate)/(1000 * 60 * 60 * 24)) + 1);
  totalDays.textContent = numDays;
}
calculateTotalDays();

totalDays.textContent = "0";
inputStartDate.addEventListener("input", calculateTotalDays);
inputEndDate.addEventListener("input", calculateTotalDays);