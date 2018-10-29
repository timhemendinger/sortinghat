$(function() {

    $('.crest-image').hide();

    playAudio('audio/hp-theme.mp3', true);

    var randomNum = 0;
    var house = '';

    $('#getHouseBtn').on('click', () => {
        $('.intro-screen').fadeOut('slow', () => {
            $('.house-result').fadeIn('slow');
        });

        randomNum = genRandomInt(4);
        house = getHouse(randomNum);

    });
    
});

function generateHouse(house) {
    
    capitalizedName = house.charAt(0).toUpperCase() + house.slice(1);

    $('.g-text').text(capitalizedName);
    $('#' + house).show();
    $('.house-header').addClass(house + '-text');
    $('.house-body').addClass(house + '-bg');
}

function getHouse(randomNum) {
    switch (randomNum) {
        case 0:
            generateHouse('gryffindor');
            break;

        case 1:
            generateHouse('hufflepuff');
            break;

        case 2:
            generateHouse('ravenclaw');
            break;

        case 3:
            generateHouse('slytherin');
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