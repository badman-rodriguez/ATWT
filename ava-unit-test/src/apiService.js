import axios from 'axios'

class DummyApiService {
    constructor() {}

    static getProducts() {
        return axios.get('http://demo6410172.mockable.io/getProducts');
    }

    static searchProducts(queryy) {
        return axios.get('http://demo6410172.mockable.io/searchProducts');
    }
}

export default DummyApiService;