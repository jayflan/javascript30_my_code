let isPlaying = false;
let isDragging = false;

const video = document.querySelector(".viewer");
const playButton = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
const progressBar = document.querySelector(".progress");

//video progress bar filled appearance
video.addEventListener('timeupdate', function () {
    progressFilled = document.querySelector(".progress__filled");
    if (this.currentTime === this.duration) {
        this.pause();
    };
    const percentage = (this.currentTime / this.duration) * 100;
    progressFilled.style.flexBasis = `${percentage}%`;

});

//drag progress bar to specific time of playback
progressBar.addEventListener('click', (event) => {
    const xpos = event.offsetX;
    const barWidth = progressBar.offsetWidth;
    handleProgressBar(xpos, barWidth, video);
});
progressBar.addEventListener('mousedown', (event) => {
    isDragging = true;
   progressBar.style.cursor = 'grabbing';
   
});
progressBar.addEventListener('mouseup', () => {
    isDragging = false;
    progressBar.style.cursor = 'ew-resize';
});
progressBar.addEventListener('mousemove', (event) => {
    if(!isDragging) return;
    const xpos = event.offsetX;
    const barWidth = progressBar.offsetWidth;
    handleProgressBar(xpos, barWidth, video);
});

//click & drag volume or playbackRate sliders
ranges.forEach(range => {
    handleSlider(range, video); //set initial range tool-title values
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

function handleProgressBar(pos, barWidth, video) {
    const updatedTime = (pos / barWidth) * video.duration;
    video.currentTime = updatedTime;
};


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
    const skipSeconds = parseInt(buttons.dataset.skip);
    videoViewer.currentTime += skipSeconds;    
};

function handleSlider(slider, video) {
    const videoView = video, name = slider.name;
    if(name === "volume") {
        videoView[name] = slider.value;
        slider.title = `${name}: ${videoView[name] * 10}`;
    } else {
        videoView[name] = slider.value;
        slider.title = `${name}: ${videoView[name]}`;
    };
};

