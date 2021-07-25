
   function realtimeClock() {
    
        var clock = new Date()
        
        var hours = clock.getHours()
        var minutes = clock.getMinutes()
        var seconds = clock.getSeconds()

        var amPm = (hours < 12) ? "AM" : "PM"
        
        hours = (hours > 12) ? hours - 12 : hours

        hours = ("0" + hours).slice(-2)
        minutes = ("0" + minutes).slice(-2)
        seconds = ("0" + seconds).slice(-2)

        document.getElementById('clock').innerHTML =
            hours + "  :  " + minutes + "  :  " + seconds + " " + amPm
        setTimeout(realtimeClock, 500)
        
}
export default class ClockController{
    constructor() {
      
        realtimeClock()
    }

    
}