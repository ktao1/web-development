const form = document.querySelector('form');
const div = document.querySelector('#result');

form.addEventListener("submit", async e => {
    e.preventDefault();
    const userInput = form.elements.query.value;
    const config = {params: {q: userInput}}
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = '';
    return res.data;
});

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img')
            img.src = result.show.image.medium;
            div.append(img);
        }
    }
}
