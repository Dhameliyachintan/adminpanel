import { BASE_URL } from "../../share/baseurl";
import * as ActionType from "../ActionType"


export const Medicines = () => (dispatch) => {
    try {
        fetch(BASE_URL + "post")
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(medicines => dispatch({ type: ActionType.GET_MEDICINES, payload: medicines}))
            .catch(error => dispatch(error.message));
    } catch (error) {
      console.log(error);
    }
}