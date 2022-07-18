const API_SERVER_HOST = 'http://localhost:5000/api/v1';
const CLIENT_HOST = 'http://localhost:3000';


async function rest(path, data={}, method='GET') {
    console.log(method, path);
    let url = `${API_SERVER_HOST}${path}`;
    switch (method.toUpperCase()) {
        case 'GET':
            let param_stacks = [];
            for (let key in data)
                param_stacks.push(`${key}=${data[key]}`);
            url += '?'+param_stacks.join('&');
            data = null;
            break;
        default:
            data = JSON.stringify(data);
            break;
    }
    return await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Origin": CLIENT_HOST,
        },
        body: data,
    })
    .then(response => response.json());
}


export {
    rest,
    API_SERVER_HOST,
}
