import CryptoChart from '../../../components/client/chart/CryptoChart';
import { Layout } from '../../../components/public/Layout';
import axios from 'axios';

const index = ({cryptoData}) => {
  return (
    <Layout>
      <h1>Cryptocurrency price chart: { cryptoData.name } </h1>
      <CryptoChart data={cryptoData} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const url = "https://eafe-181-132-0-195.ngrok.io/exchange/crypto/price"
  const crypto = {
    crypto: "bitcoin",
    dateRange: 7
  }
  const response = await axios.post(url, crypto, {
    transformResponse: [(data) => {
      return JSON.parse(data);
    }],
  });
  const cryptoData = response.data;

  return {
    props: {
      cryptoData,
    },
  };
}

export default index;