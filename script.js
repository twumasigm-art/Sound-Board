// create an array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// For each sound, create a button and a class 'btn', update the text, append to DOM
sounds.forEach((sound) => {
    const btn = document.createElement('button');

    // add a class of 'btn' to the button element
    btn.classList.add('btn');

    //set the button label text to be the same at the string value in the sounds array
    btn.innerText = sound;

    // Add an event listener to this button
    btn.addEventListener('click', () => {
        //Stop all button to the DOM
        stopSounds();
        document.getElementById(sound).play();
    });

    // Add the button to the DOM
    document.getElementById('buttons').appendChild(btn);
});

// Helper function
function stopSounds() {
    sounds.forEach((sound) => {
        const snd = document.getElementById(sound);

        snd.pause();
        snd.currentTime = 0;
    });
}
