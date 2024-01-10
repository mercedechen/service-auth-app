const button = document.getElementById("button");
const serviceList = document.getElementById("serviceList");
const form = document.querySelector(".form");

// text in dropdown hover menu changes based on selection
serviceList.addEventListener("click", (event) => {
  button.textContent = event.target.textContent;
});


const inputStartDate = document.getElementById("startDate");
const inputEndDate = document.getElementById("endDate");
const totalDays = document.getElementById("totalDays");
const checkAll = document.getElementById("all");
const box = document.getElementsByName("box.name");
const checked = document.getElementById("box.id");

const calculateTotalDays = () => {
  // converts strings to obj
  const startDate = new Date(inputStartDate.value);
  const endDate = new Date(inputEndDate.value);

  // removes time (hr, min, sec, ms)
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);

  const startDateValue = inputStartDate.value;
  const endDateValue = inputEndDate.value;
  if(!endDateValue || !startDateValue) {
    return totalDays.textContact = "0";
  }

  numDays = Math.round(((endDate - startDate)/(1000 * 60 * 60 * 24)) + 1);
  totalDays.textContent = numDays;
}
calculateTotalDays();


function countSelectDays() {
  let selectDays = document.querySelectorAll('input[type="checkbox"]:checked').length;
  document.getElementById("selectDays").innerHTML = selectDays;
}

function selectAllDays(check) {
  if (checkAll.checked === true) {
    document.getElementById("selectDays").innerHTML = 7;
  } else {
    document.getElementById("selectDays").innerHTML = 0;
  }
}

totalDays.textContent = "0";
inputStartDate.addEventListener("input", calculateTotalDays);
inputEndDate.addEventListener("input", calculateTotalDays);