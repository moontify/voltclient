// Interactive background
const boxesContainer = document.getElementById('boxes');
const rows = 150;
const cols = 100;
const colors = ['#90cdf4', '#fbb6ce', '#9ae6b4', '#faf089', '#feb2b2', '#d6bcfa', '#90cdf4', '#7f9cf5', '#b794f4'];

function createBoxes() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const box = document.createElement('div');
            box.className = 'box';
            box.style.left = `${j * 64}px`;
            box.style.top = `${i * 32}px`;

            box.addEventListener('mouseenter', () => {
                const color = colors[Math.floor(Math.random() * colors.length)];
                box.style.backgroundColor = color;
                box.style.transition = 'background-color 0s';
            });

            box.addEventListener('mouseleave', () => {
                box.style.transition = 'background-color 0.5s';
                box.style.backgroundColor = '';
            });

            boxesContainer.appendChild(box);
        }
    }
}

createBoxes();

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    boxesContainer.style.transform = `translate(-40%, -60%) skew(-${48 + x}deg, ${14 + y}deg) scale(0.675) rotate(0deg)`;
});

// Portfolio functionality
function split() {
    let words = $('h2').text().split('');
    for (let i in words) {
        words[i] = '<span>' + words[i] + '</span>';
    }
    let text = words.join('');
    $('h2').html(text);
}

function showText() {
    split();
    let inSpeed = 10;
    let count = 0;
    let length = $('h2 span').length;
    let endTime = length * inSpeed + 200;
    $('h2 span').each(function() {
        $(this).delay(1300 + inSpeed * count).animate({ opacity: '1' }, 200);
        count++;
    });
}

$(document).ready(function() {
    showText();
});И