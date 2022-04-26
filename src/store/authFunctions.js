const loginUser = async (email, password) => {
    let response = await fetch("http://localhost:7777/login", {
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
    let response = await fetch("http://localhost:7777/register", {
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

export default { loginUser, registerUser }