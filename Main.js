(function() {
    'use strict';

    // Loop every 1 second until Paletools finishes loading on screen
    const checkPaletools = setInterval(() => {
        const paletoolsMenu = document.querySelector('.paletools-menu, .pale-tools-container, #pt-settings-menu, [id*="pale"]');
        
        if (paletoolsMenu) {
            clearInterval(checkPaletools);
            injectMyCustomMenu(paletoolsMenu);
        }
    }, 1000);

    function injectMyCustomMenu(menuContainer) {
        // 1. Style Divider
        const divider = document.createElement('div');
        divider.style.cssText = 'border-top: 2px dashed #00ffcc; margin: 15px 0 10px 0; padding-top: 10px; color: #00ffcc; font-weight: bold; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;';
        divider.innerText = '🛠️ My Custom Tools';
        menuContainer.appendChild(divider);

        // 2. Custom Button Template
        const customBtn = document.createElement('button');
        customBtn.innerText = '🤖 Run Custom AI Logic';
        customBtn.style.cssText = 'width: 100%; padding: 12px; background: #222; color: #fff; border: 1px solid #00ffcc; border-radius: 6px; font-weight: bold; margin-bottom: 8px; cursor: pointer; text-align: center;';
        
        customBtn.onclick = function() {
            alert('Your custom AI logic will execute here inside the Paletools layout!');
            // Your future custom features go here
        };

        menuContainer.appendChild(customBtn);
    }
})();
