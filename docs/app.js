const body = document.body;
const handleSubmit = document.getElementById('submitFormBtn');

handleSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let modal = document.createElement('div', 'succesSubscription');
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgb(54 36 63 / 90%)';
    modal.style.zIndex = 2000;
    modal.style.position = 'absolute';
    modal.style.top = '398vh';
    modal.style.left = '0'
    modal.style.display = 'flex'
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';

    let textContainer = document.createElement('div');
    textContainer.style.width = '50%';
    textContainer.style.height = '20%';
    textContainer.style.fontSize = '52px';
    textContainer.style.fontWeight = 'bold';
    textContainer.style.textAlign = 'center'
    textContainer.style.color = 'yellow';
    textContainer.innerText = 'Checking email validation';

    modal.appendChild(textContainer)
    setTimeout(() => {
        body.appendChild(modal)
    }, 500);
    setTimeout(() => {
        textContainer.innerText = 'Thanks, You are suscribed now !'; 
        setTimeout(() => {
            modal.remove(); 
        }, 1000)  
    }, 1500);
    

    
});