const API_SERVER_HOST = 'http://localhost:5000/api/v1';


async function rest(path, data={}, method='GET') {
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
            break;
    }
    const response = await fetch(url, {
        method: method,
        data: data,
    });
    return await response.json();
}


export {
    rest,
}
