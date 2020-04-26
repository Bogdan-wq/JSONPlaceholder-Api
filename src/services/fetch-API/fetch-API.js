export default class FetchService {

    constructor() {
        this._apiBase = 'https://jsonplaceholder.typicode.com';
    }


    async getData(url) {
        const res = await fetch(`${this._apiBase}${url}`);
            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, received ${res.status}`)
            }
        const body = await res.json();
        return body;
    }
}






