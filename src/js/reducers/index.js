const initialState = {
    users : []

  };

  function rootReducer(state = initialState, action) {

    if (action.type === "DATA_LOADED") {
        //alert('prateek');
        //console.log(state.users);
        action.payload.forEach( (value) => {
            value.like = 0;
        })
        return {
            ...state,
            users: action.payload
        }
      } else if(action.type === "EDIT_DATA") {
          
          let array = [];
          console.log(action.payload);

          state.users.forEach( (value, i)=> {
                
                if(i !== action.index){
                    array.push(value);
                }
                else {
                    array.push(action.payload);
                    array[i].like = 0;
                }
          })
          console.log(array);
          return {
              users : array
          }
          

      } else if(action.type === "LIKE_USER") {
        let array = [];
        state.users.forEach( (value, index)=> {

            array.push(value);
              if(index === action.index){
                  array[index].like = action.value;
              }
        })
        
        return {
            users : array
        }
        

    } else if(action.type === "DELETE_USER") {
        let array = [];
        state.users.forEach( (value, index)=> {

            
              if(index !== action.index){
                array.push(value);
              }
        })

        return {
            users : array
        }
    }
      
    return state;


  }

  export default rootReducer;