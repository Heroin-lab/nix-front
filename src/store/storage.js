import { createStore } from 'vuex'
import productFunctions from "@/store/productFunctions";
import authFunctions from "@/store/authFunctions";
import suppliersFunctions from "@/store/suppliersFunctions";
import orderFunctions from "@/store/orderFunctions";



const store = createStore({
    state: {
        categories: [],
        allProductsObjs: {},
        productContainer: [],
        preparedProductArr: [],
        userAuthStatus: false,
        cardSelectStatus: false,
        suppliersStoredInfo: []
    },
    getters: {
        getAllProducts (state) {
            let preparedArray = []
            let openProductContainer = JSON.parse(JSON.stringify(state.productContainer))
            for (let i = 0; i < openProductContainer.length; i++) {
                preparedArray = [...preparedArray, ...openProductContainer[i]]
            }

            return preparedArray
        },

        getUserAuthStatus (state) {
            return JSON.parse(JSON.stringify(state.userAuthStatus))
        },

        getCardSelectStatus (state) {
            return JSON.parse(JSON.stringify(state.cardSelectStatus))
        },

        getSuppliersInfo (state) {
            return JSON.parse(JSON.stringify(state.suppliersStoredInfo))
        }
    },
    mutations: {
        ADD_NEW_SUPPLIERS_INFO (state, payload) {
            state.suppliersStoredInfo = payload
        },

        DELETE_OLD_SUPPLIERS_INFO (state) {
          state.suppliersStoredInfo = []
        },

        CHANGE_SELECT_CARD_STATUS (state) {
          state.cardSelectStatus = !state.cardSelectStatus
        },

        CHANGE_SELECT_CARD_STATUS_TO_FALSE (state) {
            state.cardSelectStatus = false
        },

        CHANGE_USER_AUTH_STATUS (state, payload) {
            if (payload.resStatus === true) {
                state.userAuthStatus = true
            }
        },

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
               const response = await productFunctions.loadProducts(payload.categoryName)
               await commit('ADD_NEW_PRODUCT_LIST', {newProducts: response, categoryName: payload.categoryName})
           } catch (error) {
               console.log(error)
           }
        },

        async doLogin ({ commit }, payload) {
            try {
                const loginResp = await authFunctions.loginUser(payload.userEmail, payload.userPassword)
                if (loginResp.status === 200) {
                    let readyJson = await loginResp.json()
                    localStorage.setItem("user_id", readyJson.user_id)
                    localStorage.setItem("access_token", readyJson.access_token)
                    localStorage.setItem("refresh_token", readyJson.refresh_token)
                    localStorage.setItem("user_login_status", true)
                    await commit('CHANGE_USER_AUTH_STATUS', {resStatus: true})
                }
            } catch (error) {
                console.log(error)
            }
        },

        async doRegister (commit, payload) {
            try {
                await authFunctions.registerUser(payload.userEmail, payload.userPassword)
            } catch (error) {
                console.log(error)
            }
        },

        async getSuppliersByType ({commit}, payload) {
            try {
                let suppliersResponse = await suppliersFunctions.getSuppliers(payload.supplierType)
                commit("ADD_NEW_SUPPLIERS_INFO", suppliersResponse)
            } catch (error) {
                console.log(error)
            }
        },

        async makeNewOrderRequest (commit, payload) {
            try {
                let orderMakeResponse = await orderFunctions.makeNewOrder(payload)
                if (orderMakeResponse.status === 200) {
                    localStorage.removeItem("Basket")
                    return 200
                } else if (orderMakeResponse.status === 401) {
                    return "You are not logged in!"
                } else {
                    return "Something goes wrong!"
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})

export default store