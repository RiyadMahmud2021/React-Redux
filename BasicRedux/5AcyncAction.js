//                               Synchronous Action
// As soon as an action was dispathced, the state was immediately updated. 
// If you dispatch the BUY_CAKE action, the numOfCakes was right away decremented by 1. 
// Same with BUY_ICE action as well. 



//                                Asnchronous Actions
// Asynchronous API calls to fetch data from an end point and use that data in your application. 
//  
// We need to put these in our Application 

// 1. Actions: 
//           FETCH_USERS_REQUEST (Fetch list of users)
//           FETCH_USERS_SUCCESS (Fetched successfully)
//           FETCH_USERS_FAILURE (Error Fetching the data) 

// 2. States:
//         state = {
//             loading: true, //  loading = display a loading spinner in your component
//             data: [], // list of users 
//             error:'' // display error to the user 
//         }

// 3. Reducers:
//         case: FETCH_USERS_REQUEST
//                    loading: true
//         case: FETCH_USERS_SUCCESS
//                    loading: false
//                    users: data  // ( from API)

//                                Async Action Creator 
// axios      : Requests to an API end point
// Redux-Thunk: Define async actions creators


const redux = require('redux'),
const createStore = redux.createStore,
const applyMiddleware = redux.applyMiddleware, 
const thunkMiddleware = require('redux-thunk').default 
const axios = require('axios')

const initialState ={
    loading: false,
    usersa: [],
    errors: '',
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST",
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE", 


const fetchUserRequest = () =>{
    return{
        type: FETCH_USERS_REQUEST,
        info: 'fetch User Request', 
    }
}

const fetchUserSuccess = (users) =>{
    return{
        type: FETCH_USERS_SUCCESS, 
        payload: users, 
    }
}

const fetchUserFailure = () =>{
    return{
        type: FETCH_USERS_FAILURE, 
        payload: error,  
    }
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
    
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload,
            }
    }
}

const fetchUsers = () => {
     return function(dispatch){ 
         axios.get('https://jsonplaceholder.typicode.com/users')
         .than(response => {
             // response.data is the array of users
         })
         .catch(error => {
             // error.message is the error description
         })
     }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware)); 