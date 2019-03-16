
    const p = document.getElementsByTagName('p');
    const h = document.getElementsByTagName('h2');
    let i = 0;
    const changeColor = function() {
        let colors = ['black', 'red', 'cyan', 'orangered', 'yellow', 'blue'];
        i = Math.floor(Math.random() * colors.length)        
        for(let o = 0; o < p.length; o++) {
            p[o].style.color = colors[i];
        }
    }
    setInterval(changeColor, 1000);

