export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'fb0856527bmsh21c72026a35bd98p189853jsne39c0fd15dd4',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
