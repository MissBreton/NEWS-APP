const apiKey = 'f113ee27fa254441849b3c3ab38cc760'; // Replace with your actual API key
let country = "us";
let category = "general";
let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}`;
async function fetchNews() {
    try {
        const response = await fetch(url, {
            headers: {
                'X-Api-Key': apiKey,
                'Authorization': apiKey // You can use either 'X-Api-Key' or 'Authorization'
            }
        });
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('There was an error!', error);
    }
}
function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    newsDiv.innerHTML = ''; // Clear previous news articles
    for (const article of articles){
        const articleDiv = document.createElement('div');
        articleDiv.className = 'col-md-4 mb-4'; // Bootstrap column classes
        const card = document.createElement('div');
        card.className = 'article card h-100'; // Bootstrap card classes
        // Create and append a headline to the articleDiv
        const title = document.createElement('h4');
        title.textContent = article.title;
        title.className = 'card-title';
        card.appendChild(title);
        // Create and append a description to the articleDiv
        const description = document.createElement('p');
        description.textContent = article.description;
        description.className = 'card-text';
        card.appendChild(description);
        // Create and append an image to the articleDiv
        if (article.urlToImage) {
            const img = document.createElement('img');
            img.src = article.urlToImage;
            img.alt = article.title;
            img.className = 'card-img-top';
            card.appendChild(img);
        }
        // Create and append a link to the full article
        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = 'Read more';
        link.target = '_blank';
        link.className = 'btn btn-primary';
        card.appendChild(link);
        articleDiv.appendChild(card);
        newsDiv.appendChild(articleDiv);
    }
}
function changeCategory() {
    category = document.getElementById('category').value;
    url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
    fetchNews();
}
fetchNews();

//# sourceMappingURL=index.672d4772.js.map
