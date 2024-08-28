const apiUrl = 'https://zillow56.p.rapidapi.com/walk_transit_bike_score?zpid=20485700';

export const fetchPropertyData = async () => {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6d6979c6b6mshb3f34e8a86a75bdp13644djsna2f9762dd0d8',
            'x-rapidapi-host': 'zillow56.p.rapidapi.com',
        },
    };
    
    try {
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching property data:', error);
    }
};
