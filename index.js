setSlide('.images', 'BT');

function setSlide(fatherContainer, transformation) {
	let cssLeave = 'leave' + transformation;
	let cssStay  = 'stay'  + transformation;
	let cssEnter = 'enter' + transformation;

	let $children = $(fatherContainer).children();
	let length = $children.length;
	var n = 0;
	if (length <= 1) {
		return;
	}
	
	init();
	
	setInterval(() => {
		changeStyle($children, n, cssStay, cssLeave).one('transitionend', (cur) => {
			$(cur.currentTarget).removeClass(cssLeave).addClass(cssEnter);
			console.log($(cur.currentTarget));
		});
		changeStyle($children, n + 1, cssEnter, cssStay);
		n = n + 1;
	}, 1500);

	function changeStyle($ele, seq, fromStyle, toStyle) {
		return $ele.eq(cycle(seq, length)).removeClass(fromStyle).addClass(toStyle);
	}

	function cycle(n, length) {
		n = n % length;
		return n;
	}
	
	function init() {
		$children.eq(0).addClass(cssStay);
		for (let i = 1; i < $children.length; i++) {
			$children.eq(i).addClass(cssEnter);
		}
	}
}

