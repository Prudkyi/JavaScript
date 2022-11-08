class FetchAjax {

    constructor (url) {
        this.url = url;
        this.data = false;
    }

    getData () {
        return fetch(this.url)
            .then(function (response){
                return response.json();
            })
            .then(function (data){
                return data;
            })
    }

}

export default FetchAjax;