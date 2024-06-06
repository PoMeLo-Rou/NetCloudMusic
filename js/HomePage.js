
function change(){
    document.querySelector('.Win_slider').style.display='block'
}
function back(){
    document.querySelector('.Win_slider').style.display='none'
}
fetch('http://www.codeman.ink/api/banner')
  .then(response => response.json())
  .then(data => {
    // 获取Win_banner的父级div
    const parentDiv = document.querySelector('.Win_banner');

    // 创建轮播图的容器
    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('Win_carousel-container');

    // 创建轮播图的图片
    data.banners.forEach(banner => {
      const img = document.createElement('img');
      img.src = banner.imageUrl;
      carouselContainer.appendChild(img);
    });

    // 将轮播图的容器插入到父级div中
    parentDiv.appendChild(carouselContainer);

    // 设置轮播图自动播放
    let currentIndex = 0;
    const images = carouselContainer.getElementsByTagName('img');

    setInterval(() => {
      // 隐藏当前图片
      images[currentIndex].style.display = 'none';

      // 计算下一张图片的索引
      currentIndex = (currentIndex + 1) % images.length;

      // 显示下一张图片
      images[currentIndex].style.display = 'block';
    }, 1000);
  })
  .catch(error => {
    console.error('Error:', error);
  });



fetch('http://www.codeman.ink/api/personalized')
.then(response => response.json())
.then(data => {
  const parentDiv = document.querySelector('.Win_recommendList');
  
  data.result.forEach(item => {
    const picUrl = item.picUrl;
    const name = item.name;
    
    const childDiv = document.createElement('div');
    childDiv.classList.add('Win_listItems')
    
    const img = document.createElement('img');
    img.src = picUrl;
    img.classList.add('Win_img')
    
    const nameNode = document.createElement('span');
    nameNode.innerText = name;
    nameNode.classList.add('Win_name')
    
    childDiv.appendChild(img);
    childDiv.appendChild(nameNode);
    
    parentDiv.appendChild(childDiv);
  });
})
.catch(error => {
  console.error('Error:', error);
});


    fetch('http://www.codeman.ink/api/top/mv?limit=3')
  .then(response => response.json())
  .then(data => {
      const firstDiv = document.querySelector('.Win_rankContent')
      const parentDiv = document.createElement('div');
      firstDiv.appendChild(parentDiv)
      parentDiv.classList.add('Win_rankItem');
      const title = document.createElement('span')
      parentDiv.appendChild(title)
      title.innerText = 'MV榜 >'
      title.classList.add('Win_title')
      
      
    data.data.forEach(item => {
      
       const listDiv = document.createElement('div');
       listDiv.classList.add('Win_list');

       const leftDiv = document.createElement('div');
       leftDiv.classList.add('Win_left');

       const img = document.createElement('img');
       img.src = item.cover;

       const textDiv = document.createElement('div');
       textDiv.classList.add('Win_text');

       const nameSpan = document.createElement('span');
       nameSpan.classList.add('Win_Rankname');
       nameSpan.textContent = item.name;

       const singerSpan = document.createElement('span');
       singerSpan.classList.add('Win_singer');
       singerSpan.textContent = item.artistName;

       textDiv.appendChild(nameSpan);
       textDiv.appendChild(singerSpan);

       leftDiv.appendChild(img);
       leftDiv.appendChild(textDiv);

       listDiv.appendChild(leftDiv);

       
       parentDiv.appendChild(listDiv);

       firstDiv.appendChild(parentDiv);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

function  Getdata(URL,Name){
    fetch(`${URL}`)
  .then(response => response.json())
  .then(data => {
      const firstDiv = document.querySelector('.Win_rankContent')
      const parentDiv = document.createElement('div');
      firstDiv.appendChild(parentDiv)
      parentDiv.classList.add('Win_rankItem');
      const title = document.createElement('span')
      parentDiv.appendChild(title)
      title.innerText = `${Name}`+'榜 >'
      title.classList.add('Win_title')
      
      
    data.songs.forEach(item => {
      
       const listDiv = document.createElement('div');
       listDiv.classList.add('Win_list');

       const leftDiv = document.createElement('div');
       leftDiv.classList.add('Win_left');

       const img = document.createElement('img');
       img.src = item.al.picUrl;

       const textDiv = document.createElement('div');
       textDiv.classList.add('Win_text');

       const nameSpan = document.createElement('span');
       nameSpan.classList.add('Win_Rankname');
       nameSpan.textContent = item.name;

       const singerSpan = document.createElement('span');
       singerSpan.classList.add('Win_singer');
       singerSpan.textContent =  item.ar.map(artist => artist.name);

       textDiv.appendChild(nameSpan);
       textDiv.appendChild(singerSpan);

       leftDiv.appendChild(img);
       leftDiv.appendChild(textDiv);

       listDiv.appendChild(leftDiv);

       
       parentDiv.appendChild(listDiv);

       firstDiv.appendChild(parentDiv);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }

Getdata(`http://www.codeman.ink/api/playlist/track/all?id=991319590&limit=3`,'说唱')
Getdata(`http://www.codeman.ink/api/playlist/track/all?id=71384707&limit=3`,'古典')
Getdata(`http://www.codeman.ink/api/playlist/track/all?id=745956260&limit=3`,'韩语')
