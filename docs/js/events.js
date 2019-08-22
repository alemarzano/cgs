'use strict'


function buscarLocations() {
    var locations = document.querySelectorAll('.list-inline');
    var menu = document.querySelector('#locations');
    var selected = menu.options[menu.selectedIndex].value;

    for (var i = 0; i <= locations.length; i++) {
        if (locations[i] != undefined) {
            var option = locations[i];
            option.classList.remove('visible');
            if (option.id == selected) {
                option.classList.add('visible');
            }
        }
    }
}
