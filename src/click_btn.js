const root = document.getElementById('root');
let clickCount =0;

document.getElementById('button')
    .addEventListener('click', () => {
        setTimeout(() => {
            const btn = document.createElement('button');
            clickCount += 1;
            btn.innerHTML = `Click ${clickCount}`;
            root.appendChild(btn);
        }, 1000);
    });

