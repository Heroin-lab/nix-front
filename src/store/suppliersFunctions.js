const getSuppliers = async (supplierType) => {
    let response = await fetch("http://45.148.29.94:7777/get-suppliers-by-category",{
        mode: "cors",
        method: "POST",
        headers: {
            "Accept":"*/*",
            "Content-type":"application/json"
        },
        body: JSON.stringify({type: supplierType,})
    })

    return await response.json()
}

export default { getSuppliers }