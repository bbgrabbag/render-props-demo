const initialState = {
    data: [{ name: "Ben" }],
    loading: true,
    err:
        {
            code: null,
            msg: ""
        }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_CONTACTS":
            return {
                ...state,
                loading: false,
                data: action.contacts
            }
        case "DELETE_CONTACT":
            return {
                ...state,
                data: state.data.filter((item, i) => i !== action.index)
            }
        case "EDIT_CONTACT":
            return {
                ...state,
                data: state.data.map((contact, i) => i !== action.index ? contact : action.contact)
            }
        case "ADD_CONTACT":
            return {
                ...state,
                data: [...state.data, action.contact]
            }
        case "ERR":
            return {
                ...state,
                loading: false,
                err: action.err
            }
        default:
            return initialState
    }
}

export const deleteContact = index => {
    return {
        type: "DELETE_CONTACT",
        index
    }
}

export const addContact = (contact, files) => {
    return {
        type: "ADD_CONTACT",
        contact
    }
}

export const editContact = (index, contact) => {
    return {
        type: "EDIT_CONTACT",
        index,
        contact
    }
}

export const getContacts = () => {
    return dispatch => {
        setTimeout(() => {
            if (Math.random() < 1) {
                dispatch({
                    type: "GET_CONTACTS",
                    contacts: [{
                        name: "Ben",
                        gender: "male",
                        occupation: "welder",
                        vet: false
                    }]
                })
            }
            else {
                dispatch({
                    type: "ERR",
                    err: { code: 404, msg: "Error, data unavailable" }
                })
            }
        }, 1500)
    }
}