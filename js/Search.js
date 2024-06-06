

function fetchAndCreateDivs(apiUrl, parentDivClass) {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
       let i = 1;
       const parent = document.querySelector(`.${parentDivClass}`);
       //console.log(`.${parentDivClass}`);
       data.data.forEach(searchWord => {
        const div = document.createElement('div');
        div.classList.add('Win_formItems');
        const a = document.createElement('a');
        a.href = '#';
        const icon = document.createElement('span');
        const span = document.createElement('span');
      
        icon.textContent = i;
        icon.classList.add('Win_formList-index', 'Win_formList-index' + `${i}`);
        span.textContent = searchWord.searchWord;
        span.classList.add('Win_formList-text', 'Win_formList-text' + `${i}`);
      
        a.appendChild(icon);
        a.appendChild(span);
        div.appendChild(a);
        parent.appendChild(div);
      
         i++;
      });
    })
    .catch(error => console.error(error));
}
fetchAndCreateDivs('http://www.codeman.ink/api/search/hot/detail', 'Win_hot');



  function Create(id, parentDivClass) {
    fetch(`http://www.codeman.ink/api/playlist/track/all?id=${id}&limit=20`)
      .then(response => response.json())
      .then(data => {
        let i = 1;
        const parentDiv = document.querySelector(`.${parentDivClass}`);
        data.songs.forEach(song => {
          const div = document.createElement('div');
          div.classList.add('Win_formItems');
          const a = document.createElement('a');
          a.href = '#';
          const icon = document.createElement('span');
          const span = document.createElement('span');
  
          icon.textContent = i;
          icon.classList.add('Win_formList-index', 'Win_formList-index' + `${i}`);
          span.textContent = song.name;
          span.classList.add('Win_formList-text', 'Win_formList-text' + `${i}`);
  
          a.appendChild(icon);
          a.appendChild(span);
          div.appendChild(a);
          parentDiv.appendChild(div);
          i++;
        });
      })
      .catch(error => console.error(error));
  }
  Create('991319590','Win_rap')
  Create('5059642708','Win_chinese')
  Create('5059661515','Win_minyao')
  Create('5059633707','Win_yaogun')
  Create('71385702','Win_acg')
  Create('8661209031','Win_lexia')
  Create('8246775932','Win_redu')
  Create('7785091694','Win_heijiao')

  const inputElement = document.querySelector('.Win_search');
  const parentDiv = document.querySelector('.Win_historyList');
  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {

      const inputValue = event.target.value; 
      const childDiv = document.createElement('div');
      childDiv.textContent = inputValue;
      childDiv.classList.add('Win_historyItems')
      parentDiv.appendChild(childDiv);
      setTimeout(function(){
        window.location.href=`./SearchEnd.html?params=${inputValue}`
      },2000)
      // window.location.href=`./SearchEnd.html?params=${inputValue}`;
      
      event.target.value = ''; // 清空输入框的值
    }
  });