Get date of time before midnight
================================

Convert a time string of yesterday (23:20) to a date format in JavaScript. So you can convert times like 23:00, 21:02 to yesterday and times like 0:10, 3:00 to today depending on the current time.

```js
// assuming it is now 0:00 
getDateOfTimeBeforeMidnight('23:15'); // returns date object of yesterday
getDateOfTimeBeforeMidnight('0:10');  // returns date object of today

// assuming it is now 02:00
getDateOfTimeBeforeMidnight('23:15', 6); // returns date object of yesterday
getDateOfTimeBeforeMidnight('05:00', 6); // returns date object of today
getDateOfTimeBeforeMidnight('05:00', 1); // returns date object of yesterday

// assuming it is now 15:00
getDateOfTimeBeforeMidnight('23:15'); // returns date object of yesterday
getDateOfTimeBeforeMidnight('16:00'); // returns date object of today
```
