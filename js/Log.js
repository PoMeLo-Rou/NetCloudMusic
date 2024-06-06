const visitor = document.querySelector('.Win_visitLink')
fetch('http://www.codeman.ink/api/register/anonimous')
        .then(response => response.json())
        .then(data => {
            console.log(data.cookie);
        })
visitor.addEventListener('click',function(){
        setInterval(function(){
            window.location.href = './HomePage.html'
        },1000)
       
})