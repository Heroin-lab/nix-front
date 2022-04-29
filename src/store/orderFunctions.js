const makeNewOrder = async (orderData) => {
    let response = await fetch("http://localhost:7777/add-order", {
        mode: "cors",
        method: "POST",
        headers: {
            "Accept":"*/*",
            "Content-type":"application/json",
            "Authorization": 'Bearer ' + localStorage.getItem("access_token"),
        },
        body: JSON.stringify(orderData)
    })

    return await response
}

export default { makeNewOrder }