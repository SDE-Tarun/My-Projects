const form = document.querySelector('form');

const inp = document.querySelector('#inp');

const list = document.querySelector('#list');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log(inp.value);
    const inpText = inp.value;
    console.log(inpText);
    inp.value = '';

    getMovie(inpText);

})

function getMovie(searchText) {
    const URL = `https://api.tvmaze.com/search/shows?q=${searchText}`;
    
    list.innerText = '';
    
    axios.get(URL)
    .then((res)=>{
        // console.log(res);
        // console.log(res.data);
        const data = res.data;
        data.forEach(obj => {
            // console.log(obj);
            // console.log(obj.show);
            // console.log(obj.show.image);
            console.log(obj.show.image.medium);
            const image = document.createElement('img');
            image.setAttribute('src', obj.show.image.medium)
            image.style.margin = '12px';
            list.append(image);
        });
        
    })
    .catch((err)=>{
        console.log(err);
    })
}