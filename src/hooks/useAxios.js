import { useEffect, useState } from 'react';
import axios from 'axios';

//Config Defaults
axios.defaults.baseURL = "https://opentdb.com"

const useAxios = ({ url }) => {
    const [data, setData] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    //傳進來的參數url改變時執行
    useEffect(() => {
        const fetchData = () => {
            axios.get(url)
              .then((res) => {
                setData(res.data);
              })
              .catch((err) => {
                setError(err);
              })
              /* 不論成功失敗，都做些事 */
              .finally(() => {
                setLoading(false);
              })
        };
        fetchData();
    }, [url])

    return { data, error, loading }
};

export default useAxios;