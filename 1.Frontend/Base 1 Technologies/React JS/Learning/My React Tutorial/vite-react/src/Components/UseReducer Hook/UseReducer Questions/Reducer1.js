export const initialCounterState = {count : 0}

export const counterReducer = (counterState = initialCounterState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count : counterState.count + 1
            }
        case 'DECREMENT':
            return {
                count : counterState.count - 1
            }
        case 'RESET':
            return {
                count : 0
            }
        default:
            return counterState;
    }
}