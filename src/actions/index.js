export const UPDATE_CODE_LISTS = 'UPDATE_CODE_LISTS';
export const UPDATE_PAGINATION_LIST = 'UPDATE_PAGINATION_LIST';
export const UPDATE_PAGE_NUMBER = 'UPDATE_PAGE_NUMBER';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const LOG_IN = 'LOG_IN';
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

export const updateCodeListsAction = (data) => ({
  type: UPDATE_CODE_LISTS,
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
  if (filtro === '') filtro = 'id';
  if (filtro === 'Nome') filtro = 'nome';
  if (filtro === 'Multa') filtro = 'multa';
  if (filtro === 'Data') filtro = 'dataCriacao';
  const filtroDecrescente = Object.assign([], filteredCodeList);
  const filtroCrescente = Object.assign([], filteredCodeList);
  filtroCrescente.sort((a, b) => (a[filtro] < b[filtro]
    ? NEGATIVE_ORDER : POSITIVE_ORDER));
  filtroDecrescente.sort((a, b) => (a[filtro] > b[filtro]
    ? NEGATIVE_ORDER : POSITIVE_ORDER));
  switch (ordenacao) {
  case 'Crescente':
    return dispatch(updateSortedListAction(filtroCrescente));
  case 'Decrescente':
    return dispatch(updateSortedListAction(filtroDecrescente));
  default:
    return '';
  }
};

export const filterCodeListThunk = (codeList,
  { palavraChave, filtro, status, ordenacao }) => (dispatch) => {
  const filtroNome = codeList.filter((code) => code.nome
    .toLowerCase().includes(palavraChave.toLowerCase()))
    .filter((filteredCode) => filteredCode.status
      .toString().includes(status));

  const filtroData = codeList.filter((code) => new Date(code.dataCriacao)
    .toLocaleDateString().includes(palavraChave))
    .filter((filteredCode) => filteredCode.status
      .toString().includes(status));

  const filtroMulta = codeList.filter((code) => code.multa
    .toFixed(2).toString().includes(palavraChave))
    .filter((filteredCode) => filteredCode.status
      .toString().includes(status));

  const filtroStatus = codeList.filter((code) => code.status
    .toString().includes(status));

  switch (filtro) {
  case 'Nome':
    return dispatch(sortCodeListThunk(filtroNome, ordenacao, filtro));
  case 'Multa':
    return dispatch(sortCodeListThunk(filtroMulta, ordenacao, filtro));
  case 'Data':
    return dispatch(sortCodeListThunk(filtroData, ordenacao, filtro));
  case 'status':
    return dispatch(sortCodeListThunk(filtroStatus, ordenacao, filtro));
  default:
    return dispatch(sortCodeListThunk(filtroStatus, ordenacao, ''));
  }
};

export const updatePaginationListAction = (data = []) => ({
  type: UPDATE_PAGINATION_LIST,
  payload: data,
});

export const updateActualPageAction = (pageNumber) => ({
  type: UPDATE_PAGE_NUMBER,
  payload: pageNumber,
});

export const deleteCodeActionThunk = (id, codeList, activeFilters) => (dispatch) => {
  const codeAfterDeletion = codeList.filter((code) => code.id !== id);
  dispatch(updateCodeListsAction(codeAfterDeletion));
  dispatch(filterCodeListThunk(codeAfterDeletion, activeFilters));
};
