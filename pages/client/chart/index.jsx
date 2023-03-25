import CryptoChart from '../../../components/client/chart/CryptoChart';
import { Layout } from '../../../components/public/Layout';

const cryptoData = [
  { name: 'Bitcoin', price: 12222 },
  { name: 'Ethereum', price: 400 },
  { name: 'Cardano', price: 1.2 },
  { name: 'Dogecoin', price: 0.05 },
];

const index = () => {
  return (
    <Layout>
      <h1>Cryptocurrency price chart</h1>
      <CryptoChart data={cryptoData} />
    </Layout>
  );
};

export default index;