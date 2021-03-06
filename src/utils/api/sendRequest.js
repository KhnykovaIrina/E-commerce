import { stringify } from 'query-string';

const sendRequest = ({ url, method, body, headers = {}, queryParams = {} }) => {
    const options = {
        method: method,
        body: body ? JSON.stringify(body) : null,
        headers: new Headers({
            'content-type': 'application/json',
            ...headers
        }),
    };


    if (queryParams) {
        url = `${url}?${stringify(queryParams)}`;
    }

    return fetch(url, options).then((res) => {
        if (res.status === 204) {
            return
        } else if (res.ok) {
            return res.json();
        } else {
            return res.json().then(function (json) {
                return Promise.reject({
                    status: res.status,
                    ok: false,
                    message: json.message,
                    body: json
                });
            });
        }
    });
};

export default sendRequest;
