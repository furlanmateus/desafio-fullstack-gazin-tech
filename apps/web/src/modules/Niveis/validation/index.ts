import * as yup from 'yup';
import { MessagesYup } from '../../../utils/messages';

export const schema = yup.object().shape({
  nivel: yup.string().required(MessagesYup.MENSAGEM_OBRIGATORIO),
});
