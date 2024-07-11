const video = document.querySelector('.player');
video.hidden = true;
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const startWebcam = async() => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    
    video.srcObject = stream;
    video.play();

    video.addEventListener('loadedmetadata', () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      renderWebcamFrame();
    });

    const renderWebcamFrame = () => {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(renderWebcamFrame);
    };
  } catch(err) {
    console.log('Failed to get webcam stream', err);
  };
};

startWebcam();