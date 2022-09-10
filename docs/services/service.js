class Service {

    constructor() {
        
    };
    async getData (url) {
        const response = await fetch(url);
        const data = await response.json()
        return data;
    }
    async postData (url, body) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        const data = await response.json()
        return data;
    }

} 
export {Service}