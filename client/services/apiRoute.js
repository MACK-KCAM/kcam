class Api {
    constructor(host) {
        this.host = host;
        console.log(this.host);
    }
    getRoute(routeName) {
        console.log(routeName)
        return `${this.host}/api/${routeName}`
    }
}

const apiRoute = Object.freeze(new Api("http://localhost:3000"));

export default apiRoute;
