const night = document.querySelector('.night');
const numStars = 20;

for (let i = 1; i <= numStars; i++) {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting_star';
    
    const topOffset = Math.random() * 400 - 200;  // Random value between -200 and 200
    const leftOffset = Math.random() * 400 - 200; // Random value between -200 and 200
    const delay = Math.random() * 10000;          // Random delay between 0 and 10000 ms
    
    shootingStar.style.top = `calc(50% + ${topOffset}px)`;
    shootingStar.style.left = `calc(50% + ${leftOffset}px)`;
    shootingStar.style.animationDelay = `${delay}ms`;
    
    // Sync the before and after pseudo-elements' animation delay
    shootingStar.style.setProperty('--star-delay', `${delay}ms`);
    
    night.appendChild(shootingStar);
}
