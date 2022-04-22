import { createStore } from 'vuex'

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

const store = createStore({
    state: {
        categories: [],
        allProductsObjs: {},
        productContainer: [],
        preparedProductArr: []
    },
    getters: {
        getAllProducts (state) {
            let preparedArray = []
            let openProductContainer = JSON.parse(JSON.stringify(state.productContainer))
            for (let i = 0; i < openProductContainer.length; i++) {
                preparedArray = [...preparedArray, ...openProductContainer[i]]
            }


            return preparedArray
        }
    },
    mutations: {
        ADD_NEW_PRODUCT_LIST (state, payload) {
            state.allProductsObjs = Object.assign(state.allProductsObjs, {[payload.categoryName]:payload.newProducts})
            state.productContainer.push(payload.newProducts)
            state.categories.push(payload.categoryName)
        },

        ADD_EXIST_PRODUCT_LIST (state, payload) {
            const products = Object.getOwnPropertyDescriptor(state.allProductsObjs, payload)
            if (!state.categories.includes(payload)) {
                state.productContainer.push(products.value)
            }
        },

        DELETE_PRODUCT_FROM_CONTAINER (state, payload) {
            let categoryIndex = state.categories.indexOf(payload)
            let arrayIndex = state.productContainer.indexOf(state.allProductsObjs[payload])
            if (arrayIndex !== -1) {
                state.productContainer.splice(arrayIndex, 1)
            }
            if (categoryIndex !== -1) {
                state.categories.splice(categoryIndex, 1)
            }
        }
    },
    actions: {
        async getProductsByCategory({ commit, state }, payload) {
            if (payload.categoryName in state.allProductsObjs) {
                commit('ADD_EXIST_PRODUCT_LIST', payload.categoryName)
                return
            }

           try {
               const response = await loadProducts(payload.categoryName)
               await commit('ADD_NEW_PRODUCT_LIST', {newProducts: response, categoryName: payload.categoryName})
           } catch (error) {
               console.log(error)
           }
        },
    }
})

export default store