document.addEventListener('DOMContentLoaded', () => {
	const offers = document.querySelector('[data-offers]');
	if (offers)
		offers.innerHTML = products
			.filter(x => x.offer)
			.slice(0, 4)
			.map(x => card(x))
			.join('');

	const featured = document.querySelector('[data-featured]');
	if (featured)
		featured.innerHTML = products
			.filter(x => !x.offer)
			.concat(products.slice(0, 2))
			.slice(0, 6)
			.map(x => card(x))
			.join('');
});
