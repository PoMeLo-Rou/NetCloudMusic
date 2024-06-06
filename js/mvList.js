fetch('http://www.codeman.ink/api/mv/all')
  .then(response => response.json())
  .then(data => {
    const parentDiv = document.querySelector('.Win_main');

    for(let i=0;i<data.data.length;i++){
      const childdiv = document.createElement('div');
       childdiv.classList.add('Win_list')
       const id = data.data[i].id
       console.log(id);
       const link =document.createElement('a');
       link.href ='./mv.html?params='+id;
      const imgElement = document.createElement('img');
      imgElement.src = data.data[i].cover;
      const spanElement = document.createElement('span');
      spanElement.classList.add('Win_title')
      spanElement.textContent=data.data[i].name+'——'+data.data[i].artistName;

      //  const id = data.data[i].id
      // console.log(data.data[i].id);
    //   span.textContent = data[i].name + ' -- ' + data[i].artistName;

      childdiv.appendChild(imgElement);
      childdiv.appendChild(spanElement);
      parentDiv.appendChild(link);
      link.appendChild(childdiv)
    }
  }).catch(error => {
    console.error('Error:', error);
  });