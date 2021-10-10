import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  data: {
    initialized: false,
    globalError: null,
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

// export const initializeApp = () => (dispatch) => {
//   let promise = dispatch(getAuthUserData()); //диспатч возвращает тоже , как и then promise

//   Promise.all([promise]).then(() => {
//     //когда все промисы из массива (all) зарезолвятся
//     dispatch(initializedSuccess());
//   });
// };

export const initializeApp = () => async (dispatch) => {
  let promise = await dispatch(getAuthUserData()); //диспатч возвращает тоже , как и then promise

  Promise.all([promise]).then(() => {
    //когда все промисы из массива (all) зарезолвятся
    dispatch(initializedSuccess());
  });
};

export default appReducer;
