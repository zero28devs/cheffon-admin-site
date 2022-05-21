import { Request } from 'src/shared/api/requests/request';

export interface Formulario {
  gerarRequest(): Request;
}
