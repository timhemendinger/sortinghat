$(function() {

    $('.crest-image').hide();

    playAudio('audio/hp-theme.mp3', true);

    var randomNum = 0;
    var house = '';

    $('#getHouseBtn').on('click', () => {
        $('.intro-screen').fadeOut('slow', () => {
            //$('.house-result').fadeIn('slow');
            $('.loading-screen').fadeIn('fast');
        });

        randomNum = genRandomInt(4);
        house = getHouse(randomNum);

    });

    $('#back').on('click', (e) => {
        $('.house-result').fadeOut('slow', () => {
            $('.intro-screen').fadeIn('slow');
            houseScreenReset();
        });
        
        e.preventDefault();
    });
    
});

// pauseTime is to ensure the audio is synched
function generateHouse(house, pauseTime) {

    pauseTime *= 1000;
    playAudio('audio/' + house + '.mp3');

    setTimeout(() => {
        capitalizedName = house.charAt(0).toUpperCase() + house.slice(1);
        $('.g-text').text(capitalizedName);
        $('#' + house).show();
        $('.house-header').addClass(house + '-text');
        $('.house-body').addClass(house + '-bg');

        $('.loading-screen').fadeOut('slow', () => {
            $('.house-result').fadeIn('slow');
        });

        
    }, pauseTime);

}

function houseScreenReset() {
    $('.g-text').text();
    $('.crest-image').hide();
    $('.house-body').attr('class', 'house-body');
}

function getHouse(randomNum) {
    switch (randomNum) {
        case 0:
            generateHouse('gryffindor', 19);
            break;

        case 1:
            generateHouse('hufflepuff', 17);
            break;

        case 2:
            generateHouse('ravenclaw', 22);
            break;

        case 3:
            generateHouse('slytherin', 19);
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