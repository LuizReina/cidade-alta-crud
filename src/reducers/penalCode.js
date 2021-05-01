import { SAVE_REDUX_DATA, DELETE_CODE, ADD_CODE } from '../actions';

const INITAL_STATE = {
  codigoPenal: [{
    id: 1,
    nome: "Desacato",
    descricao: "Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato",
    dataCriacao: "2021-04-29T01:26:35.700Z",
    multa: 501.2,
    tempoPrisao: 30,
    status: 1,
  }],
  status: [],
};

const penalCodeReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case SAVE_REDUX_DATA:
    return ({
      ...state, codigoPenal: action.payload[0], status: action.payload[1],
    });
  case ADD_CODE:
    return ({
      ...state, codigoPenal: action.payload,
    });
  case DELETE_CODE:
    return ({
      ...state, codigoPenal: action.payload,
    });
  default:
    return state;
  }
};

export default penalCodeReducer;
