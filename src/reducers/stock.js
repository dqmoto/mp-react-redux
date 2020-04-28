
//Stock Reducer
const stockDataReducerDefaultState = []
export default (state = stockDataReducerDefaultState, action ) => {
    switch(action.type) {
    case 'SET_STOCK_BIKES':
              //  console.log(action.stockBikes)
              
                return action.stockBikes;
    default:
        return state;
    }
}