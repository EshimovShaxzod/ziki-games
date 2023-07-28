let mainBox = document.getElementById('mainBox');
let additionalBox = document.getElementById('additionalBox');
let demo = document.getElementById('demo');
let addImg = document.getElementById('addImg');
let changedImg = document.getElementById('changedImg');
let clickImg = document.getElementById('clickImg');
let variableImg = document.getElementById('variableImg');
let bottomImg = document.getElementById('bottomImg');
let btn = document.getElementById('btn');
let btnRules = document.getElementById('btnRules');
let rulesBox = document.getElementById('rulesBox');
let x = document.getElementById('x');
let index = document.getElementById('index');




clickImg.addEventListener('click', () => {
    mainBox.style.display = 'none';
    additionalBox.style.display = 'flex';
    demo.style.color = 'white';
    changedImg.src ="./img/Group 8 Copy 2 (1).png";

    let random = (Math.floor(Math.random()*3));
    console.log(random);

    if(random === 0){
        addImg.src ="./img/Group 8 Copy 2 (1).png";
        demo.innerText = 'DURRANG';
    }else if(random === 1){
        addImg.src ="./img/Group 8 Copy.png";
        demo.innerText = 'YOU WIN';
        index.textContent++;
    }else if(random === 2){
        addImg.src ="./img/Group 8.png";
        demo.innerHTML = 'YOU LOST';
        demo.style.color = 'red';
    }
});

variableImg.addEventListener('click', () => {
    mainBox.style.display = 'none';
    additionalBox.style.display = 'flex';
    changedImg.src="./img/Group 8 Copy.png";
    demo.style.color = 'white';
    let random = (Math.floor(Math.random()*3));

    if(random === 0){
        addImg.src ="./img/Group 8 Copy.png";
        demo.innerHTML = 'DURRANG';
    }else if(random === 1){
        addImg.src = "./img/Group 8 Copy 2 (1).png";
        demo.innerHTML = 'YOU LOST';
        demo.style.color = 'red';
    }else if(random === 2){
        addImg.src = "./img/Group 8.png";
        demo.innerHTML = 'YOU WIN';
        index.textContent++;
    }
});

bottomImg.addEventListener('click', () => {
    mainBox.style.display = 'none';
    additionalBox.style.display = 'flex';
    changedImg.src="./img/Group 8.png";
    demo.style.color = 'white';
    let random = (Math.floor(Math.random()*3));

    if(random === 0){
        addImg.src = "./img/Group 8.png";
        demo.innerHTML = 'DURRANG';
    }else if(random ===1){
        addImg.src ="./img/Group 8 Copy 2 (1).png";
        demo.innerHTML = 'YOU WIN';
        index.textContent++;
    }else if(random === 2){
        addImg.src = "./img/Group 8 Copy.png";
        demo.innerHTML = 'YOU LOST';
        demo.style.color = 'red';
    }
});

btn.addEventListener('click', () => {
    mainBox.style.display = 'block';
    additionalBox.style.display = 'none';
});


btnRules.addEventListener('click', () => {
    rulesBox.style.display = 'block';
    rulesBox.classList.add('active')
    mainBox.style.display = 'none';
    additionalBox.style.display = 'none';
});

x.addEventListener('click', () => {
    rulesBox.style.display = 'none';
    mainBox.style.display = 'block';
    additionalBox.style.display = 'none';
});
