const loadProducts = async (category) => {
    let response = await fetch("http://localhost:7777/get-items-by-category",{
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