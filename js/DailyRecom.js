
function getMyDate(){
    const date = new Date()
    let d = date.getDate()
    d = d < 10 ? '0' + d : d
    return d
}

function getMyMonth(){
    const date = new Date()
    let m = date.getMonth()+1
    m = m < 10 ? '0' + m : m
    return '/ ' + m
}
document.querySelector('.Win_daily').innerHTML =getMyDate()
document.querySelector('.Win_month').innerHTML =getMyMonth()

fetch('http://www.codeman.ink/api', true)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    // 处理错误
  });


  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.codeman.ink/api/recommend/songs?cookie=MUSIC_U=003150D5F35B69B138A72566BEAAE926CAD3755BBA9E0075E2AF7FCB607B1582D6894C54E7CE71568E9D6275B44E22454770B9EB1C3FB1593465B8695FE307A2C5018A896FC62EDD3A4616698AA6BC34027A7145CE846AFE788068B900642A6A8C67403244250A9A8D4525F4FAE021B831AA332D4D48FF64E22169B63BDCA1987C62C83697D0DFF59F49AB28CE2F7FD12E7B80AD4915AC2D27E49F186A65487194D5E0151CBF87532249174457728BF3AD4F99BD5FD53E1921E54603F2368F68D24CDD7183101D549B95FC5E61439F337C", true);
  
  xhr.onreadystatechange = function() {

   

    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      var songs = response.data.dailySongs;
  
      // 遍历数据并打印al中的name
      for (var i = 0; i < songs.length; i++) {
        var song = songs[i];
        var al = song.al;
        var ar = song.ar[0];
        const id = song.id
        console.log(id);

        const parentDiv = document.querySelector('.Win_content');
        const left = document.createElement('div')
        left.classList.add('Win_left')
        const img = document.createElement('img')
        left.appendChild(img)
        img.src = al.picUrl
        img.classList.add('Win_img')
        const text = document.createElement('div')
        text.classList.add('Win_text')
        const name = document.createElement('span')
        text.appendChild(name)
        name.classList.add('Win_name')
        name.innerText = songs[i].name
        const singer = document.createElement('span')
        text.appendChild(singer)
        singer.classList.add('Win_singer')
        singer.innerText = ar.name
        const choose = document.createElement ('div')
        choose.classList.add('Win_choose')
        const childDiv = document.createElement('div');
        childDiv.classList.add('Win_items');
        const a = document.createElement('a')
        childDiv.appendChild(a)
        a.appendChild(left)
        a.appendChild(choose)
        a.classList.add('Win_link')
        a.href = "../html/Player.html?params=" + id;

        var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("t", "1692277346489");
        svgElement.setAttribute("class", "icon");
        svgElement.setAttribute("viewBox", "0 0 1024 1024");
        svgElement.setAttribute("version", "1.1");
        svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgElement.setAttribute("p-id", "5131");
        svgElement.setAttribute("width", "2rem");
        svgElement.setAttribute("height", "2rem");

// 创建path元素
        var pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathElement.setAttribute("d", "M832 128 128 128C57.344 128 0 185.344 0 256l0 576c0 70.656 57.344 128 128 128l704 0c70.656 0 128-57.344 128-128L960 256C960 185.344 902.656 128 832 128zM896 832c0 35.392-28.608 64-64 64L128 896c-35.392 0-64-28.608-64-64L64 256c0-35.392 28.608-64 64-64l704 0c35.392 0 64 28.608 64 64L896 832zM368.448 324.544C358.592 318.656 346.24 318.528 336.192 324.096 326.208 329.792 320 340.48 320 352l0 384c0 11.584 6.208 22.144 16.192 27.904C341.12 766.656 346.56 768 352 768c5.696 0 11.392-1.472 16.448-4.544l320.064-192C698.048 565.696 704 555.264 704 544s-5.952-21.632-15.488-27.456L368.448 324.544zM384 679.488 384 408.512 609.792 544 384 679.488z");
        pathElement.setAttribute("p-id", "5132");
        pathElement.setAttribute("fill", "#8a8a8a");

// 将path元素添加到SVG元素中
        svgElement.appendChild(pathElement);
        choose.appendChild(svgElement)

        var svgElement2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement2.setAttribute("t", "1692277716552");
        svgElement2.setAttribute("class", "icon");
        svgElement2.setAttribute("viewBox", "0 0 1024 1024");
        svgElement2.setAttribute("version", "1.1");
        svgElement2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgElement2.setAttribute("p-id", "6456");
        svgElement2.setAttribute("width", "3rem");
        svgElement2.setAttribute("height", "3rem");

// 创建path元素
        var pathElement2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathElement2.setAttribute("d", "M512 329.142857a73.142857 73.142857 0 1 0-71.314286-73.142857A73.142857 73.142857 0 0 0 512 329.142857z m-73.142857 182.857143a73.142857 73.142857 0 1 0 73.142857-73.142857 73.142857 73.142857 0 0 0-73.142857 73.142857z m73.142857 329.142857a73.142857 73.142857 0 1 0-73.142857-73.142857 73.142857 73.142857 0 0 0 73.142857 73.142857z");
        pathElement2.setAttribute("p-id", "6457");
        pathElement2.setAttribute("fill", "#8a8a8a");

// 将path元素添加到SVG元素中
        svgElement2.appendChild(pathElement2);
        svgElement2.style.paddingLeft = "1rem"
        choose.appendChild(svgElement2)

        left.appendChild(text)
        parentDiv.appendChild(childDiv)
        
      }
    }
  };
  
  xhr.send();
