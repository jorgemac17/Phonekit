const products = [
	{
		id: 1,
		name: 'iPhone 15 Pro',
		category: 'Celulares',
		price: 1099,
		old: 1299,
		offer: 15,
		img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80',
		desc: 'Chasis de titanio de grado aeroespacial'
	},
	{
		id: 2,
		name: 'Samsung Galaxy S24',
		category: 'Celulares',
		price: 899,
		old: 999,
		offer: 10,
		img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80',
		desc: 'Galaxy con cámara de 50MP, pantalla brillante'
	},
	{
		id: 3,
		name: 'Funda Silicona Premium',
		category: 'Fundas',
		price: 25,
		old: 35,
		offer: 28,
		img: 'https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=600&q=80',
		desc: 'Textura con silicona suave y absorción de golpes'
	},
	{
		id: 4,
		name: 'Apple Watch Series 9',
		category: 'Smartwatch',
		price: 449,
		img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
		desc: 'Monitoreo avanzado de salud y pantalla siempre activa'
	},
	{
		id: 5,
		name: 'AirPods Pro 2',
		category: 'Auriculares',
		price: 249,
		old: 270,
		offer: 10,
		img: 'https://images.unsplash.com/photo-1606741965429-86d3d0799a64?auto=format&fit=crop&w=600&q=80',
		desc: 'Cancelación activa de ruido y audio adaptativo'
	},
	{
		id: 6,
		name: 'Xiaomi Redmi Note 13',
		category: 'Celulares',
		price: 299,
		img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
		desc: 'Carga rápida y pantalla AMOLED'
	},
	{
		id: 7,
		name: 'Cargador Rápido 65W',
		category: 'Accesorios',
		price: 45,
		old: 59,
		offer: 23,
		img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
		desc: 'Carga ultrarrápida GaN para múltiples dispositivos'
	},
	{
		id: 8,
		name: 'Tablet Pro 11',
		category: 'Tablets',
		price: 750,
		img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80',
		desc: 'Pantalla 2K y rendimiento gráfico profesional'
	},
	{
		id: 9,
		name: 'Smartwatch Fit Band',
		category: 'Smartwatch',
		price: 89,
		offer: 25,
		img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80',
		desc: 'Monitoreo de actividad y batería de larga duración'
	},
	{
		id: 10,
		name: 'Earbuds Pro Sound',
		category: 'Auriculares',
		price: 120,
		img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
		desc: 'Cancelación activa de ruido inteligente'
	}
];
function money(n) {
	return '$' + n.toLocaleString('es-AR');
}

function card(p, detailed = false) {
	return `
	<article class="product-card">
		<img src="${p.img}" alt="${p.name}">
		${p.offer ? `<span class="badge">-${p.offer}%</span>` : ''}
		<h3>${p.name}</h3>
		${
			detailed
				? '<div style="color:#eaff00;font-size:11px">☆ ☆ ☆ ☆ ☆ <span style="color:#62b477;float:right">● En stock</span></div>'
				: ''
		}
		<p>${p.desc}</p>
		<div class="price">${money(p.price)}${p.old ? `<span class="old-price">${money(p.old)}</span>` : ''}</div>
		<button class="buy" data-add="${p.id}">Comprar</button>
		${
			detailed
				? ` <a class="button outline" style="position:absolute;bottom:10px;right:10px;padding:7px 14px;font-size:10px" href="#">Ver detalles</a>`
				: ''
		}
	</article>`;
}
