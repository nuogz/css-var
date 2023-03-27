export default class CSSVar {
    /**
     * @param {HTMLElement} scope
     */
    constructor(scope?: HTMLElement);
    /** @type {HTMLElement} */
    scope: HTMLElement;
    /**
     * @param {HTMLElement} key
     * @returns {string}
     */
    get(key: HTMLElement): string;
    /**
     * @param {string} key
     * @param {string|null} value
     * @param {boolean} [important=false]
     * @returns {void}
     */
    set(key: string, value: string | null, important?: boolean): void;
    /**
     * @param {string} key
     * @returns {string}
     */
    del(key: string): string;
    /**
     * @param {Object<string, string>} values
     * @returns {void}
     */
    setAll(values: {
        [x: string]: string;
    }): void;
}
