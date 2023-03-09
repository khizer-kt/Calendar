const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

const days = new Date(year, month + 1, 0).getDate(); //days in this month month+1 as Jan is zero

const firstDayOfMonth = new Date(year, month, 1).getDay(); //first day of month
const lastDayOfPreviousMonth = new Date(year, month, 0).getDate();

const calendarBody = document.getElementById('calendar-body');

calendarBody.innerHTML = '';

let date = 1;
for (let i = 0; i < 6; i++) { //6 coz can be 6 weeks as last one is also included
  const row = document.createElement('tr');

  //7 for week days
  for (let j = 0; j < 7; j++) {
    const cell = document.createElement('td');
    if (i === 0 && j < firstDayOfMonth) {
      const day = lastDayOfPreviousMonth - firstDayOfMonth + j + 1;
      cell.textContent = day;
      cell.classList.add('inactive');
    }
    else if (date > days) {
      break;
    }
    else {
      cell.textContent = date;
      cell.classList.add('active');
      cell.addEventListener('click', function() {
        const eventDetails = prompt('Enter event details:');
        if (eventDetails) {
          const eventDiv = document.createElement('div');
          eventDiv.textContent = eventDetails;
          cell.appendChild(eventDiv);
        }
      });
      date++;
    }
    row.appendChild(cell);
  }

  calendarBody.appendChild(row);
}
