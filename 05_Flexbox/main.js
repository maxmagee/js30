'use strict';

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    panels.forEach(panel => {
        if (this === panel) { this.classList.toggle('open'); }
        else { panel.classList.remove('open'); }
    });
    
}

function toggleActive(e) {
    // Apparently some browsers use 'flex' and others use 'flex-grow'
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }    
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));