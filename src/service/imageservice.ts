import axios from "axios";

export const getImagesList: any =  async () => {
    const response =  await axios.get('https://picsum.photos/v2/list?limit=100')
    return response.data;
}