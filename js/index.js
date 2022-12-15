// main js
$(document).ready(function () {
  $(".svg_wrapper").click(function () {
    $(".title_ani1").css("top", "-50%");
    $(".title_ani2").css("top", "-50%");
    $(".title_ani3").css("top", "-50%");
    $(".title_ani4").css("top", "-50%");
    $(".svg_wrapper").fadeOut("500");
    $("#main_video").delay(1400).fadeIn("slow");
  });
  $(".svg_wrapper").hover(
    function () {
      $(this).removeClass("out").addClass("in");
    },
    function () {
      $(this).removeClass("in").addClass("out");
    }
  );
});

// videdo js
// DOM Element들을 가져와서 변수로 저장
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".bar");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");

// 플레이 버튼 기능 구현
// 버튼 클릭했을 때 버튼 모양이 바뀌고 영상이 재생중이라면 pause(),멈춰져있다면 play()
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

function updateButton() {
  // 아이콘을 다양하게 활용해서 만들어보면 좋을 것 같다.
  const icon = this.paused ? "▷" : "⌷⌷";
  toggle.textContent = icon;
}

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

// 스킵 정도를 저장해놓은 것
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

skipButtons.forEach((button) => button.addEventListener("click", skip));

function handleRangeUpdate() {
  video[this.name] = this.value;
}
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  document.querySelector(".bar").style.flexBasis = `${percent}%`;
}
video.addEventListener("timeupdate", handleProgress);

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

function video_mute_on() {
  var video_obj = document.getElementById("video_obj");
  video_obj.muted = true;
}
