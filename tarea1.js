document.addEventListener("DOMContentLoaded", () => {
  const resultParagraph = document.getElementById("result");
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", () => {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (isValidDate(day, month, year)) {
      const inputDate = new Date(year, month - 1, day);
      const dayOfWeek = inputDate.getDay();

      const dayNames = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
      const monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

      const dayName = dayNames[dayOfWeek];
      const monthName = monthNames[month - 1];

      let dayType;

      switch (dayOfWeek) {
        case 0:
        case 6:
          dayType = "día hábil";
          break;
        default:
          dayType = "día hábil";
      } 

      resultParagraph.textContent = `El ${dayName} ${day} de ${monthName} del ${year} es un ${dayType}.`;
    } else {
      resultParagraph.textContent = "Registra fecha válida";
    }
  });

  function isValidDate(day, month, year) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      daysInMonth[1] = 29;
    }

    return day >= 1 && day <= daysInMonth[month - 1] && month >= 1 && month <= 12 && year >= 1900 && year <= 2100;
  }
});