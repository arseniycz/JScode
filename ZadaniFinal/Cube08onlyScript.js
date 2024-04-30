document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})

// Samotny cube na hlavni slozce

function createCube(size) {
    let layer3 = document.querySelector('.layer-3');
    let cube = document.createElement('div');

    cube.classList.add('cube' );
    cube.style.width = size + 'px';
    cube.style.height = size + 'px';
    //cube.style.backgroundImage = url(img/bok1.png);
    document.body.appendChild(cube);
    layer3.appendChild(cube);
    return cube;
}

function createCubeBack(size) {
    let cubeBack = document.createElement('div');
    cubeBack.classList.add('cubeBack' );
    cubeBack.style.width = size + 'px';
    cubeBack.style.height = size + 'px';
    //cube.style.backgroundImage = url(img/bok1.png);
    document.body.appendChild(cubeBack);
    return cubeBack;
}



function colorCube(cube, color) {
    cube.style.backgroundColor = color, + '0.1';
}

function addBorderRadius(cube, radius) {
    cube.style.borderRadius = radius + 'px';
}


let myCube = createCube(220);
colorCube(myCube, '..');
addBorderRadius(myCube, 10);
myCube.classList.add('left');

// let myCubeBack = createCubeBack(240);
// colorCube(myCubeBack, '..');
// addBorderRadius(myCubeBack, 10);
// myCubeBack.classList.add('left');

let myCube2 = createCube(220);
colorCube(myCube2, '..');
addBorderRadius(myCube2, 15);
myCube2.classList.add('right');


function makeCube(element) {

    let clickCount = element.getAttribute("clickCount");
    if(typeof(clickCount) === undefined)
    {
        clickCount = 0;
    }

    // Получаем случайные значения RGB для цвета
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Устанавливаем цвет фона выбранного элемента
    element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    element.style.border = `5px solid rgb(${green}, ${red}, ${blue})`;
    element.style.background = '110%'; 

    
    clickCount++;

    element.setAttribute("clickCount", clickCount);

   
    if (clickCount === 3) {
        element.style.backgroundColor = 'black';
        clickCount = 0;
        element.setAttribute("clickCount", clickCount);
        const element2 = document.querySelector('.layer-3 img');
        element2.style.height = '120vh';
        const element3 = document.querySelector('.colorMix');
        element3.style.opacity = '100%';
        element.style.display = 'none';
        
    }
}


// function colorLeftCube(changer) {

//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const changer = document.querySelector('.left');
//     changer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
// }
