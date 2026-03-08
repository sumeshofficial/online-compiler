import axios from 'axios';

export const executeCode = async (language, code) => {
    const api = import.meta.env.VITE_API_URL;
    const res = await axios.post(`${api}/execute`, {
        language,
        code
    });

    return res.data;
}