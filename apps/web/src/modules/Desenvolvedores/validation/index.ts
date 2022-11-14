import * as yup from 'yup';
import { MessagesYup } from '../../../utils/messages';

export const schema = yup.object().shape({
  nome: yup.string().required(MessagesYup.MENSAGEM_OBRIGATORIO),
  sexo: yup.string().required(MessagesYup.MENSAGEM_OBRIGATORIO),
  idade: yup.number().required(MessagesYup.MENSAGEM_OBRIGATORIO),
  dataNascimento: yup.date().typeError(MessagesYup.MENSAGEM_TIPO_DATE).required(MessagesYup.MENSAGEM_OBRIGATORIO),
  nivel: yup.object().required(MessagesYup.MENSAGEM_OBRIGATORIO),
  hobby: yup.string().required(MessagesYup.MENSAGEM_OBRIGATORIO).max(255, 'Tamanho máximo de 255 caracteres.'),
});
