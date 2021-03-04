const imageHolder = document.getElementById('imageHolder');
document.getElementById('gifForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('searchTerm');
    loadGIF(findGIF(input.value));
    input.value = "";
    
});

document.getElementById('clearGifs').addEventListener('click', (e) => {
    e.preventDefault();
    clearGIFs();
})

function clearGIFs(){
    document.getElementById('imageHolder').innerHTML = '';
}

async function findGIF(q) {
    const api_key = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params : {q, api_key}});
    console.log(res);
    return (res.data.data[0].id);
}

async function loadGIF(id) {
    const holder = document.getElementById('imageHolder');
    id = await id;
    let url = `https://media2.giphy.com/media/${id}/giphy.gif`;
    const newdiv = document.createElement('div');
    newdiv.classList.add('col-4', 'rounded');
    const newGIF = document.createElement('img');
    newGIF.classList.add('img-fluid', 'rounded');
    newGIF.setAttribute('src', url);
    newdiv.append(newGIF);

    holder.append(newdiv);
    

}

