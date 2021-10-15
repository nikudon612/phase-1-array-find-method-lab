// function superbowlWin(record) {
//   let yearWin = record.find((element) => element.result === "W");
// //   if (yearWin === undefined) {
// //     return yearWin;
// //   }

//   return yearWin.year;
// }

// superbowlWin(record);

function superbowlWin(record) {
  let yearWin = record.find((element) => element.result === "W");
  return yearWin ? yearWin.year : undefined;
}
