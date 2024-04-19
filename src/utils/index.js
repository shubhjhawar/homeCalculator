import axios from 'axios';

export async function getDistance() {
    try {
        const baselineAddress = '956 Richmond St, London, ON N6A 3J5, Canada';
        const destinationAddress = '534 Blackwater Pl, London, ON N5X 4J4, Canada';
        const apiKey = 'AIzaSyAuIchE5mdfEw_S7oM8I5ZkpCcQyWOMg-Y';
        const apiUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${baselineAddress}&destination=${destinationAddress}&key=${apiKey}`
        
        const response = await axios.get(apiUrl)
        console.log({response})
        return response.data.rows[0].elements;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}
