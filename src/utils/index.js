import axios from "axios";

export function encodeGoogleMapsURLComponent(str) {
	return str.replace(/ /g, "+");
}

export async function getDistance(baselineAddress, destinationAddress) {
	try {
		// const baselineAddress = "956 Richmond St, London, ON N6A 3J5, Canada";
		// const destinationAddress =
		// 	"534 Blackwater Pl, London, ON N5X 4J4, Canada";
		const apiUrl = `http://localhost:3000/distance`;

		const response = await axios.get(apiUrl, {
			params: {
				origins: baselineAddress,
				destinations: destinationAddress,
			},
		});
		// console.log({ response });
		return (response.data.rows[0].elements[0].distance.value)/1000;
	} catch (error) {
		console.error(error.message);
		return null;
	}
}


export async function sendEmail(emailbody) {
	try {
		// PLEASE FIX THIS DENYS 
		const apiUrl = `http://localhost:3000/email`;

		const response = await axios.post(apiUrl, {
			emailbody,
		});
		// console.log({ response });
		return response;
	} catch (error) {
		console.error(error.message);
		return null;
	}
}

export const calculateCranePrice = (floorCount) => {
	// Base price for up to the 5th floor
	let basePrice = 400;

	// Price for each additional floor above the 5th floor
	const additionalPricePerFloor = 50;

	// Calculate the total price based on the floor count
	if (floorCount > 5) {
		basePrice += (floorCount - 5) * additionalPricePerFloor;
	}

	// Double the price if there are multiple points
	return basePrice;
};
