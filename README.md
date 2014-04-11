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


Why do I need this?
-------------------

It is usefull for crawlers when there is only a time (23:00) available instead of a date (2014-06-12 23:00). I use it for http://watiseropderadio.nl so I can crawl websites of radio stations and get the correct time of songs in the playlist. When I crawl the page at 01:00 and the page shows 23:00 as airtime of a song I will convert this to a date format to yesterday.
