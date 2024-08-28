export const initialFormState = {
    name : "",
    email : "",
    password: "",
}

export function formReducer(formState = initialFormState, action) {
    switch (action.type) {
        case 'Update_Name':
            return {
                ...formState,
                name : action.payload
            }
        case 'Update_Email':
            return {
                ...formState,
                email : action.payload
            }
        case 'Update_Password':
            return {
                ...formState,
                password: action.payload
            }
        case 'Submit_Form':
            console.log('Form Submitted : ', formState);
            return initialFormState;
        default :
            return formState;
    }
}