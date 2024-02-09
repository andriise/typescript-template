/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  Sun = "Sunday",
  Mon = "Monday",
  Tue = "Tuesday",
  Wen = "Wednesday",
  Thu = "Thursday",
  Fri = "Friday",
  Sat = "Saturday",
}

function isWeekend(day: Week): boolean {
  switch (day) {
    case "Saturday":
      return true;
    case "Sunday":
      return true;

    default:
      return false;
  }
  
}
