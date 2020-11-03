import * as Yup from 'yup';

const Schema = Yup.object().shape({
  dataVencimento: Yup.string(),
  quantidadeParcela: Yup.string(),
  valorOriginal: Yup.string(),
  diasAtraso: Yup.string(),
  valorJuros: Yup.string(),
  valorFinal: Yup.string(),
  telefone: Yup.string(),

});

export default Schema;
