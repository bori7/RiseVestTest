import axios from "axios";
// import * as SecureStore from "expo-secure-store";

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

// export async function secureSave(key: string, value: any) {
//   // console.log('Value: ', value);
//   if (typeof value !== "string") {
//     value = JSON.stringify(value);
//   }
//   // console.log('Value1: ', value);
//   await SecureStore.setItemAsync(key, value);
// }

// export async function secureGet(key: string, funcTodo: Function) {
//   const result = await SecureStore.getItemAsync(key);

//   // if (typeof result == 'string') {
//   //   result = JSON.parse(result);
//   // }

//   if (funcTodo != null) {
//     funcTodo(result);
//   } else if (result) {
//     // console.log(`🔐 Here's your value 🔐 \n${result}`);
//   } else {
//     // console.log('No values stored under that key.');
//   }
// }
