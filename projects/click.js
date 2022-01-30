// Created with Joey Kozak

let $playerScore = 0
let $computerScore = 0
let $winningNumber = 25
let summary;
let level = 1
let wait = 1000
let bombs = 10
let powerupUsed = false

//source: https://flaviocopes.com/how-to-slow-loop-javascript/
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const startGame = () => {

    $('#start').addClass('hide');
    $('#clickHere').removeClass('hide');
    $('#playerScore').text($playerScore)
}

const playerClick = () => {
    $playerScore++
    $('#playerScore').text($playerScore)
    winCon();
}

const winCon = () => {
    if ($computerScore == $winningNumber) {

        $('#tryAgain').removeClass('hide');
        $('#startOver').removeClass('hide');
        $('#summary').text(`Computer wins!!!!`);
        $('#clickHere').addClass('hide');
        $('#clickHere').prop("disabled", true);

    } else if ($playerScore == $winningNumber) {

        $('#summary').text(`You win!!!! Let's step it up a notch!`);
        $('#clickHere').prop("disabled", true);
        $('#increaseLevel').removeClass('hide');

    } else {
        $('#summary').text(`Keep Clicking!!!!`);
    }
}

const levelUp = () => {
    level++;
    addPowerup();
    wait = (1 / level) * 1000
    console.log(wait);
    $('#start').removeClass('hide');
    $('#level').text(level);
    $('#increaseLevel').addClass('hide');
    $('#playerScore').text($playerScore);
    $('#clickHere').addClass("hide")
    $('#clickHere').prop("disabled", false)
    $playerScore = 0;
    $computerScore = 0;
    $('#playerScore').text($playerScore)
    $('#computerScore').text($computerScore)
}

const tryAgain = () => {

    $('#startOver').addClass('hide');
    $('#tryAgain').addClass('hide');
    $('#start').removeClass('hide');
    $('#level').text(level);
    $('#increaseLevel').addClass('hide');
    $('#playerScore').text($playerScore);
    $('#clickHere').addClass("hide")
    $('#clickHere').prop("disabled", false)
    $playerScore = 0;
    $computerScore = 0;
    $('#playerScore').text($playerScore)
    $('#computerScore').text($computerScore)
}

const addPowerup = () => {
    if (level == 8) {
        bombs++
    }
}

const usePowerup = () => {
    if (bombs > 0) {
        $computerScore = 0
        $('#computer-score').text($computerScore)
        powerupUsed = true
        bombs--
    }
}

const startOver = () => {
    location.reload();
}


const computerClick = async () => {

    for (let i = 0; i < $winningNumber; i++) {
        if ($computerScore < $winningNumber && $playerScore < $winningNumber) {
            winCon()
            await sleep(wait)
            if (powerupUsed) {
                i = 0
                powerupUsed = false
            }
            $computerScore++
            $('#computerScore').text($computerScore)
            winCon()
        }
    }

}

const addPowerUp = () => {

}


$(() => {
    $('#playerScore').text($playerScore)
    $('#start').on('click', startGame)
    $('#start').on('click', computerClick)
    $('#clickHere').on('click', playerClick)
    $('#increaseLevel').on('click', levelUp)
    $('#tryAgain').on('click', tryAgain)
    $('#startOver').on('click', startOver)
    console.log(wait);
    $(document).keydown((e) => {
        if (e.which == 70) {
            if (bombs !== 0) {
                $('body').css('background-image', 'radial-gradient(red, white)')
            }
            usePowerup()
        }
    })

    $(document).keyup((e) => {
        if (e.which == 70) {
            $('body').css('background-image', 'none')
        }
    })


    const $openBtn = $('#openModal');
    const $modal = $('#modal')
    const $closeBtn = $('#close')

    const openModal = () => {
        $modal.show();
    }

    const closeModal = () => {
        $modal.hide();
    }

    $openBtn.on('click', openModal)
    $closeBtn.on('click', closeModal)
})