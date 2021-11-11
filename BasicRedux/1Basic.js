// Action, Reducers, Store
// From Codevolution
const redux = require('redux')
const createStore = redux.createStore 

// Action Part (Contains the Inroductions of Problem)
// ==============================================
// An "Action" is an object with a type property."Action" is a plain js object.
// An "Action Creator" is a function that returns an "Action".  
 
const BUY_CAKE = 'BUY_CAKE'; 

function buycake(){    // Here, this function is an "Action Creator".  
    return{            // Function returning an "Action".        
        type: BUY_CAKE, 
        info: 'First redux action'    
    } 
}                         
// =============================================
 

// Reducer Part (Initialization and Updating the State)   
// =============================================
// "Reducers" specify "how the app's state changes" in response to "actions" sent to the "store Function".
// "Reducers" "accepts state and action" as "arguments" and "returns" the "next state" of the application.
// (prevState,action) => newState 
  
const initialState = {         
    numOfCakes: 10       
}
                                                
const reducer = (state = initialState, action) =>{ // reducer taking parameter  

    switch(action.type){ //  switch taking "action.type" case
        case BUY_CAKE: return{   // if case is "BUY_CAKE" it will return these below
            ... state, // Making a copy of state object 
            numOfCakes: state.numOfCakes - 1, // state changing 
        }
        default: return state // IT seems default state is state = initialState or initialState.
    }
}
// ============================================


// Storing Part
// ============================================
// Holds application state
// Allows access to state via getState()
// Allows state to be updated via dispatch(action)
// Registers listeners via subscribe(listener)
// Handles unregistering of listeners via the function returned by subscribe(listener)
// Unsbuscribe  
 
const store = createStore(reducer); // Holds application whole state
console.log('Initial state', store.getState()) // Allows access to state via getState() // Initial state printing
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState())); // type of a listener (arrow function)
                                // subscribe() method is Permission for state update
store.dispatch(buycake());  // 1st time Allows state to be updated via dispatch(action)  
                            // Calling the function creator function from "Action"   
store.dispatch(buycake());  // 2nd time Allows state to be updated via dispatch(action)         
store.dispatch(buycake());  // 3rd time Allows state to be updated via dispatch(action) 
store.dispatch(buycake());  // 4th time Allows state to be updated via dispatch(action)                                                                     
unsubscribe();              // Now next permission will be denied ---(i)
store.dispatch(buycake());  // For (i) 5th time not Allows state to be updated via dispatch(action)
