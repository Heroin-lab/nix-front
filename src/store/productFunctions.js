const loadProducts = async (category) => {
    let response = await fetch("http://45.148.29.94:7777/get-items-by-category",{
        mode: "cors",
        method: "POST",
        headers: {
            "Accept":"*/*",
            "Content-type":"application/json"
        },
        body: JSON.stringify({category_name: category,})
    })

    return await response.json()
}

export default {loadProducts}