const songs = [
    "ASA JAILER.mp3",
    "Beyoncé - Halo.mp3",
    "Billie Eilish - Ocean Eyes (Official Music Video).mp3",
    "Burna Boy - Anybody (Official Video).mp3",
    "Murder in the USA.mp3",
    "VULINDLELA-BRENDA FASSIE.mp3"
];
const player = document.getElementById('player');

function createSongList() {
    const list = document.createElement("ol");
    for (let i = 0; i < songs.length; i++) {
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list;
}

const songList = document.getElementById('songList');
songList.appendChild(createSongList());

const links = document.querySelectorAll("li");
for(const link of links) {
    link.addEventListener('click', setSong)
}


function setSong(e) {
    document.querySelector('#headphones').classList.remove("pulse");
    const source = document.getElementById("source");
    source.src = "songs/" + e.target.innerText;
    console.log(e);

    document.querySelector("#currentSong").innerText = `Now playing: ${e.target.innerText}`;

    player.load();
    player.play();
    document.querySelector('#headphones').classList.add("pulse");
};

function playAudio() {
    if(player.readyState) {
        player.play(); //runs if it's true
    }
}

function pauseAudio() {
    player.pause();
}
const slider = document.getElementById('volumeSlider');
slider.oninput = function (e) {
    const volume = e.target.value;
    player.volume = volume;
}

function updateProgress() {
    if(player.currentTime > 0) {
        const progressBar = document.getElementById('progress');
        progressBar.value = (player.currentTime / player.duration) * 100; 
    }
}