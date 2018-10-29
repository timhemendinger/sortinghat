$(function() {

    playAudio('audio/hp-theme.mp3', true);

    var randomNum = 0;
    var house = '';

    $('#getHouseBtn').on('click', () => {
        randomNum = genRandomInt(4);
        house = getHouse(randomNum);
        console.log(house);
    });
    
});

function getHouse(randomNum) {
    switch (randomNum) {
        case 0:
            return 'Gryffindor';
            break;

        case 1:
            return 'Hufflepuff';
            break;

        case 2:
            return 'Ravenclaw';
            break;

        case 3:
            return 'Slytherin';
            break;
    }
}

function genRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function playAudio (audioPath, loop) {
    if (audio) {
        audio.stop();
    }
    
    var audio = new Audio(audioPath);
    audio.loop = loop;
    audio.play();
}