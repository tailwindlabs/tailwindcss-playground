let el = document.getElementsByTagName('h1')[0];

let items = el.dataset.items.split(', ');

TweenMax.to(el.nextElementSibling, 0.6, {
	opacity: 0, 
	repeat: -1, 
	ease: Linear.easeNone
});

let tl = new TimelineMax({repeat: -1});

let tmp = { x: 0 };

items.forEach((word, idx) => {
	let chars = word.split('');

	chars.forEach(char => {
		tl.to(tmp, 0.1, { x: '+='+1, onComplete: () => {
			el.textContent += char;
		} });
	});

	tl.to(tmp, 1, {x: '+='+1});

	chars.forEach(char => {
		tl.to(tmp, 0.05, { x: '+='+1, onComplete: () => {
			el.textContent = el.textContent.slice(0, -1);
		} });
	})

});






