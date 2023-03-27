import CSSVar from './CSSVar.js';



/**
 * @param {HTMLElement} scope
 * @returns {import('./CSSVarProxy.d.ts').CSSVarProxy & import('./CSSVarProxy.d.ts').CSSVarProxySelf}
 */
export const newCV = (scope = document.documentElement) => {
	const cssvar = new CSSVar(scope);

	const cssvarFreeze = Object.freeze(cssvar);

	const result = new Proxy(
		cssvarFreeze,
		{
			get(self, key) {
				if(key == '$') { return self; }

				return self.get(key);
			},
			set(self, key, value) {
				return self.set(key, value, value?.endsWith?.('!important') ? true : false), true;
			},
			deleteProperty(self, key) {
				return self.del(key);
			}
		}
	);

	return result;
};



const CV = newCV();

export default CV;
export { CSSVar };
