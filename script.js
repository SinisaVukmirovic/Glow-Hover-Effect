// looping of each card with a for of loop
for (const card of document.querySelectorAll('.card')) {
    card.onmousemove = e => handleOnMouseMove(e);
}

// updating radial gradiants origin position
const handleOnMouseMove = e => {
    // cards position 
    const { currentTarget: target } = e;
    // to get bounding client rect 
    // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
    // calculating the position of our mouse relative to each card
    const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    // with cordinates, we can use them to set custom properties for each one
    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);

}