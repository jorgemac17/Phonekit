function getCart() {
	return JSON.parse(localStorage.getItem('phonekit-cart') || '[]');
}

function setCart(c) {
	localStorage.setItem('phonekit-cart', JSON.stringify(c));
	updateCartCount();
}

function addToCart(id) {
	const strId = String(id);
	const c = getCart();
	const x = c.find(i => i.id === strId);
	if (x) x.qty++;
	else c.push({ id: strId, qty: 1 });
	setCart(c);
}

function updateCartCount() {
	document.querySelectorAll('.cart-count').forEach(e => {
		e.textContent = getCart().reduce((n, x) => n + x.qty, 0);
	});
}

document.addEventListener('click', e => {
	const b = e.target.closest('[data-add]');
	if (b) {
		addToCart(b.dataset.add);
		b.textContent = 'Agregado ✓';
		setTimeout(() => (b.textContent = 'Comprar'), 900);
	}
});

document.addEventListener('DOMContentLoaded', updateCartCount);
