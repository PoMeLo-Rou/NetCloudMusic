function  Getdata(id,n){
    fetch(`http://www.codeman.ink/api/playlist/track/all?id=${id}&limit=3`)
  .then(response => response.json())
  .then(data => {
      const firstDiv = document.querySelector(`.Win_rankContent${n}`)
      const parentDiv = document.createElement('div');
      firstDiv.appendChild(parentDiv)
      parentDiv.classList.add('Win_rankItem');
      
      
    data.songs.forEach(item => {
      
       const listDiv = document.createElement('div');
       listDiv.classList.add('Win_list');

       const leftDiv = document.createElement('div');
       leftDiv.classList.add('Win_left');

       const textDiv = document.createElement('div');
       textDiv.classList.add('Win_text');

       const nameSpan = document.createElement('span');
       nameSpan.classList.add('Win_name');
       nameSpan.textContent = item.name;

       const singerSpan = document.createElement('span');
       singerSpan.classList.add('Win_singer');
       singerSpan.textContent =  item.ar.map(artist => artist.name);

       textDiv.appendChild(nameSpan);
       textDiv.appendChild(singerSpan);

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
Getdata('7603212484',1)
Getdata('3778678',2)
Getdata('3779629',3)