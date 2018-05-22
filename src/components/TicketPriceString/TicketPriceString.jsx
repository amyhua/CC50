import React from 'react';

export default ({price, note}) => {
	return !isNaN(price) ?
		note ?
		`$${price} (${note})` :
		`$${price}` :
		price;
};