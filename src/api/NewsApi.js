export default async function handler(req, res) {
  const { category, page, pageSize, searchQuery } = req.query;

  const apiKey = process.env.NEWS_API_KEY;

  let url;

  if (searchQuery && searchQuery.trim() !== "") {
    url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;
  } else {
    url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}
