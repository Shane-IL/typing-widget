const TypingWidget = new function () {
	const _this = this;

	_this.init = (text, containerEl, options) => {
		const longPause = options.longPause || 800;
		const keyStrokePause =  options.keyStrokePause || 200;
		const deletePause =  options.deletePause || 50;
		let i = 0;
		let timeout = longPause;
		let forward = true;
		const elements = createElements();
		containerEl.appendChild(elements.widgetEl);
		writeChar(elements.textEl, text, i);

		function createElements() {
			const widgetEl = document.createElement('div');
			widgetEl.className = 'typing-widget';
			setStyleFromObj(widgetEl, {
				textAlign: 'center',
				display: 'grid'
			});
			const displayEl = document.createElement('div');
			displayEl.className = 'typing-widget-display';
			setStyleFromObj(displayEl, {
				display: 'grid',
				gridAutoFlow: 'column',
				textAlign: 'center',
				margin: 'auto',
				gridAutoColumns: 'max-content',
				placeSelf: 'center'
			});
			const textEl = document.createElement('div');
			textEl.className = 'typing-widget-text';
			setStyleFromObj(textEl, {
				textTransform: 'uppercase',
				fontWeight: options.fontWeight || 300,
				fontSize: options.fontSize ? `${options.fontSize}px` : '18px',
				color: options.textColor || '#000',
				placeSelf: 'end'
			});
			const cursorEl = document.createElement('div');
			cursorEl.className = 'typing-widget-cursor';
			cursorEl.innerText = "|";
			setStyleFromObj(cursorEl, {
				fontSize: options.fontSize ?  `${options.fontSize*1.2}px` : '20px',
				color: options.cursorColor || '#000',
				placeSelf: 'end'
			});
			displayEl.appendChild(textEl);
			displayEl.appendChild(cursorEl);
			widgetEl.appendChild(displayEl);
			return {
				widgetEl,
				displayEl,
				textEl,
				cursorEl
			}
		}

		function writeChar(textEl, value, i) {
			if(i <= value.length && forward) {
				i += 1;
				timeout = keyStrokePause;
				textEl.innerText = value.slice(0, i);
			} else if (i > value.length && forward) {
				i -= 1;
				forward = false;
				timeout = longPause;
			} else if(!forward) {
				i -= 1;
				timeout = deletePause;
				textEl.innerText = value.slice(0, i);
				if(i === 0) {
					timeout = longPause;
					forward =true;
				}
			}
			setTimeout(() => writeChar(textEl, value, i), timeout);
		}

		function setStyleFromObj(el, styleObject) {
			for(let key of Object.keys(styleObject)) {
				el.style[key] = styleObject[key];
			}
		}
	}
}();
