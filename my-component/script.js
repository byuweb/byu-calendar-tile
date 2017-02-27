'use strict';
// these only need to be created or established once, so they are outside the class
const verticalTemplate = require('./vertical-tile.html');
const horizontalTemplate = require('./horizontal-tile.html');

var months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var monthAbbs = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];

class ByuCalendarTile extends HTMLElement {

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }
    get layout() {
        return this.getAttribute('layout');
    }
    set layout(value) {
        if(value){
            this.setAttribute('layout', value);
        } else {
            this.removeAttribute('layout');
        }
    }
    get date(){
        var dates = this.shadowRoot.querySelector("#date").assignedNodes();
        if(dates.length){
            var date = this.shadowRoot.querySelector("#date").assignedNodes()[0];
            console.log(date.innerText);
            return new Date(date.innerText.trim());
        }
        else {
            return null;
        }
    }
    connectedCallback(){
        // identify which template to use
        this._shadowRoot.innerHTML = this.layout === 'horizontal' ? horizontalTemplate : verticalTemplate;

        var dateOb = this.date;
        console.log(dateOb);
        // --- isolate parts of the date
        // get month
        var monthName = months[dateOb.getMonth()];
        console.log(monthName);
        // get month abbreviation
        var monthAbb = monthAbbs[dateOb.getMonth()];

        // get day of the month
        var day = dateOb.getDate();

        // get day of week
        var weekday = weekdays[dateOb.getDay()];

        // set those date pieces as values in the tile's divs
        if(this.layout == 'horizontal') {
            this._shadowRoot.getElementById('month-abb').innerHTML = monthAbb;
        } else {
            this._shadowRoot.getElementById('month-name').innerHTML = monthName;
            this._shadowRoot.getElementById('weekday').innerHTML = weekday;
        }
        this._shadowRoot.getElementById('day-number').innerHTML = day;

    }
}

window.customElements.define('byu-calendar-tile', ByuCalendarTile);
window.ByuCalendarTile = ByuCalendarTile;

