import { useEffect, useState } from 'react';
import CryptoChart from '../../../components/client/chart/CryptoChart';
import { Layout } from '../../../components/public/Layout';
import axios from 'axios';

const Index = ({cryptoData}) => {
  const [analisisData, setAnalisisData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlAnalisis = process.env.QA + '/qa/ia/analizar-precios';
        const response = await axios.post(urlAnalisis, cryptoData, {
          transformResponse: [(data) => {
            return JSON.parse(data);
          }],
        });
        setAnalisisData(response.data);
        console.log(response.data)
        console.log(analisisData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [cryptoData]);

  return (
    <Layout>
      <h1>Cryptocurrency price chart: { cryptoData.name } </h1>
      <CryptoChart data={cryptoData} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { cryptoName } = context.query;
  const url = "https://cryptobot-345516.ue.r.appspot.com/exchange/crypto/price"
  
  const crypto = {
    crypto: cryptoName,
    dateRange: 7
  }
  try {
    const response = await axios.post(url, crypto, {
      transformResponse: [(data) => {
        return JSON.parse(data);
      }],
    });

  
    return {
      props: {
        cryptoData: response.data, // Solo devuelve la propiedad "data" de la respuesta
      },
    };
  } catch (error) {
    // Manejar el error de manera apropiada
    console.error(error);
    return {
      props: {
        cryptoData: null, // Devuelve un valor nulo en caso de error
      },
    };
  }
}

export default Index;