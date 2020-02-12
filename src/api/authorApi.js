import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'http://localhost:3001/authors/';

console.log(process.env.API_URL);

export function getAuthors() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}
