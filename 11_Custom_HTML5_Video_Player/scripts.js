let isPlaying = false;

const video = document.querySelector(".viewer");
const playButton = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

//video progress bar appearance
video.addEventListener('timeupdate', function () {
    if (this.currentTime === this.duration) {
        this.pause();
    };
    const percentage = (this.currentTime / this.duration) * 100;
    const progressBar = document.querySelector(".progress__filled");
    progressBar.style.flexBasis = `${percentage}%`;

});

//drag progress bar to specific time of playback


//click & drag volume or playbackRate sliders
ranges.forEach(range => {
    range.addEventListener('change', () => {
        handleSlider(range, video);
    });
});
//click play/pause button
playButton.addEventListener('click', () => {
    handleTogglePlay(playButton, video);
});
//click skip buttons
skipButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleSkipButtons(button, video);
    });
});



function handleTogglePlay(button, videoViewer) {
    const videoView = videoViewer;

    if(isPlaying === false) {
        // videoViewer.play();
        videoView.play();
        playButton.innerHTML = "Pause";
        isPlaying = true;
    } else {
        videoViewer.pause();
        playButton.innerHTML = "►";
        isPlaying = false;
    };
};

function handleSkipButtons(buttons, videoViewer) {
    console.log(buttons.dataset.skip);
    const skipSeconds = parseInt(buttons.dataset.skip);
    videoViewer.currentTime += skipSeconds;    
};

function handleSlider(slider, video) {
    const videoView = video, name = slider.name;
    videoView[name] = slider.value;
    slider.title = `${name}: ${videoView[name]}`;
};

