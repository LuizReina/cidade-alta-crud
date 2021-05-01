import { SAVE_REDUX_DATA, DELETE_CODE, ADD_CODE, UPDATE_FILTERED_LIST } from '../actions';

const INITAL_STATE = {
  codigoPenal: [{
    id: 1,
    nome: "Desacato",
    descricao: "Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato",
    dataCriacao: "2021-04-29T01:26:35.700Z",
    multa: 501.2,
    tempoPrisao: 30,
    status: 1,
  },
  {
    id: 2,
    nome: "Dinheiro Ilícito",
    descricao: "Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato",
    dataCriacao: "2021-04-29T01:26:35.700Z",
    multa: 3500,
    tempoPrisao: 50,
    status: 1,
  },
  {
    id: 3,
    nome: "Falsidade Ideológica",
    descricao: "Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato",
    dataCriacao: "2021-04-29T01:26:35.700Z",
    multa: 2000,
    tempoPrisao: 80,
    status: 2,
  }],
  codigoPenalFiltrado: [{
    id: 1,
    nome: "Desacato",
    descricao: "Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato",
    dataCriacao: "2021-04-29T01:26:35.700Z",
    multa: 501.2,
    tempoPrisao: 30,
    status: 1,
  },
  {
    id: 2,
    nome: "Dinheiro Ilícito",
    descricao: "Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato",
    dataCriacao: "2021-04-29T01:26:35.700Z",
    multa: 3500,
    tempoPrisao: 50,
    status: 1,
  },
  {
    id: 3,
    nome: "Falsidade Ideológica",
    descricao: "Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato",
    dataCriacao: "2021-04-29T01:26:35.700Z",
    multa: 2000,
    tempoPrisao: 80,
    status: 2,
  }],
  status: [],
};

const penalCodeReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case SAVE_REDUX_DATA:
    return ({
      ...state, codigoPenal: action.payload,
    });
  case ADD_CODE:
    return ({
      ...state, codigoPenal: action.payload,
    });
  case DELETE_CODE:
    return ({
      ...state, codigoPenal: action.payload,
    });
  case UPDATE_FILTERED_LIST:
    return ({
      ...state, codigoPenalFiltrado: action.payload,
    });
  default:
    return state;
  }
};

export default penalCodeReducer;
