const fetch = require('node-fetch')

const res = fetch("https://www.goodreads.com/search.xml?id=4432&key=x6B2RxGOiFd56p3LxJan0fRFZOTSuJvJnDQyt4e8"
)
.then(response => response.text())

