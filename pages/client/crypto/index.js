import React, { useEffect, useState } from "react";
import { Layout } from "../../../components/public/Layout";
import styles from "./index.module.css";
import { ReactDOM } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export async function getServerSideProps(context) {
  const { id } = context.query;

  return {
    props: {
      id,
    },
  };
}

function Index({ id }) {
  const cryptos = [
    { name: "bitcoin", selected: true },
    { name: "ethereum", selected: true },
    { name: "cardano", selected: true },
    { name: "litecoin", selected: true },
    { name: "tether", selected: true },
    { name: "dogecoin", selected: true },
    { name: "binancecoin", selected: true },
    { name: "polkadot", selected: true },
    { name: "ripple", selected: true },
  ];

  const [cryptoCheck, setCryptoCheck] = useState([{}]);
  const [periodicity, setPeriodicity] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = async (e) => {
    const cryptoList = [];

    cryptoCheck.map((c) => {
      if (c.selected) cryptoList.push(c.name);
    });
    const data = {
      telegram_id: id,
      following_cryptos: cryptoList,
      // query_schedule: periodicity,
      currency_pair: currency,
    };
    console.log(data);
    const url2 = process.env.NEWS + "/news/follow";
    const response2 = await axios.post(url2, data);
    // const url = process.env.EXCHANGE + "/exchange/crypto/follow";
    // const response = await axios.post(url, data);
    
    if (response2.status === 200) {
      Swal.fire("Ok!", "Configuration save succefully!", "success");
    }
  };

  const handleChangePeriodicity = (e) => {
    setPeriodicity(e.target.value);
  };

  const handleChangeCurrency = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <Layout>
      <div className={styles.cover}>
        <h1 className={styles.title}> Crypto manager </h1>
        <h4> Follow your favorites cryptocurrencies </h4>
        <ul>
        {cryptos.map((crypto, index) => (
          <li className={styles.list} key={index}>
            <label htmlFor="crypto" className={styles.cryptoName}>
              <input
                type="checkbox"
                name={crypto.name}
                className={styles.inputCurrency}
                onChange={(e) => {
                  let newCrypto = {
                    name: e.target.name,
                    selected: e.target.checked,
                  };
                  let exist = false;
                  let listCrypto = [];
                  cryptoCheck.map((c, index) => {
                    if (c.name === newCrypto.name) {
                      exist = true;
                      c.selected = !c.selected;
                    }
                  });
                  if (!exist) {
                    setCryptoCheck([...cryptoCheck, newCrypto]);
                  }

                  console.log(cryptoCheck);
                }}
              />
              {crypto.name}
            </label>
            <br />
            <br />
          </li>
        ))}
        </ul>
        
        {/* periodicity */}

        <div>
          <h4> Check your favorite currency </h4>
          <fieldset>
            <legend>Select a currency:</legend>

            <div>
              <input
                type="radio"
                id="huey"
                name="drone"
                value="USD"
                onChange={handleChangeCurrency}
                className={styles.inputPeriodicity}
              />
              <label className={styles.textInput} htmlFor="huey">
                USD
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="dewey"
                name="drone"
                value="EUR"
                onChange={handleChangeCurrency}
                className={styles.inputPeriodicity}
              />
              <label className={styles.textInput} htmlFor="dewey">
                EUR
              </label>
            </div>
          </fieldset>
        </div>
        <button className={styles.button} onClick={handleSubmit}>
          Save
        </button>
      </div>
    </Layout>
  );
}

export default Index;
