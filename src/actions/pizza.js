export const UPDATE_BASE = 'UPDATE_BASE'
export const UPDATE_SAUCE = 'UPDATE_SAUCE'
export const UPDATE_TOPPINGS = 'UPDATE_TOPPINGS'
export const UPDATE_DRONE = 'UPDATE_DRONE'

export const updateBase = (update) => {
    console.log(update)
    return {
        type: UPDATE_BASE,
        update
    }
}

export const updateSauce = (update) => {
    console.log(update)
    return {
        type: UPDATE_SAUCE,
        update
    }
}

export const updateToppings = (update) => {
    console.log(update)
    return {
        type: UPDATE_TOPPINGS,
        update
    }
}

export const updateDrone = (update) => {
    console.log(update)
    return {
        type: UPDATE_DRONE,
        update
    }
}