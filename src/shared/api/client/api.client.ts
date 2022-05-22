import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Notify } from 'quasar';
import { api } from 'src/boot/axios';

export default class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = api;
  }

  async get<T>(url: string, params: AxiosRequestConfig) {
    try {
      const response = await this.client.get<T>(url, params);
      return response.data;
    } catch (error) {
      this.emitirMensagemErro('Erro ao processar requisição');
      throw error;
    }
  }

  async post<T>(url: string, body: unknown, params: AxiosRequestConfig) {
    try {
      const response = await this.client.post<T>(url, body, params);
      return response.data;
    } catch (error) {
      this.emitirMensagemErro('Erro ao processar requisição');
      throw error;
    }
  }

  async put<T>(url: string, body: unknown, params: AxiosRequestConfig) {
    try {
      const response = await this.client.put<T>(url, body, params);
      return response.data;
    } catch (error) {
      this.emitirMensagemErro('Erro ao processar requisição');
      throw error;
    }
  }

  async delete<T>(url: string, params: AxiosRequestConfig) {
    try {
      const response = await this.client.delete<T>(url, params);
      return response.data;
    } catch (error) {
      console.table(error);
      this.emitirMensagemErro('Erro ao processar requisição');
      throw error;
    }
  }

  private emitirMensagemErro(mensagem: string) {
    Notify.create({
      message: mensagem,
      type: 'negative',
      position: 'top-right',
    });
  }
}
