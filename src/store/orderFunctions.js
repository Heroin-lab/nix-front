const makeNewOrder = async (orderData) => {
    let response = await fetch("http://45.148.29.94:7777/add-order", {
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

const getAllUserOrders = async (user_id) => {
    let response = await fetch("http://45.148.29.94:7777/get-all-user-orders", {
        mode: "cors",
        method: "POST",
        headers: {
            "Accept":"*/*",
            "Content-type":"application/json",
            "Authorization": 'Bearer ' + localStorage.getItem("access_token"),
        },
        body: JSON.stringify(user_id)
    })

    return await response
}

export default { makeNewOrder, getAllUserOrders }