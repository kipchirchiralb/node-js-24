const dayjsModule = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjsModule.extend(relativeTime);

const pastDate = dayjsModule("2024-08-08 10:50:00"); // parsing/describing the date using dayjs package 

// console.log(PastDate.day());
// console.log(PastDate.format("dddd DD YYYY"));
console.log(pastDate.fromNow());
