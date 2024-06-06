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
  console.log(id);

  const parentDiv = document.querySelector('.Win_commend');

//获取video地址
// function GetVideo(id){
  fetch(`http://www.codeman.ink/api/mv/url?id=${id}&r=1080`)
  .then(response =>response.json())
  .then(data => {
    const videoBox = document.querySelector('.Win_videoBox')
    videoBox.src = data.data.url
  })
//获取评论
  fetch(`http://www.codeman.ink/api/comment/mv?id=${id}`)
    .then(response => response.json())
    .then(data => {
      const hotComments = data.hotComments;
      hotComments.forEach(comment => {
      // 创建Win_item div元素
      const winItemDiv = document.createElement('div');
      winItemDiv.classList.add('Win_item');
      parentDiv.appendChild(winItemDiv);

      // 创建Win_user div元素
      const winUserDiv = document.createElement('div');
      winUserDiv.classList.add('Win_user');

      // 创建Win_left div元素
      const winLeftDiv = document.createElement('div');
      winLeftDiv.classList.add('Win_left');

      // 创建Win_userIcon img元素
      const winUserIconImg = document.createElement('img');
      winUserIconImg.classList.add('Win_userIcon');
      winUserIconImg.src = comment.user.avatarUrl;
      winUserIconImg.alt = '';

      // 创建Win_text div元素
      const winTextDiv = document.createElement('div');
      winTextDiv.classList.add('Win_text');

      // 创建Win_name span元素
      const winNameSpan = document.createElement('span');
      winNameSpan.classList.add('Win_name');
      winNameSpan.textContent = comment.user.nickname;

      // 创建Win_time span元素
      const winTimeSpan = document.createElement('span');
      winTimeSpan.classList.add('Win_time');
      winTimeSpan.textContent = comment.timeStr;

      // 将Win_name和Win_time添加到Win_text中
      winTextDiv.appendChild(winNameSpan);
      winTextDiv.appendChild(winTimeSpan);

      // 将Win_userIcon和Win_text添加到Win_left中
      winLeftDiv.appendChild(winUserIconImg);
      winLeftDiv.appendChild(winTextDiv);

      // 创建Win_right div元素
      const winRightDiv = document.createElement('div');
      winRightDiv.classList.add('Win_right');

      // 创建svg元素
      const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgElement.setAttribute('class', 'icon');
      svgElement.setAttribute('viewBox', '0 0 1024 1024');
      svgElement.setAttribute('version', '1.1');
      svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svgElement.setAttribute('p-id', '4025');
      svgElement.setAttribute('width', '2rem');
      svgElement.setAttribute('height', '2rem');

      // 创建path元素
      const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathElement.setAttribute('d', 'M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-1152-102.4-1216h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z');
      pathElement.setAttribute('p-id', '4026');
      pathElement.setAttribute('fill', '#515151');

      // 将path添加到svg中
      svgElement.appendChild(pathElement);

      // 创建Win_likeNumber span元素
      const winLikeNumberSpan = document.createElement('span');
      winLikeNumberSpan.classList.add('Win_likeNumber');
      winLikeNumberSpan.textContent = comment.likedCount;

      // 将svg和Win_likeNumber添加到Win_right中
      winRightDiv.appendChild(svgElement);
      winRightDiv.appendChild(winLikeNumberSpan);

      // 将Win_left和Win_right添加到Win_user中
      winUserDiv.appendChild(winLeftDiv);
      winUserDiv.appendChild(winRightDiv);

      //创建Win_content元素
      const content = document.createElement('div');
      content.classList.add('Win_content');
      content.textContent = comment.content;

      winItemDiv.appendChild(winUserDiv);
      winItemDiv.appendChild(content);
    });
  });
//  }
//  GetVideo(id)