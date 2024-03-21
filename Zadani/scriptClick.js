function changeColor(element) {

    let clickCount = element.getAttribute("clickCount");
    if(typeof(clickCount) === undefined)
    {
        clickCount = 0;
    }

  
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    
    element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    element.style.border = `5px solid rgb(${green}, ${red}, ${blue})`;


    
    clickCount++;

    element.setAttribute("clickCount", clickCount);

   
    if (clickCount === 5) {
        element.style.backgroundColor = 'black';
        clickCount = 0;
        element.setAttribute("clickCount", clickCount);
        element.style.transform = 'rotateY(360deg)'; // Поворачиваем карточку на 180 градусов
    }
}
