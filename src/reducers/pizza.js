export const pizza = (state = {}, action) => {
    switch (action.type){
        case 'UPDATE_BASE':
            console.log(action)
            return {...state, base: action.update}
        case 'UPDATE_SAUCE':
            console.log(action)
            return {...state, sauce: action.update}
        case 'UPDATE_TOPPINGS':
            console.log(action)
            return {...state, toppings: action.update}
        case 'UPDATE_DRONE':
            console.log(action)
            return {...state, drone: action.update}
        default:
            return state
    }
}