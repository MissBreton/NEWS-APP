# Code Citations

## License: unknown
https://github.com/fundiculous/NewsApp/tree/405bfaedc35bf3df9070012ee413599aeed34835/scripts.js

```javascript
//newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    async function fetchNews() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }
```

