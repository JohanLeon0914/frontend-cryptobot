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
      query_schedule: periodicity,
      currency_pair: currency,
    };
    console.log(data);
    const url = "https://069b-181-132-2-224.ngrok.io/exchange/crypto/follow";
    const response = await axios.post(url, data);
    if (response.status === 200) {
      Swal.fire("Ok!", "Follow crypto prices save!", "success");
    }
    // const url2 = 'https://069b-181-132-2-224.ngrok.io/exchange/news/notification'
    // const response2 = await axios.post(url2, data)
  };

  const handleSubmit2 = async (e) => {
    const cryptoList = [];

    cryptoCheck.map((c) => {
      if (c.selected) cryptoList.push(c.name);
    });
    const data = {
      telegram_id: id,
      following_cryptos: cryptoList,
      query_schedule: periodicity,
      currency_pair: currency,
    };
    console.log(data);
    const url =
      "https://069b-181-132-2-224.ngrok.io/exchange/news/notification";
    const response = await axios.post(url, data);
    if (response.status === 200) {
      Swal.fire("Ok!", "Follow crypto news save!", "success");
    }
  };

  const handleChangePeriodicity = (e) => {
    console.log(e.target.value);
    setPeriodicity(e.target.value);
    // const check1 = document.getElementById("check1");
    // const check2 = document.getElementById("check2");
    // const check3 = document.getElementById("check3");
    // if (e.target.checked) {
    //   switch (e.target.name) {
    //     case "*/30 * * * *":
    //       check2.disabled = true;
    //       check3.disabled = true;
    //       break;
    //     case "* */1 * * *":
    //       check1.disabled = true;
    //       check3.disabled = true;
    //       break;
    //     case "* */2 * * *":
    //       check1.disabled = true;
    //       check2.disabled = true;
    //       break;
    //   }
    // } else {
    //   check1.disabled = false;
    //   check2.disabled = false;
    //   check3.disabled = false;
    // }
  };

  const handleChangeCurrency = (e) => {
    console.log(e.target.value);
    setCurrency(e.target.value);
    // const check1 = document.getElementById("USD");
    // const check3 = document.getElementById("EUR");
    // if (e.target.checked) {
    //   switch (e.target.name) {
    //     case "USD":
    //       check3.disabled = true;
    //       break;
    //     case "euro":
    //       check1.disabled = true;
    //       break;
    //   }
    // } else {
    //   check1.disabled = false;
    //   check3.disabled = false;
    // }
  };

  return (
    <Layout>
      <div className={styles.cover}>
        <h1 className={styles.title}> Crypto manager </h1>
        <h4> Follow your favorite cryptocurrency </h4>
        {cryptos.map((crypto, index) => (
          <div key={index}>
            <label>
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
            <br></br>
            <br></br>
          </div>
        ))}
        <div>
          <h4> Check the notifications periodicity </h4>

          <fieldset>
            <legend>Select a periodicity:</legend>
            <div>
              <input
                type="radio"
                id="huey"
                name="contact"
                value="*/30 * * * *"
                onChange={handleChangePeriodicity}
                className={styles.inputPeriodicity}
              ></input>
              <label className={styles.textInput}> 30M </label>
            </div>

            <div>
              <input
                type="radio"
                id="huey"
                name="contact"
                value="* */1 * * *"
                onChange={handleChangePeriodicity}
                className={styles.inputPeriodicity}
              ></input>
              <label className={styles.textInput}> 1H </label>
            </div>

            <div>
              <input
                type="radio"
                id="huey"
                name="contact"
                value="* */2 * * *"
                onChange={handleChangePeriodicity}
                className={styles.inputPeriodicity}
              ></input>
              <label className={styles.textInput}> 2H </label>
            </div>
          </fieldset>
        </div>

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
          Notify me news
        </button>
        <button className={styles.button2} onClick={handleSubmit2}>
          Notify me prices
        </button>
      </div>
    </Layout>
  );
}

export default Index;
