import axios from "axios";

export const apiCallInit = (otherHeaders: any) =>
  axios.create({
    baseURL: "",
    headers: {
      "Content-Type": "application/json",
      ...otherHeaders,
    },
    // timeout: 5000,
    timeoutErrorMessage: "RISE API Time out Exceeded",
  });

export const formatDate = (date: Date) => {
  const day = date.getDate();
  // console.log(day);
  const month = monthName[date.getMonth()];

  const year = date.getFullYear();
  return `${day}-${month.substring(0, 3)}-${year}`;
};

export const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
