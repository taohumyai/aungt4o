
function startMusic() {
    var music = document.getElementById('backgroundMusic');
    music.play().catch(function(error) {
        console.log("Music playback failed: ", error);
    });
}

function revealGift() {
    document.getElementById('gift').style.display = 'block';
    var music = document.getElementById('backgroundMusic');
    music.play();
}
