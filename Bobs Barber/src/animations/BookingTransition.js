import gsap from "gsap"; //importerar gsap

//animation för att synliggöra main-elementet:
export const mainTransition = () => {
  const mainContent = document.querySelector("main");

  mainContent.style.visibility = "visible";

  gsap.to(mainContent, {
    opacity: 1,
    duration: 0.5,
  });
};

//animation för att skapa övergång för innehållet:
export const contentTransition = () => {
  let text = document.querySelectorAll(".content");

  gsap.fromTo(
    text,
    {
      x: "-500%",
      opacity: 0,
    },
    {
      duration: 1.5,
      x: "0%",
      opacity: 1,
      ease: "power1.out",
      stagger: 0.5,
    }
  );
};

//skapar funktionalitet för kalendern:
export const calendarFunctionality = () => {
  //hämtar in relevanta element i variabler:
  const calendar = document.getElementById("calendar");
  const selectedDateInput = document.getElementById("selectedDate");
  const feedback = document.getElementById("feedback");
  const chosenDateText = document.getElementById("chosenDate");
  const currentMonthDisplay = document.getElementById("currentMonth");
  const prevMonthBtn = document.getElementById("prevMonth");
  const nextMonthBtn = document.getElementById("nextMonth");

  //eftersom kalendern är statisk och för uppvisningssyfte - kan vi hårdkoda in "bokade datum här"
  //annars kan vi placera hämtade datum från en databas, via en webbtjänst och placera dessa i denna array för samma effekt.
  const bookedDates = ["2024-09-10", "2024-09-12", "2024-09-14"];

  //definierar datum:
  let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  // Uppdaterar månad och år i rubriken
  function updateMonthDisplay() {
    const monthNames = [
      "Januari",
      "Februari",
      "Mars",
      "April",
      "Maj",
      "Juni",
      "Juli",
      "Augusti",
      "September",
      "Oktober",
      "November",
      "December",
    ];
    currentMonthDisplay.textContent = `${monthNames[currentMonth]} ${currentYear}`;
  }

  // Genererar kalendern för en given månad och år
  function generateCalendar(month, year) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let grid = '<div class="calendar-grid">';

    for (let i = 0; i < firstDay; i++) {
      grid += "<div></div>";
    }

    for (let day = 1; day <= daysInMonth; day++) {
      let date = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;
      if (bookedDates.includes(date)) {
        grid += `<div class="booked">${day}</div>`;
      } else {
        grid += `<div class="available" data-date="${date}">${day}</div>`;
      }
    }

    grid += "</div>";
    calendar.innerHTML = grid;

    document.querySelectorAll(".available").forEach((item) => {
      item.addEventListener("click", function () {
        document
          .querySelectorAll(".available")
          .forEach((d) => d.classList.remove("selected"));
        this.classList.add("selected");
        selectedDateInput.value = this.getAttribute("data-date");
        feedback.classList.remove("hidden");
        chosenDateText.textContent = this.getAttribute("data-date");
      });
    });
  }

  // Ändrar månad och genererar ny kalender
  function changeMonth(direction) {
    currentMonth += direction;

    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    } else if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }

    updateMonthDisplay();
    generateCalendar(currentMonth, currentYear);
  }

  // Event listeners för månadsnavigering
  prevMonthBtn.addEventListener("click", () => changeMonth(-1));
  nextMonthBtn.addEventListener("click", () => changeMonth(1));

  // Initiala anrop för att visa aktuell månad och generera kalendern
  updateMonthDisplay();
  generateCalendar(currentMonth, currentYear);
};
