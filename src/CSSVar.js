export default class CSSVar {
	/** @type {HTMLElement} */
	scope;

	/**
	 * @param {HTMLElement} scope
	 */
	constructor(scope = document.documentElement) {
		this.scope = scope;
	}


	/**
	 * @param {HTMLElement} key
	 * @returns {string}
	 */
	get(key) {
		return this.scope.style.getPropertyValue(`--${key}`);
	}

	/**
	 * @param {string} key
	 * @param {string|null} value
	 * @param {boolean} [important=false]
	 * @returns {void}
	 */
	set(key, value, important = false) {
		return this.scope.style.setProperty(`--${key}`, value, important ? 'important' : undefined);
	}

	/**
	 * @param {string} key
	 * @returns {string}
	 */
	del(key) {
		return this.scope.style.removeProperty(`--${key}`);
	}

	/**
	 * @param {Object<string, string>} values
	 * @returns {void}
	 */
	setAll(values) {
		for(const key in values) {
			this.set(key, values[key]);
		}
	}
}
