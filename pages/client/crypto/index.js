import React, { useEffect, useState } from 'react'
import { Layout } from '../../../components/public/Layout'
import styles from './index.module.css'
import { ReactDOM } from 'react'

export async function getServerSideProps({ params }) {

    const cryptos = [
        { "name": "bitcoin", "selected": true },
        { "name": "etherium", "selected": true },
        { "name": "crypto", "selected": false }
    ]

    return {
        props: {
            cryptos
        }
    }
}

function Index({ cryptos }) {

    const [cryptoCheck, setCryptoCheck] = useState([{}])
    const [periodicity, setPeriodicity] = useState('')
    const [currency, setCurrency] = useState('')

    const handleChangePeriodicity = (e) => {
        setPeriodicity(e.target.name)
        const check1 = document.getElementById('check1')
        const check2 = document.getElementById('check2')
        const check3 = document.getElementById('check3')
        if(e.target.checked){
            switch (e.target.name) {
                case '1h':
                    check2.disabled = true
                    check3.disabled = true
                    break;
                case '12h':
                    check1.disabled = true
                    check3.disabled = true
                    break;
                case '24h':
                    check1.disabled = true
                    check2.disabled = true
                    break;
            }
        } else {
            check1.disabled = false
            check2.disabled = false
            check3.disabled = false
        }
      }

      const handleChangeCurrency = (e) => {
        setCurrency(e.target.name)
        const check1 = document.getElementById('dolar')
        const check2 = document.getElementById('peso colombiano')
        const check3 = document.getElementById('euro')
        if(e.target.checked){
            switch (e.target.name) {
                case 'dolar':
                    check2.disabled = true
                    check3.disabled = true
                    break;
                case 'peso colombiano':
                    check1.disabled = true
                    check3.disabled = true
                    break;
                case 'euro':
                    check1.disabled = true
                    check2.disabled = true
                    break;
            }
        } else {
            check1.disabled = false
            check2.disabled = false
            check3.disabled = false
        }
      }
      
    return (
        <Layout>
            <div className={styles.cover}>
                <h1 className={styles.title}> Crypto managger </h1>
                <h4> Follow your favorite cryptocurrency </h4>
                {
                    cryptos.map((crypto, index) => (
                        <div key={index}>
                            <label className={styles.container}> {crypto.name} 
                            <input
                                type="checkbox"
                                name={crypto.name}
                                onChange={e => {
                                    let newCrypto = { "name": e.target.name, "selected": e.target.checked }
                                    let exist = false
                                    cryptoCheck.map((c) => {
                                        if(c.name === newCrypto.name) {
                                            exist = true
                                            c.selected = !c.selected
                                        }
                                    })
                                    if(!exist) setCryptoCheck([...cryptoCheck, newCrypto]) 
                                    
                                    console.log(cryptoCheck)    
                                }}
                            ></input>
                            </label>
                        </div>

                    ))
                }
                <div>
                    <h4> Check the notifications periodicity </h4>

                    <label> 1H </label>
                    <input
                        type="checkbox"
                        name="1h"
                        onChange={handleChangePeriodicity}
                        id="check1"
                    ></input>

                    <label> 12H </label>
                    <input
                        type="checkbox"
                        name="12h"
                        onChange={handleChangePeriodicity}
                        id="check2"
                    ></input>

                    <label> 24H </label>
                    <input
                        type="checkbox"
                        name="24h"
                        onChange={handleChangePeriodicity}
                        id="check3"
                    ></input>

                </div>

                <div>
                    <h4> Check your favorite currency </h4>

                    <label> dolar </label>
                    <input
                        type="checkbox"
                        name="dolar"
                        onChange={handleChangeCurrency}
                        id='dolar'
                    ></input>

                    <label> peso colombiano </label>
                    <input
                        type="checkbox"
                        name="peso colombiano"
                        onChange={handleChangeCurrency}
                        id='peso colombiano'
                    ></input>

                    <label> euro </label>
                    <input
                        type="checkbox"
                        name="euro"
                        onChange={handleChangeCurrency}
                        id='euro'
                    ></input>

                </div>
                <button className={styles.button}>
                    Save
                </button>
            </div>
        </Layout>
    )
}

export default Index
