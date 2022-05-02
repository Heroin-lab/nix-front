const loginUser = async (email, password) => {
    let response = await fetch("http://45.148.29.94:7777/login", {
        mode: "cors",
        method: "POST",
        headers: {
            "Accept":"*/*",
            "Content-type":"application/json"
        },
        body: JSON.stringify({email: email, password: password})
    })

    return await response
}

const registerUser = async (email, password) => {
    let response = await fetch("http://45.148.29.94:7777/register", {
        mode: "cors",
        method: "POST",
        headers: {
            "Accept":"*/*",
            "Content-type":"application/json"
        },
        body: JSON.stringify({email: email, password: password})
    })

    return await response.json()
}

const refreshUserToken = async (refToken) => {
    let response = await fetch("http://45.148.29.94:7777/update-token", {
        mode: "cors",
        method: "GET",
        headers: {
            "Accept":"*/*",
            "Content-type":"application/json",
            "Authorization": 'Bearer ' + refToken
        },
    })

    return await response
}

export default { loginUser, registerUser, refreshUserToken }