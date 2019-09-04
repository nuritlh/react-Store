import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 962ea1ca443f88bc169fc4eed18d641f69f2cfbe63c34311f5b5fdf5831a167b'
    }
});