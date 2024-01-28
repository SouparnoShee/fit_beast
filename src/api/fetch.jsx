export const dataFetch = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

export const apioptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_MY_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

