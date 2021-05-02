export const UPDATE_CODE_LISTS = 'UPDATE_CODE_LISTS';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const INCLUDE_FILTERS = 'INCLUDE_FILTERS';
export const UPDATE_FILTERED_LIST = 'UPDATE_FILTERED_LIST';

const NEGATIVE_ORDER = -1;
const POSITIVE_ORDER = 1;

export const startLoadingAction = () => ({
  type: START_LOADING,
});

export const stopLoadingAction = () => ({
  type: STOP_LOADING,
});

export const loginAction = (nome) => ({
  type: LOG_IN,
  payload: nome,
});

export const logoutAction = () => ({
  type: LOG_OUT,
});

export const updateCodeListsAction = (data) => ({
  type: UPDATE_CODE_LISTS,
  payload: data,
});

export const deleteCodeActionThunk = (id, codeList) => (dispatch) => {
  const codeAfterDeletion = codeList.filter((code) => code.id !== id);
  dispatch(updateCodeListsAction(codeAfterDeletion));
};

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
  const filtroMulta = codeList.filter((code) => parseInt(code.multa, 10)
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
