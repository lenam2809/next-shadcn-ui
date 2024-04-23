import { Api } from "@/services";
import { User, Weather } from "./definitions";

export async function getWeathers() {
    try {
      const response  = await Api.get('/weatherforecast');
      return response.data as Weather[];
    } catch (error) {
      console.error('Failed to get weather:', error);
      throw new Error('Failed to get weather.');
    }
  }

  export async function getUser(id: string) {
    try {
      const response = await Api.get(`api/User/${encodeURIComponent(id)}`);
      return response.data as User;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }
