import { format, parseISO } from "date-fns";

export function formatShowTime(dateString: string) {
  const date = parseISO(dateString);
  return format(date, "h:mm a");
}

export function formatShowDate(dateString: string) {
  const date = parseISO(dateString);
  let formattedDate = format(date, "MMM dd");
  const formattedDay = format(date, "EEE");

  return `${formattedDate} ${formattedDay}`;
}

// Get the date in the format of "June 26, 2025"
export function getDate(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Get the time in the format of "12:00 PM"
export function getTime(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

// Get Day of the Week
export function getDayOfWeek(date: string, format: "short" | "long") {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", { weekday: format });
}

// Get yesterday
export function getYesterday() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  return yesterday;
}
