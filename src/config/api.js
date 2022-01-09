export const CoinList = (page) =>
  `http://185.239.106.156:8000/codal/data/an/?page=${page}`;

export const CoinListElse = (page) =>
`http://185.239.106.156:8000/codal/data/else/?page=${page}`;

export const Search = (search) =>
  `http://185.239.106.156:8000/codal/search/?symbol=${search}`;

export const SingalSahmShare = (ticker) =>
`http://185.239.106.156:8000/codal/share/${ticker}/all/`;

export const SingalSahm = (id) =>
`http://185.239.106.156:8000/codal/data/capital/${id}/`;

export const SingalSahmShareAn = (ticker,page) =>
`http://185.239.106.156:8000/codal/share/${ticker}/an/?page=${page}`;
export const SingalSahmShareElse= (ticker, page) =>
`http://185.239.106.156:8000/codal/share/${ticker}/else/?page=${page}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
