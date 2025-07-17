// arXiv HTML UI Toggle Extension
// Hides specified UI elements and adds a toggle button

let uiEnabled = false;
let toggleButton = null;

// Function to hide/show UI elements
function toggleUIElements() {
    const elementsToHide = [
        'header.desktop_header',
        'a[href*="#myForm"][onclick*="bugReportState.setInitiateWay"]',
        'button.btn.btn-primary.hover-rp-button#openForm',
        'a.ar5iv-footer-button[href*="accessible_HTML.html"]'
    ];

    elementsToHide.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (uiEnabled) {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        });
    });
}

// Function to create the toggle button
function createToggleButton() {
    if (toggleButton) return; // Don't create multiple buttons

    toggleButton = document.createElement('button');
    toggleButton.id = 'arxiv-ui-toggle';
    toggleButton.textContent = 'UI ENABLED';
    toggleButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10000;
        background: #b31b1b;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        opacity: 0;
        pointer-events: none;
        font-family: Arial, sans-serif;
    `;

    // Add hover effects
    toggleButton.addEventListener('mouseenter', () => {
        toggleButton.style.background = '#d32f2f';
        toggleButton.style.transform = 'scale(1.05)';
    });

    toggleButton.addEventListener('mouseleave', () => {
        toggleButton.style.background = '#b31b1b';
        toggleButton.style.transform = 'scale(1)';
    });

    // Add click handler
    toggleButton.addEventListener('click', () => {
        uiEnabled = !uiEnabled;
        toggleButton.textContent = uiEnabled ? 'UI ENABLED' : 'UI DISABLED';
        toggleButton.style.background = uiEnabled ? '#4caf50' : '#b31b1b';
        toggleUIElements();
    });

    document.body.appendChild(toggleButton);
}

// Function to handle mouse movement near bottom-right corner
function handleMouseMove(e) {
    if (!toggleButton) return;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const threshold = 100; // pixels from bottom-right corner

    const nearBottomRight = (
        e.clientX > windowWidth - threshold &&
        e.clientY > windowHeight - threshold
    );

    if (nearBottomRight) {
        toggleButton.style.opacity = '1';
        toggleButton.style.pointerEvents = 'auto';
    } else {
        toggleButton.style.opacity = '0';
        toggleButton.style.pointerEvents = 'none';
    }
}

// Function to initialize the extension
function initializeExtension() {
    try {
        // Hide elements by default
        toggleUIElements();
        
        // Create toggle button
        createToggleButton();
        
        // Add mouse move listener
        document.addEventListener('mousemove', handleMouseMove);
        
        console.log('arXiv HTML UI Toggle extension initialized');
    } catch (error) {
        console.error('Error initializing arXiv HTML UI Toggle extension:', error);
    }
}

// Function to run on DOM changes
function handleDOMChanges() {
    if (!uiEnabled) {
        toggleUIElements();
    }
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeExtension);
} else {
    initializeExtension();
}

// Watch for dynamic content changes
const observer = new MutationObserver(() => {
    handleDOMChanges();
});

observer.observe(document.body, { 
    childList: true, 
    subtree: true 
});

// Clean up on page unload
window.addEventListener('beforeunload', () => {
    if (observer) {
        observer.disconnect();
    }
    document.removeEventListener('mousemove', handleMouseMove);
});