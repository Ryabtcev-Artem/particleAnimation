const fieldCell = document.getElementById('gameField');
const wrap = gameField.querySelector('.wrap');
fieldCell.addEventListener('pointerdown', function(event) {
    wrap.innerText = 1
    wrap.style.display = 'flex'
    createParticle();
});

function createParticle() {  
    const particle = document.createElement('div');
    
    particle.className = 'particle';
    wrap.appendChild(particle)
    let randDeg30 = (Math.random()-0.5)*80
    let randX30 = (Math.random()-0.5)*150
    let randY30 = (Math.random()-0.5)*150
    let randDeg70 = randDeg30*1.6
    let randX70 = randX30*2.4
    let randY70 = randY30*1.6
    let randDeg100 = randDeg70*1.6
    let randX100 = randX70*1.4
    let randY100 = randY70*1.2
    particle.style.setProperty('--randDeg30',`${randDeg30}deg`)
    particle.style.setProperty('--randX30',`${randX30}px`)
    particle.style.setProperty('--randY30',`${randY30}px`)
    particle.style.setProperty('--randDeg70',`${randDeg70}deg`)
    particle.style.setProperty('--randX70',`${randX70}px`)
    particle.style.setProperty('--randY70',`${randY70}px`)
    particle.style.setProperty('--randDeg100',`${randDeg100}deg`)
    particle.style.setProperty('--randX100',`${randX100}px`)
    particle.style.setProperty('--randY100',`${randY100}px`)
    
}