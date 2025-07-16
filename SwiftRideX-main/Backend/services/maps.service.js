const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    try {
        const apiKey = process.env.GOOGLE_MAPES_API; // Replace with your actual API key
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                latitude: location.lat,
                longitude: location.lng
            };
        } else {
            throw new Error(`Geocoding error: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw error;
    }
};

module.exports.getDistanceTime = async (origin, destination) => {

    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPES_API; // Replace with your actual API key
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {

            if (response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
                throw new Error('No route found between the origin and destination');
            }




            return response.data.rows[0].elements[0];
            } else {
                throw new Error(`Distance and time error: ${response.data.status}`);
            }
        }
    catch (error) {
        console.error('Error fetching distance and time:', error.message);
        throw error
    }

} 

module.exports.getAutoCompleteSuggestions = async (input) => {

    if (!input) {
        throw new Error('query is required');
    }
    const apiKey = process.env.GOOGLE_MAPES_API; // Replace with your actual API key
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions;
        } else {
            throw new Error(`Autocomplete error: ${response.data.status}`);
        }
        } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error.message);
        throw error;
        }
    }
