
const parentElement = document.querySelector('.Win_content');
// 获取传递的id值
var value = getUrlParameter("params");
fetch(`http://www.codeman.ink/api/cloudsearch?keywords=${value}`)
  .then(response => response.json())
  .then(data => {
    const songs = data.result.songs;
    
    songs.forEach(song => {
      const id = song.id
      const childDiv = document.createElement('div');
      childDiv.classList.add('Win_item')
      const  a = document.createElement('a')
      a.classList.add('Win_link')
      a.href = "Player.html?params=" + id;
      childDiv.appendChild(a)
      const leftDiv = document.createElement('div');
      leftDiv.classList.add('Win_left')

      const nameSpan = document.createElement('span');
      nameSpan.classList.add('Win_name')
      nameSpan.textContent = song.name;
      console.log(song.id);
      
      const singerName = document.createElement('span');
      singerName.classList.add('Win_singer')
      const arNames = [];
      song.ar.forEach(artist => {
        arNames.push(artist.name);
      });
      singerName.innerHTML = arNames.slice(0,3).join('/')
    

      leftDiv.appendChild(nameSpan);
      leftDiv.appendChild(singerName);

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute('t', '1692623981930');
      svg.classList.add = 'icon';
      svg.setAttribute('viewBox', '0 0 1024 1024');
      svg.setAttribute('version', '1.1');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svg.setAttribute('p-id', '4019');
      svg.setAttribute('width', '2rem');
      svg.setAttribute('height', '2rem');

      svgElement.setAttribute("t", "1692895278305");
      svgElement.setAttribute("class", "icon");
      svgElement.setAttribute("viewBox", "0 0 1024 1024");
      svgElement.setAttribute("version", "1.1");
      svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgElement.setAttribute("p-id", "19777");
      svgElement.setAttribute("width", "2rem");
      svgElement.setAttribute("height", "2rem");

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M512 256a64 64 0 1 0-64-64 64.1 64.1 0 0 0 64 64z m0 192a64 64 0 1 0 64 64 64.1 64.1 0 0 0-64-64z m0 320a64 64 0 1 0 64 64 64.1 64.1 0 0 0-64-64z');
      path.setAttribute('p-id', '4020');
      path.setAttribute('fill', '#707070');

      var pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathElement.setAttribute("d", "M853.333333 170.666667h-682.666666c-62.577778 0-113.777778 51.2-113.777778 113.777777v455.111112c0 62.577778 51.2 113.777778 113.777778 113.777777h682.666666c62.577778 0 113.777778-51.2 113.777778-113.777777v-455.111112c0-62.577778-51.2-113.777778-113.777778-113.777777m56.888889 568.888889c0 34.133333-22.755556 56.888889-56.888889 56.888888h-682.666666c-34.133333 0-56.888889-22.755556-56.888889-56.888888v-455.111112c0-34.133333 22.755556-56.888889 56.888889-56.888888h682.666666c34.133333 0 56.888889 22.755556 56.888889 56.888888v455.111112m-512-56.888889l284.444445-170.666667-284.444445-170.666667v341.333334");
      pathElement.setAttribute("fill", "#707070");

      svg.appendChild(path);
      svgElement.appendChild(pathElement)

      a.appendChild(leftDiv);
      
      a.appendChild(svgElement)
      a.appendChild(svg);

      parentElement.appendChild(childDiv);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

    // 获取URL参数
function getUrlParameter(name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

