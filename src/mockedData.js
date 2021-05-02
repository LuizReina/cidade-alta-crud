/* eslint-disable no-magic-numbers */
const codigoPenal = [];

for (let index = 1; index <= 60; index += 1) {
  const codigo = {
    id: index,
    nome: `${index}`,
    descricao: 'Baguncinha na california',
    dataCriacao: 2021,
    multa: (Math.ceil(Math.random() * 10000)),
    tempoPrisao: (Math.ceil(Math.random() * 120)),
    status: (Math.ceil(Math.random() * 2)),
  };
  codigoPenal.push(codigo);
}

const codigoPenalFiltrado = Object.assign([], codigoPenal);
const codigoPenalPaginado = [[]];

const INITIAL_STATE_MOCKED = { codigoPenal, codigoPenalFiltrado, codigoPenalPaginado };

export default INITIAL_STATE_MOCKED;
