const btn = document.querySelectorAll(".btn");

const soundOff = () =>{
    btn.forEach((button) =>{
        const sound = document.getElementById(button.innerText);
        sound.pause();
        sound.currentTime = 0;
    })
}

btn.forEach((button) => {
    
    button.addEventListener('click', () => {
        soundOff();
        document.getElementById(button.innerText).play();
    })
})

