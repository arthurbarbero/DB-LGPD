const BASE_URL = 'http://127.0.0.1:5000';


const register = async obj => {
    try {
      const res = await axios.post(`${BASE_URL}/account/register`, { data: obj });
      return res.data;
  
    } catch (e) {
      console.error(e);
    }
  };
  
