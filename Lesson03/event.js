/*
    Types of Event
    - mouse click
    - keyboard
    - resizing window
    - close window
    - page loading
    - form submission
    - video is being played
    - error

    addEventListener()
    removeEventListner()
    dispatchEvent()

    event Bubbling&Capturing
    click -> capturing 
    bubbling up 
    stopPropagation() => don't use
    stopImmediatePropagation() => don't use

    To only use meaningful target:
    if(event.target !== event.currentTatget)
        return

    event.preventDefault();
    

*/