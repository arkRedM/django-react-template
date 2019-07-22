import axios from 'axios';

// switch this bool
// let isTesting = true;
let isTesting = false;
let baseUrl;
if (isTesting){
    // base url of backend
    baseUrl = 'http://localhost:8000';
}else{
    baseUrl = ''
}

function example() {
    return axios.get(baseUrl + '/example/')
}


export {
    example
};
