import { Notify } from 'quasar';

export class NotificacaoService {
  sucesso(mensagem: string) {
    Notify.create({
      message: mensagem,
      type: 'positive',
    });
  }
}
