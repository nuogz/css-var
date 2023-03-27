import CSSVar from './CSSVar.js';



export interface CSSVarProxy {
	[name: string]: string;
}

export interface CSSVarProxySelf {
	$: CSSVar;
}
