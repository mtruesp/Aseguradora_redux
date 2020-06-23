import { combineReducers } from 'redux'

const initList = [
    {
        name: 'Manuel', 
        amount: 20
    }, 
    {
        name: 'Luis', amount: 100
    }        
]

const policiesReducer = (listNames = initList, action) => {
    switch(action.type){
        case "CREATE_POLICY":
            return [...listNames, action.payload]
        case "DELETE_POLICY":
            return listNames.filter((policy) => { return policy.name !== action.payload })
        default:
            return listNames
    }
}

const financesReducer = (totalAmount = 120, action) => {
    switch(action.type){
        case "CREATE_POLICY":
            return totalAmount + action.payload.amount
        case "CREATE_CLAIM":
            return totalAmount - action.payload.amount
        default:
            return totalAmount
    }
}

const claimReducer = (listOfClaims = [], action) => {
    switch(action.type){
        case "CREATE_CLAIM":
            return [...listOfClaims, action.payload]
        default:
            return listOfClaims
    }

}

const nameReducer = (name='Aseguradora', action) => {
    return name
}

export default combineReducers({
    insuranceName: nameReducer,
    namesList: policiesReducer,
    totalAmount: financesReducer,
    claimsList: claimReducer
})