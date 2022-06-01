import axios, { AxiosRequestConfig } from "axios";
import IEmailResponse from "../../Domains/Interfaces/IEmailResponse";
//import IErrorResponse from "../Domains/Interfaces/IErrorResponse";

export default class HttpServicesAdapter {
  private readonly _baseUrl = "https://localhost:44344";
  private readonly _specificAxios;

  public constructor() {
    this._specificAxios = axios;
  }

  public async getAsync(path: string, params: any = undefined): Promise<any> {
    const requestConfig: AxiosRequestConfig = {
      method: "get",
      baseURL: `${this._baseUrl}/${path}`,
      params: params,
    };
    try {
      const response = await this._specificAxios.request(requestConfig);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        //const response = error.response?.data as IErrorResponse;
        //throw new ResponseError(error?.code, error.message, response);
      }

      throw error;
    }
  }

  public async postAsync(path: string, data: any): Promise<any> {
    
    const requestConfig: AxiosRequestConfig = {
      method: "post",
      baseURL: `${this._baseUrl}/${path}`,
      data: data,
    };
    try {
      const response = await this._specificAxios.request(requestConfig);
      const emailResponse: IEmailResponse = {
        status: "Success",
        message: "Messaggio inviato con successo",
        statusCode: response.status,
      };
      return emailResponse;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const emailResponse: IEmailResponse = {
        status: "Error",
        message: error.message,
        statusCode: error.response?.status,
      };
       return emailResponse;
      }

      throw error;
    }
  }
}
