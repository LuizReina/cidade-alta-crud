export const SAVE_REDUX_DATA = 'SAVE_REDUX_DATA';
export const DELETE_CODE = 'DELETE_CODE';
export const ADD_CODE = 'ADD_CODE';

export const saveReduxDataAction = (data) => ({
  type: SAVE_REDUX_DATA,
  payload: data,
});

export const addNewCodeAction = (data) => ({
  type: ADD_CODE,
  payload: data,
});

export const deleteCodeAction = (data) => ({
  type: DELETE_CODE,
  payload: data,
});

export const deleteCodeActionThunk = (id, codeList) => (dispatch) => {
  const codeAfterDeletion = codeList.filter((code) => code.id !== id);
  dispatch(deleteCodeAction(codeAfterDeletion));
};
