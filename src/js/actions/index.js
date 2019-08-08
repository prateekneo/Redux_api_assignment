import { DATA_LOADED } from '../constants/action-types'
import { EDIT_DATA } from '../constants/action-types'
import { LIKE_USER } from '../constants/action-types'
import { DELETE_USER } from '../constants/action-types'

export function getData() {
    return function (dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
      .then(json => {
          console.log(json);
          
        dispatch({ type: DATA_LOADED, payload: json });
      });
    }
  }

  export function editData(payload, index) {

    return {type : EDIT_DATA, index : index, payload}

  }

  export function LikeUnlike(index, value) {

    return {type : LIKE_USER, index : index, value : value}

  }

  export function delet(index) {

    return {type : DELETE_USER, index : index}

  }