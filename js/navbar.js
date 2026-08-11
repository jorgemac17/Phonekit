const path = location.pathname.split('/').pop() || 'index.html';
const isInPages = location.pathname.includes('/pages/');
const active = path.includes('productos')
	? 'productos'
	: path.includes('contacto')
	? 'contacto'
	: '';

const indexHref = isInPages ? '../index.html' : 'index.html';
const productosHref = isInPages ? 'productos.html' : 'pages/productos.html';
const contactoHref = isInPages ? 'contacto.html' : 'pages/contacto.html';
const carritoHref = isInPages ? 'carrito.html' : 'pages/carrito.html';

document.querySelectorAll('.site-header').forEach(h => {
	h.innerHTML = `
	<nav class="nav">
		<a class="brand" href="${indexHref}"><span class="brand-mark">▣</span>PHONEKIT.CBA</a>
		<div class="nav-links">
			<a class="${!active ? 'active' : ''}" href="${indexHref}">Inicio</a>
			<a class="${active === 'productos' ? 'active' : ''}" href="${productosHref}">Productos</a>
			<a class="${active === 'contacto' ? 'active' : ''}" href="${contactoHref}">Contacto</a>
		</div>
		<div class="nav-tools">
			<span>⌕</span>
			<a class="cart-icon" href="${carritoHref}">🛒<b class="cart-count">0</b></a>
		</div>
	</nav>`;
});

document.querySelectorAll('.site-footer').forEach(f => {
	f.innerHTML = `
	<div class="footer-grid">
		<div>
			<a class="brand" href="${indexHref}"><span class="brand-mark">▣</span>PHONEKIT.CBA</a>
			<p>Tu tienda de confianza para encontrar los mejores smartphones, fundas protectoras y accesorios con envíos a todo el país.</p>
			<div class="social"><a href="https://www.instagram.com/phonekit.cba/" target="_blank" rel="noopener noreferrer">◎</a><a href="https://wa.me/5493516309446" target="_blank" rel="noopener noreferrer">♥</a><a href="#">▷</a></div>
		</div>
		<div>
			<h3>Navegación</h3>
			<a href="${indexHref}">Inicio</a>
			<a href="${productosHref}">Productos</a>
			<a href="${productosHref}?ofertas=1">Ofertas</a>
			<a href="#">Nosotros</a>
			<a href="#">Sucursales</a>
		</div>
		<div>
			<h3>Productos</h3>
			<a href="${productosHref}?categoria=Celulares">Celulares</a>
			<a href="#">Fundas Premium</a>
			<a href="#">Smartwatches</a>
			<a href="#">Cargadores Rápidos</a>
			<a href="#">Auriculares Bluetooth</a>
		</div>
		<div>
			<h3>Contacto</h3>
			<p>Plaza Rivadavia, Alta cba</p>
			<p>+54 351 630-9446</p>
			<p>davidlugones09@gmail.com</p>
			<p>Viernes-Sábado-Domingo: 15:00 - 21:30 hs</p>
		</div>
	</div>
	<div class="copyright">Copyright © 2026 PHONEKIT.CBA Todos los derechos reservados.<span>Términos y condiciones | Política de privacidad</span></div>`;
});
