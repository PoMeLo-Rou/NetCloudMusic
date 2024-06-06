   // 获取URL参数
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, "\\$&"); 
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),    //正则表达式来匹配URL中的查询参数。正则表达式的模式为[?&] + name + (=([^&#]*)|&|#|$)
        results = regex.exec(window.location.href); //regex.exec(window.location.href)方法在当前页面的URL中执行正则表达式匹配，将结果赋值给results变量
    if (!results) return null;  //results为null，表示没有匹配到查询参数，函数返回null
    if (!results[2]) return ''; //results[2]不存在，表示查询参数的值为空字符串，函数返回空字符串
    return decodeURIComponent(results[2].replace(/\+/g, " "));  //。使用decodeURIComponent方法对查询参数的值进行解码，并将+替换为空格，最后返回解码后的查询参数值
  }
  
  // 获取传递的id值
  var id = getUrlParameter("params");
  console.log(id);

  // 获取接口数据
function GetData(id){
  fetch(`http://www.codeman.ink/api/playlist/track/all?id=${id}`)
.then(response => response.json())
.then(data => {
  // 获取父级div元素
  const parentDiv = document.querySelector('.Win_main');

  // 遍历数据创建子级div
  data.songs.forEach((song, index) => {
    // 创建Win_item元素
    const winItemDiv = document.createElement('div');
    winItemDiv.classList.add('Win_item');

    // 创建Win_number元素
    const winNumberSpan = document.createElement('span');
    winNumberSpan.classList.add('Win_number');
    winNumberSpan.textContent = (index + 1).toString();
    winItemDiv.appendChild(winNumberSpan);

    // 创建Win_left元素
    const winLeftDiv = document.createElement('div');
    winLeftDiv.classList.add('Win_left');

    // 创建Win_name元素
    const winNameSpan = document.createElement('span');
    winNameSpan.classList.add('Win_name');
    winNameSpan.textContent = song.al.name;
    winLeftDiv.appendChild(winNameSpan);

    // 创建Win_singer元素
    song.ar.forEach(artist => {
      const winSingerSpan = document.createElement('span');
      winSingerSpan.classList.add('Win_singer');
      winSingerSpan.textContent = artist.name+' ';
      winLeftDiv.appendChild(winSingerSpan);
    });

    winItemDiv.appendChild(winLeftDiv);

    // 创建svg元素
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('t', '1693067763408');
    svgElement.classList.add('icon');
    svgElement.setAttribute('viewBox', '0 0 1024 1024');
    svgElement.setAttribute('version', '1.1');
    svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgElement.setAttribute('p-id', '4074');
    svgElement.setAttribute('width', '2rem');
    svgElement.setAttribute('height', '2rem');
    svgElement.setAttribute('style', 'position: absolute; right: 2rem;');

    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', 'M512 329.142857a73.142857 73.142857 0 1 0-71.314286-73.142857A73.142857 73.142857 0 0 0 512 329.142857z m-73.142857 182.857143a73.142857 73.142857 0 1 0 73.142857-73.142857 73.142857 73.142857 0 0 0-73.142857 73.142857z m73.142857 329.142857a73.142857 73.142857 0 1 0-73.142857-73.142857 73.142857 73.142857 0 0 0 73.142857 73.142857z');
    pathElement.setAttribute('p-id', '4075');
    pathElement.setAttribute('fill', '#515151');

    svgElement.appendChild(pathElement);
    winItemDiv.appendChild(svgElement);

    // 将Win_item添加到父级div中
    parentDiv.appendChild(winItemDiv);
  });
})
.catch(error => {
  console.error('Error:', error);
});
}
GetData(id);