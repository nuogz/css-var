const HTML = document.documentElement;


const newCV = (scope = HTML) => new Proxy(
	Object.freeze({
		scope,
		new: newCV,

		get(key) { return this.scope.style.getPropertyValue(`--${key}`); },
		set(key, value) { return this.scope.style.setProperty(`--${key}`, value); },
		del(key) { return this.scope.style.removeProperty(`--${key}`); },

		setAll(values) { for(const key in values) { this.set(key, values[key]); } },
	}),
	{
		get(self, key) {
			if(key == '$') { return self; }

			return self.get(key);
		},
		set(self, key, value) {
			return self.set(key, value), true;
		},
		deleteProperty(self, key) {
			return self.del(key);
		}
	}
);


const CV = newCV();



export default CV;
