export const initialState = {
    total: 0,
    products: [],
}

const storeReducer = (state, action) => {
    switch(action.type){
        //add to basket
        case "add":
            return{
                ...state,
                products: action.payload
            }
        case "remove":
            return {
                ...state,
                products: action.payload
            }
        case "update price":
            return {
                ...state,
                total: action.payload
            }
        default: throw Error("Cannot match case for reducer");
    }
}

export default storeReducer;