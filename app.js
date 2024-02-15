let api = 'http://www.omdbapi.com/?i=tt3896198&apikey=c073737c&t=';
  let title=document.getElementById('title');
  let date=document.getElementById('date');
  let col=document.getElementById('collection');
  let ac=document.getElementById('actors');
  let desc=document.getElementById('desc');
  let rt=document.getElementById('imdb');
  let post=document.getElementById('poster');
  function result(){
    let mn=document.getElementById('searchh').value;
    let query=api+mn;
    fetch(query).then((response)=>{
        return response.json();
    }).then(setTimeout(()=>{
        title.innerText='';
        title.innerText='Fetching Details';
        date.innerText='Fetching Details';
        col.innerText='Fetching Details';
        ac.innerText='Fetching Details';
        desc.innerText='Fetching Details';
        rt.innerHTML='Fetching Details';
    }),0).then((movieData)=>{
        title.innerText='';
        date.innerText='';
        col.innerText='';
        ac.innerText='';
        desc.innerText='';
        rt.innerHTML='';
        title.innerText=movieData.Title;
        date.innerText=movieData.Released;
        col.innerText=movieData.BoxOffice;
        ac.innerText=movieData.Actors;
        desc.innerText=movieData.Plot;
        rt.innerHTML=movieData.imdbRating;
        rt.style.backgroundColor='black';
        rt.style.color='white';
        rt.style.padding='5px 10px';
        rt.style.borderRadius='15px';
        post.src=movieData.Poster;
      })
  }
