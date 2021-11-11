# From Codevolution
# Redux
Redux is apredictable state container for js apps.Its a state management library. 

   # Importancy:

    - For js apps:
       - Can be used React, Angular, Vue or even vanilla js
        
    - A state container:
       -  Redux stores the state of an application
       -  Consider a React App state of a component
       -  State of an app is the represented by all the individual components of that app
       -  Redux will store and manage the application state.
       -  A state container for js app  

    - Predictable

# Why Redux?
 - Can Manage the state of your application in a predicatable way, redux can help you.  

 - Lifting a state up for far component is not better solution because component tree grows long. We can 
      solve this problem by storing state with Redux. 

 - State is controlled outside the components and if a component need to update its state need to        
      communicates with the state container.     


# Redux will be used opposite of useContext() and useReducer()   


# Three Core Concepts of Redux
 - Store   => A "store" that holds the state of a application. 
 - Action  => An "action" that describes the changes on the state of the application.
 - Reducer => A "reducer" which actually carries out the state transition depending on action. 
   
     These three concepts contains three principle of Redux:
      - First Principle:
          The state of your application is stored in an object three within a single store. 
          Maintain our application state in a single object which would be managed by the Redux store.

      - Second Principle: 
          The only way to change the state is tio emit an action, an object describing what happened.
          
          To update the state of your app, you need to let Redux know about that with an action. 
          Not allowed to directly update the state object. 
      
      - Thired Principle:       
         To specify how the state tree is transformed by actions, you write pure reducers.

          Reducer = (prevState, action) => newState 


 



 
# Installing
- npm insatll redux 
- 

          


