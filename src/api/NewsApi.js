export default async function handler(req, res) {
  const { category, page, pageSize, searchQuery } = req.query;

  let url;

  if (searchQuery && searchQuery.trim() !== "") {
    url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`;
  } else {
    url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}
