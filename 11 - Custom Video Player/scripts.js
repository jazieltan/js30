// Get Elements
const player = document.querySelector(".player")
const video = player.querySelector(".viewer")
const toggle = player.querySelector(".toggle")
const progress = player.querySelector(".progress")
const progressBar = player.querySelector(".progress__filled")
const skipBtns = player.querySelectorAll("[data-skip]")
const ranges = player.querySelectorAll(".player__slider")
// check if all are selected properly. 
// console.log([video, toggle, progress, progressFilled, skipBtns, ranges]);


// buld fn
function togglePlay(){
    if (video.paused) {
         video.play();
    }else{
        video.pause();
    }
}
function updateBtn(){
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}
function skip() {
    // console.log(this.dataset.skip);
    // get data attr through dataset object, get name after the data- (dashes in names are converted to camelCase data-cool-man = dataset.coolMan).
    video.currentTime += parseFloat(this.dataset.skip);
}
function rangeUpdate() {
    // console.log(video['volume'], this.value);
    video[this.name] = this.value;
    // video[] is a way to access an array. JavaScript engine will redefine it as an object 
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
    // everything with a - in javascript is converted to cameCase. 
}

function seek(e) {
    const seekTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = seekTime;
    //  console.log(e);
}
let mousedown = false; 
// hook evt listeners
video.addEventListener("click", togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener("click", togglePlay);
skipBtns.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", rangeUpdate))
progress.addEventListener('click', seek)
progress.addEventListener('mousemove', (e) => {
    if(mousedown){
        seek(e);
    }
})
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)