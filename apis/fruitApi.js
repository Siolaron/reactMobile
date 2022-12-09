export const fruitsAll = () =>{
    return fetch('https://www.fruityvice.com/api/fruit/all')
    .then(res=>{
        return res.json()
    })
}

export const fruitID = (id) =>{
    return fetch('https://www.fruityvice.com/api/fruit/'+id)
    .then(res=>{
        return res.json()
    })
}

