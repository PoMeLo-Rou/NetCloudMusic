
function fetchSongDetails(ids) {
    fetch(`http://www.codeman.ink/api/song/detail?ids=${ids}`)
      .then(response => response.json())
      .then(data => {
        const img = document.getElementById('Win_img');
    
        const name = document.getElementById('Win_songName');
        const singer = document.getElementById('Win_songSinger');
       
         img.src = `${data.songs[0].al.picUrl}`;
         if(`${data.songs[0].alia}`!=""){
           name.innerHTML = `${data.songs[0].name}` + '('+ `${data.songs[0].alia}`+')';
         }else{
           name.innerHTML = `${data.songs[0].name}` +  `${data.songs[0].alia}` ;
      }
        singer.innerHTML = `${data.songs[0].ar[0].name}`;
  
        fetch(`http://www.codeman.ink/api/song/url?id=${ids}&cookie=MUSIC_U=003150D5F35B69B138A72566BEAAE926CAD3755BBA9E0075E2AF7FCB607B1582D6894C54E7CE71568E9D6275B44E22454770B9EB1C3FB1593465B8695FE307A2C5018A896FC62EDD3A4616698AA6BC34027A7145CE846AFE788068B900642A6A8C67403244250A9A8D4525F4FAE021B831AA332D4D48FF64E22169B63BDCA1987C62C83697D0DFF59F49AB28CE2F7FD12E7B80AD4915AC2D27E49F186A65487194D5E0151CBF87532249174457728BF3AD4F99BD5FD53E1921E54603F2368F68D24CDD7183101D549B95FC5E61439F337C`)
          .then(response => response.json())
          .then(data => {
            const audio = document.getElementById('Win_audio');
            const totalTime = document.querySelector('.Win_totalTime');
            audio.src = data.data[0].url;
            console.log(data.data[0].time);
            totalTime.innerText = transTime(data.data[0].time / 1000);
          });
      });
  }
   
  // 获取URL参数
function getUrlParameter(name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// 获取传递的id值
var id = getUrlParameter("params");

   fetchSongDetails(id)
    const pause = document.querySelector('.Win_control')
    const audio = document.querySelector("#Win_audio");
    const progressBar = document.getElementById('Win_progress')

// 暂停/播放功能实现
pause.onclick = function (e) {
  if (audio.paused) {
      audio.play();
      document.querySelector('.Win_pause').style.display = 'block'
      document.querySelector('.Win_play').style.display = 'none'
      document.querySelector('.Win_cd').classList.add('Win_rotate')
  } else {
      audio.pause();
      document.querySelector('.Win_pause').style.display = 'none'
      document.querySelector('.Win_play').style.display = 'block'
      document.querySelector('.Win_cd').classList.remove('Win_rotate')
  }
}

  
 audio.addEventListener('timeupdate', updateProgress); // 监听音频播放时间并更新进度条
 function updateProgress() {
     const playedTime = document.querySelector('.Win_playTime')
     var value = audio.currentTime / audio.duration;
     progressBar.style.width = value * 100 + '%';
     playedTime.innerText = transTime(audio.currentTime);
 }

 //音频播放时间换算
function transTime(value) {
  var time = "";
  var h = parseInt(value / 3600);
  value %= 3600;
  var m = parseInt(value / 60);
  var s = parseInt(value % 60);
  if (h > 0) {
      time = formatTime(h + ":" + m + ":" + s);
  } else {
      time = formatTime(m + ":" + s);
  }

  return time;
}

// 格式化时间显示，补零对齐
function formatTime(value) {
  var time = "";
  var s = value.split(':');
  var i = 0;
  for (; i < s.length - 1; i++) {
      time += s[i].length == 1 ? ("0" + s[i]) : s[i];
      time += ":";
  }
  time += s[i].length == 1 ? ("0" + s[i]) : s[i];

  return time;
}
      