import moment from "moment";

const list = [
  {
    date: "2018-09-09",
    amount: 49,
  },
  {
    date: "2018-09-12",
    amount: 94,
  },
  {
    date: "2017-12-20",
    amount: 46,
  },
  {
    date: "2017-07-06",
    amount: 94,
  },
  {
    date: "2018-11-16",
    amount: 70,
  },
  {
    date: "2017-10-17",
    amount: 22,
  },
  {
    date: "2017-07-17",
    amount: 27,
  },
  {
    date: "2017-10-15",
    amount: 33,
  },
  {
    date: "2018-09-20",
    amount: 96,
  },
  {
    date: "2017-06-16",
    amount: 53,
  },
  {
    date: "2017-09-01",
    amount: 96,
  },
  {
    date: "2018-09-13",
    amount: 62,
  },
  {
    date: "2017-12-16",
    amount: 23,
  },
  {
    date: "2017-07-15",
    amount: 26,
  },
  {
    date: "2018-03-07",
    amount: 91,
  },
  {
    date: "2017-09-17",
    amount: 64,
  },
  {
    date: "2018-12-11",
    amount: 23,
  },
  {
    date: "2017-12-13",
    amount: 23,
  },
  {
    date: "2018-01-06",
    amount: 46,
  },
  {
    date: "2018-10-12",
    amount: 11,
  },
  {
    date: "2017-09-05",
    amount: 12,
  },
  {
    date: "2017-06-11",
    amount: 61,
  },
  {
    date: "2017-09-19",
    amount: 80,
  },
  {
    date: "2018-04-04",
    amount: 11,
  },
  {
    date: "2017-03-19",
    amount: 22,
  },
  {
    date: "2018-03-07",
    amount: 40,
  },
  {
    date: "2018-08-06",
    amount: 75,
  },
  {
    date: "2017-07-18",
    amount: 98,
  },
  {
    date: "2018-11-02",
    amount: 46,
  },
  {
    date: "2018-02-12",
    amount: 86,
  },
  {
    date: "2018-12-05",
    amount: 56,
  },
  {
    date: "2018-03-10",
    amount: 63,
  },
  {
    date: "2018-09-06",
    amount: 89,
  },
  {
    date: "2017-12-10",
    amount: 90,
  },
  {
    date: "2017-11-09",
    amount: 90,
  },
  {
    date: "2018-08-05",
    amount: 58,
  },
  {
    date: "2017-09-20",
    amount: 69,
  },
  {
    date: "2017-10-14",
    amount: 97,
  },
  {
    date: "2018-10-11",
    amount: 66,
  },
  {
    date: "2017-07-09",
    amount: 10,
  },
  {
    date: "2018-03-03",
    amount: 96,
  },
  {
    date: "2017-07-04",
    amount: 67,
  },
  {
    date: "2017-06-04",
    amount: 94,
  },
  {
    date: "2017-01-02",
    amount: 80,
  },
  {
    date: "2017-01-20",
    amount: 37,
  },
  {
    date: "2017-05-12",
    amount: 89,
  },
  {
    date: "2017-01-12",
    amount: 87,
  },
  {
    date: "2018-11-18",
    amount: 15,
  },
  {
    date: "2017-08-20",
    amount: 24,
  },
  {
    date: "2017-02-07",
    amount: 46,
  },
  {
    date: "2017-06-07",
    amount: 47,
  },
  {
    date: "2017-09-14",
    amount: 62,
  },
  {
    date: "2018-12-13",
    amount: 83,
  },
  {
    date: "2017-01-18",
    amount: 48,
  },
  {
    date: "2018-08-15",
    amount: 68,
  },
  {
    date: "2018-09-12",
    amount: 41,
  },
  {
    date: "2017-06-02",
    amount: 26,
  },
  {
    date: "2018-12-07",
    amount: 74,
  },
  {
    date: "2017-06-06",
    amount: 100,
  },
  {
    date: "2018-06-01",
    amount: 63,
  },
  {
    date: "2018-10-17",
    amount: 23,
  },
  {
    date: "2017-09-05",
    amount: 95,
  },
  {
    date: "2018-10-06",
    amount: 83,
  },
  {
    date: "2018-07-03",
    amount: 30,
  },
  {
    date: "2018-08-14",
    amount: 79,
  },
  {
    date: "2017-05-05",
    amount: 58,
  },
  {
    date: "2017-04-19",
    amount: 75,
  },
  {
    date: "2017-12-07",
    amount: 24,
  },
  {
    date: "2017-03-01",
    amount: 18,
  },
  {
    date: "2017-01-15",
    amount: 40,
  },
  {
    date: "2017-09-02",
    amount: 71,
  },
  {
    date: "2017-05-11",
    amount: 73,
  },
  {
    date: "2018-10-14",
    amount: 37,
  },
  {
    date: "2018-01-20",
    amount: 65,
  },
  {
    date: "2018-10-08",
    amount: 48,
  },
  {
    date: "2017-07-04",
    amount: 81,
  },
  {
    date: "2017-03-13",
    amount: 10,
  },
  {
    date: "2017-08-08",
    amount: 36,
  },
  {
    date: "2018-12-08",
    amount: 28,
  },
  {
    date: "2018-03-16",
    amount: 70,
  },
  {
    date: "2017-09-16",
    amount: 15,
  },
  {
    date: "2018-03-14",
    amount: 27,
  },
  {
    date: "2017-09-10",
    amount: 13,
  },
  {
    date: "2018-03-15",
    amount: 28,
  },
  {
    date: "2018-08-03",
    amount: 38,
  },
  {
    date: "2017-11-07",
    amount: 86,
  },
  {
    date: "2018-08-14",
    amount: 63,
  },
  {
    date: "2018-06-05",
    amount: 73,
  },
  {
    date: "2017-09-17",
    amount: 33,
  },
  {
    date: "2018-07-03",
    amount: 78,
  },
  {
    date: "2018-06-16",
    amount: 33,
  },
  {
    date: "2018-08-20",
    amount: 66,
  },
  {
    date: "2017-12-17",
    amount: 84,
  },
  {
    date: "2018-06-04",
    amount: 98,
  },
  {
    date: "2018-06-07",
    amount: 43,
  },
  {
    date: "2018-06-19",
    amount: 91,
  },
  {
    date: "2018-01-03",
    amount: 19,
  },
  {
    date: "2018-10-10",
    amount: 97,
  },
  {
    date: "2018-08-15",
    amount: 80,
  },
  {
    date: "2017-10-12",
    amount: 62,
  },
];

// Сортировка по годам
let tempYear = {};
let yearList = [];
for (const item of list) {
  const key = item.date?.slice(0, 4);
  if (typeof tempYear[key] === "undefined") {
    tempYear[key] = item.amount;
  } else {
    tempYear[key] = tempYear[key] + item.amount;
  }
}

for (let [year, amount] of Object.entries(tempYear)) {
  yearList.push({ year: +year, amount: amount });
}
console.log(yearList);

// Сортировка по месяцам
let tempMonth = {};
let monthList = [];
for (const item of list) {
  const key = item.date?.slice(5, 7);
  if (typeof tempMonth[key] === "undefined") {
    tempMonth[key] = item.amount;
  } else {
    tempMonth[key] = tempMonth[key] + item.amount;
  }
}

for (let [month, amount] of Object.entries(tempMonth)) {
  monthList.push({ month: month, amount: amount });
}

console.log(monthList.sort((x, y) => y.month - x.month));
