/* eslint-disable no-magic-numbers */
const codigoPenal = [];

for (let index = 1; index <= 60; index += 1) {
  const codigo = {
    id: index,
    nome: `${index}`,
    descricao: `Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da
    policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a
    dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato`,
    dataCriacao: '2021-04-29T01:26:35.700Z',
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
