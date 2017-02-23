(function (template) {
    'use strict';
    const verticalTemplate = require('./vertical-tile.html');
    const horizontalTemplate = require('./horizontal-tile.html');

    var months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var monthAbbs = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];

    class ByuCalendarTile extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
		}
        connectedCallback(){
            // identify which template to use
            this.shadowRoot.innerHTML = this.getAttribute('layout') === 'horizontal' ? horizontalTemplate : verticalTemplate;

            const date = this.shadowRoot.querySelector("#date");
            const dateOb = new Date(date);

            // --- isolate parts of the date
            // get month
            var monthName = months[dateOb.getMonth()];

            // get month abbreviation
            var monthAbb = monthAbbs[dateOb.getMonth()];

            // get day of the month
            var day = dateOb.getDate();

            // get day of week
            var weekday = weekdays[dateOb.getDay()];

            // set those date pieces as values in the tile's divs
            this.shadowRoot.getElementById('month-name').innerHTML = monthName;
            this.shadowRoot.getElementById('month-abb').innerHTML = monthAbb;
            this.shadowRoot.getElementById('day-number').innerHTML = day;
            this.shadowRoot.getElementById('weekday').innerHTML = weekday;

        }
    }

    window.customElements.define('byu-calendar-tile', ByuCalendarTile);
    window.ByuCalendarTile = ByuCalendarTile;

})(/* FUSE */);