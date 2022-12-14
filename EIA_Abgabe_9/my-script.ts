namespace a09 {

    const sound1: HTMLAudioElement = new Audio('./DrumPad/A.mp3');
    const sound2: HTMLAudioElement = new Audio('./DrumPad/C.mp3');
    const sound3: HTMLAudioElement = new Audio('./DrumPad/F.mp3');
    const sound4: HTMLAudioElement = new Audio('./DrumPad/G.mp3');
    const sound5: HTMLAudioElement = new Audio('./DrumPad/hihat.mp3');
    const sound6: HTMLAudioElement = new Audio('./DrumPad/kick.mp3');
    const sound7: HTMLAudioElement = new Audio('./DrumPad/laugh-1.mp3');
    const sound8: HTMLAudioElement = new Audio('./DrumPad/laugh-2.mp3');
    const sound9: HTMLAudioElement = new Audio('./DrumPad/snare.mp3');

    let beat: HTMLAudioElement[] = [sound5, sound6, sound9];
    const allSounds: HTMLAudioElement[] = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9]

    const pad1: HTMLElement = document.querySelector('.pad-1');
    const pad2: HTMLElement = document.querySelector('.pad-2');
    const pad3: HTMLElement = document.querySelector('.pad-3');
    const pad4: HTMLElement = document.querySelector('.pad-4');
    const pad5: HTMLElement = document.querySelector('.pad-5');
    const pad6: HTMLElement = document.querySelector('.pad-6');
    const pad7: HTMLElement = document.querySelector('.pad-7');
    const pad8: HTMLElement = document.querySelector('.pad-8');
    const pad9: HTMLElement = document.querySelector('.pad-9');

    const playButton: HTMLElement = document.querySelector('#playButton');
    const remixButton: HTMLElement = document.querySelector('#remixButton')


    let playIcon: HTMLElement = document.querySelector('#playIcon');
    let stopIcon: HTMLElement = document.querySelector('#stopIcon');

    let playing: boolean = false

    let intervallId: number;

    function playSample(sound: HTMLAudioElement) {
        sound.play();
    }

    pad1.addEventListener('click', function () {
        playSample(sound1)
    });
    pad2.addEventListener('click', function () {
        playSample(sound2)
    });
    pad3.addEventListener('click', function () {
        playSample(sound3)
    });
    pad4.addEventListener('click', function () {
        playSample(sound4)
    });
    pad5.addEventListener('click', function () {
        playSample(sound5)
    });
    pad6.addEventListener('click', function () {
        playSample(sound6)
    });
    pad7.addEventListener('click', function () {
        playSample(sound7)
    });
    pad8.addEventListener('click', function () {
        playSample(sound8)
    });
    pad9.addEventListener('click', function () {
        playSample(sound9)
    });

    playButton.addEventListener('click', function () {

        if (playing === true) {
            playing = false
            playIcon.classList.remove('hidden')
            stopIcon.classList.add('hidden')
            clearInterval(intervallId)

        } else {
            playing = true
            playIcon.classList.add('hidden')
            stopIcon.classList.remove('hidden')

            let i = 0
            intervallId = setInterval(function () {
                playSample(beat[i])
                i++;
                if (i === 3) {
                    i = 0;
                }
            }, 1000);
        }
    });

    remixButton.addEventListener('click', function () {
        let remix: HTMLAudioElement[] = []
        for (let index = 0; index < 3; index++) {
            const randomNumber: Number = Math.round(Math.random()*8)     
            remix.push(allSounds[randomNumber.toString()])
        }
        beat = remix
    });






















}