const fruitsApi = () =>{
    return fetch("https://www.fruityvice.com/api/fruit/all")
    .then(res=>{
        return res.json()
    })
}

export default fruitsApi;