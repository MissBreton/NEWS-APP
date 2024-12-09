const apiKey = 'f113ee27fa254441849b3c3ab38cc760'; // Replace with your actual API key
let country = "us";
let category = "general";
let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
async function fetchNews() {
    document.getElementById('loading').style.display = 'block';
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
    } finally{
        document.getElementById('loading').style.display = 'none';
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
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = article.title;
        const description = document.createElement('p');
        description.className = 'card-text';
        description.textContent = article.description;
        const link = document.createElement('a');
        link.textContent = 'Read more';
        link.target = '_blank';
        link.className = 'btn btn-primary';
        link.href = article.url;
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        card.appendChild(cardBody);
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
document.getElementById('category').addEventListener('change', changeCategory);

//# sourceMappingURL=index.672d4772.js.map
