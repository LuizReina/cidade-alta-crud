export const SAVE_REDUX_DATA = 'SAVE_REDUX_DATA';
export const DELETE_CODE = 'DELETE_CODE';
export const ADD_CODE = 'ADD_CODE';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const INCLUDE_FILTERS = 'INCLUDE_FILTERS';
export const UPDATE_FILTERED_LIST = 'UPDATE_FILTERED_LIST';

const NEGATIVE_ORDER = -1;
const POSITIVE_ORDER = 1;

export const saveReduxDataAction = (data) => ({
  type: SAVE_REDUX_DATA,
  payload: data,
});

export const loginAction = (nome) => ({
  type: LOG_IN,
  payload: nome,
});

export const logoutAction = () => ({
  type: LOG_OUT,
});

export const addNewCodeAction = (data) => ({
  type: ADD_CODE,
  payload: data,
});

export const includeFiltersAction = (filters) => ({
  type: INCLUDE_FILTERS,
  payload: filters,
});

export const updateSortedListAction = (data) => ({
  type: UPDATE_FILTERED_LIST,
  payload: data,
});

export const sortCodeListThunk = (filteredCodeList, ordenacao, filtro) => (dispatch) => {
  if (filteredCodeList === undefined) return;
  const filtroDecrescente = Object.assign([], filteredCodeList);
  filtroDecrescente
    .sort((b, a) => (a[filtro] < b[filtro] ? NEGATIVE_ORDER : POSITIVE_ORDER));
  const filtroCrescente = Object.assign([], filteredCodeList);
  filtroCrescente
    .sort((a, b) => (a[filtro] < b[filtro] ? NEGATIVE_ORDER : POSITIVE_ORDER));
  switch (ordenacao) {
  case 'crescente':
    return dispatch(updateSortedListAction(filtroCrescente));
  case 'decrescente':
    return dispatch(updateSortedListAction(filtroDecrescente));
  default:
    return '';
  }
};

export const filterCodeListThunk = (codeList,
  palavraChave, filtro, ordenacao) => (dispatch) => {
  const filtroNome = codeList.filter((code) => code.nome
    .toLowerCase()
    .includes(palavraChave.toLowerCase()));
  const filtroMulta = codeList.filter((code) => code.multa
    .toFixed(2)
    .toString()
    .includes(palavraChave));
  const filtroStatus = codeList.filter((code) => code.status
    .toString()
    .includes(palavraChave));
  switch (filtro) {
  case 'nome':
    return dispatch(sortCodeListThunk(filtroNome, ordenacao, filtro));
  case 'multa':
    return dispatch(sortCodeListThunk(filtroMulta, ordenacao, filtro));
  case 'status':
    return dispatch(sortCodeListThunk(filtroStatus, ordenacao, filtro));
  default:
    return '';
  }
};

export const deleteCodeAction = (data) => ({
  type: DELETE_CODE,
  payload: data,
});

export const deleteCodeActionThunk = (id, codeList) => (dispatch) => {
  const codeAfterDeletion = codeList.filter((code) => code.id !== id);
  dispatch(deleteCodeAction(codeAfterDeletion));
};
