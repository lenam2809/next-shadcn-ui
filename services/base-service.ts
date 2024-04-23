import api from './axios-custom';

class BaseService {
  url: string;

  constructor(url: string) {
    this.url = url;
  }


  get = async (url: string) => {
    const res: any = await api.get(url);
    return res;
  };

  findById = async (id: number) => {
    const res: any = await api.get(`${this.url}/${id}`);
    return res;
  };

  create = async (data: any) => {
    const res: any = await api.post(this.url, data);
    return res;
  };

  del = async (id: number) => {
    const res: any = await api.delete(`${this.url}/${id}`);
    return res;
  };

  update = async (id: number, data: any) => {
    const res: any = await api.put(`${this.url}/${id}`, data);
    return res;
  };

  put = async (url: string, data: any = null) => {
    const res: any = await api.put(url, data);
    return res;
  };

  post = async (url: string, data: any = null) => {
    const res: any = await api.post(url, data);
    return res;
  };
}

export default BaseService;
