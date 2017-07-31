'use strict';
const util = require('byu-web-component-utils');
// these only need to be created or established once, so they are outside the class
const verticalTemplate = require('./vertical-tile.html');
const horizontalTemplate = require('./horizontal-tile.html');

var months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var monthAbbs = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];

class ByuCalendarTile extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
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
        var dates = this.shadowRoot.querySelector("#date-val").assignedNodes();
        if(dates.length){
            var date = this.shadowRoot.querySelector("#date-val").assignedNodes()[0];
            console.log(date.innerText);
            return new Date(date.innerText.trim());
        }
        else {
            return null;
        }
    }
    connectedCallback() {
        // identify which template to use
        let template = this.layout === 'horizontal' ? horizontalTemplate : verticalTemplate;
        util.applyTemplate(this, 'byu-calendar-tile', template, () => {

            var dateOb = this.date;
            console.log(dateOb);
            // --- isolate parts of the date
            // get month
            var monthName = months[dateOb.getUTCMonth()];
            console.log(monthName);
            // get month abbreviation
            var monthAbb = monthAbbs[dateOb.getUTCMonth()];

            // get day of the month
            var day = dateOb.getUTCDate();

            // get day of week
            var weekday = weekdays[dateOb.getUTCDay()];

            // set those date pieces as values in the tile's divs
            if (this.layout == 'horizontal') {
                this.shadowRoot.querySelector('#month-abb').innerHTML = monthAbb;
            } else {
                this.shadowRoot.querySelector('#month-name').innerHTML = monthName;
                this.shadowRoot.querySelector('#weekday').innerHTML = weekday;
            }
            this.shadowRoot.querySelector('#day-number').innerHTML = day;

        });
    }
}

window.customElements.define('byu-calendar-tile', ByuCalendarTile);
window.ByuCalendarTile = ByuCalendarTile;

