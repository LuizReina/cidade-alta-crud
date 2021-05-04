/* eslint-disable no-magic-numbers */
const codigoPenal = [{
  id: 1,
  nome: '1',
  descricao: `Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da
  policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a
  dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato`,
  dataCriacao: '2021-10-11T01:26:35.700Z',
  multa: (Math.ceil(Math.random() * 10000)),
  tempoPrisao: (Math.ceil(Math.random() * 120)),
  status: (Math.ceil(Math.random() * 2)),
},
{
  id: 2,
  nome: '2',
  descricao: `Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da
  policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a
  dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato`,
  dataCriacao: '2021-03-30T01:26:35.700Z',
  multa: (Math.ceil(Math.random() * 10000)),
  tempoPrisao: (Math.ceil(Math.random() * 120)),
  status: (Math.ceil(Math.random() * 2)),
},
{
  id: 3,
  nome: '3',
  descricao: `Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da
  policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a
  dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato`,
  dataCriacao: '2021-04-01T01:26:35.700Z',
  multa: (Math.ceil(Math.random() * 10000)),
  tempoPrisao: (Math.ceil(Math.random() * 120)),
  status: (Math.ceil(Math.random() * 2)),
},
{
  id: 4,
  nome: '4',
  descricao: `Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da
  policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a
  dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato`,
  dataCriacao: '2021-05-02T01:26:35.700Z',
  multa: (Math.ceil(Math.random() * 10000)),
  tempoPrisao: (Math.ceil(Math.random() * 120)),
  status: (Math.ceil(Math.random() * 2)),
},
{
  id: 5,
  nome: '5',
  descricao: `Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da
  policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a
  dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato`,
  dataCriacao: '2021-05-02T01:25:35.700Z',
  multa: (Math.ceil(Math.random() * 10000)),
  tempoPrisao: (Math.ceil(Math.random() * 120)),
  status: (Math.ceil(Math.random() * 2)),
}];

// for (let index = 1; index <= 60; index += 1) {
//   const codigo = {
//     id: index,
//     nome: `${index}`,
//     descricao: `Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da
//     policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a
//     dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato`,
//     dataCriacao: '2021-04-29T01:26:35.700Z',
//     multa: (Math.ceil(Math.random() * 10000)),
//     tempoPrisao: (Math.ceil(Math.random() * 120)),
//     status: (Math.ceil(Math.random() * 2)),
//   };
//   codigoPenal.push(codigo);
// }

const codigoPenalFiltrado = Object.assign([], codigoPenal);
const codigoPenalPaginado = [[]];

const INITIAL_STATE_MOCKED = { codigoPenal, codigoPenalFiltrado, codigoPenalPaginado };

export default INITIAL_STATE_MOCKED;
