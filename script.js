function getDateOfTimeBeforeMidnight(timeString, offsetHours) {

    if (typeof offsetHours !== 'number') {
        var offsetHours = 6;
    }
    
    time = timeString.split(':');
    
    if (time.length >= 2) {
        var hours     = time[0];
        var minutes   = time[1];
        var today     = new Date();
        var yesterday = new Date(new Date().setDate(today.getDate() - 1));
        
        if (hours > (today.getHours() + offsetHours)) {
            var date = yesterday;
        }
        else {
            var date = today;
        }
        
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(0);
        
        if (time[2]) {
            date.setSeconds(time[2]);
        }
        
        return new Date(date);
    }
    
    return false;
}
