

export default class ClockController{
    constructor() {
        console.log('clock controller yay')
        this.startTime()
    }

    startTime() {
        const today = new Date();
        setTimeout(() => {
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();
            m = this.checkTime(m);
            s = this.checkTime(s);
            document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
         }, 1000);
    }
    
     checkTime(i) {
         if (i < 10) {
             i = "0" + i
         }
         return i
    }
    
}