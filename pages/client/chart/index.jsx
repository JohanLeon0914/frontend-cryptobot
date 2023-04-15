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
  const url = "https://604d-2803-1800-1231-2c99-2861-1112-70a9-758d.ngrok.io/crypto/price"
  const crypto = {
    crypto: "bitcoin",
    dateRange: 7
  }
  // const response = await axios.post(url, crypto, {
  //   transformResponse: [(data) => {
  //     return JSON.parse(data);
  //   }],
  // });
  const cryptoData = {
    name: "bitcoin",
    currency_pair: "usd",
    historic_price: [
      {
      date: "2022-02-23",
      price: 2500
      },
      {
        date: "2022-02-23",
        price: 2800
        },
        {
          date: "2022-02-23",
          price: 2220
          },
          {
            date: "2022-02-23",
            price: 2200
            },
            {
              date: "2022-02-23",
              price: 2250
              },
              {
                date: "2022-02-23",
                price: 2222
                },
                {
                  date: "2022-02-23",
                  price: 2220
                  },

                  {
                    date: "2022-02-23",
                    price: 2100
                    },
                    {
                      date: "2022-02-23",
                      price: 2750
                      },
                      {
                        date: "2022-02-23",
                        price: 2200
                        },
                        {
                          date: "2022-02-23",
                          price: 2700
                          },
  ]
  };

  return {
    props: {
      cryptoData,
    },
  };
}

export default index;