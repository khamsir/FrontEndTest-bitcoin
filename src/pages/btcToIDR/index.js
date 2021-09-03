import React, { useState } from 'react';

const USD = {
    last: 57527.96,
    buy: 57527.96,
    sell: 57527.96,
    symbol: "$"
}

const BitcoinIDR = () => {
    const [nominal, setNominal] = useState(0);
    const [convBTC, setConBTC] = useState(0);

    const setData = (nom, conv) => {
        setNominal(nom);
        setConBTC(conv);
    }

    const onChange = (value) => {
        const val = value;
        const btcToUSD = val * USD.sell;
        const usdToIDR = btcToUSD * 14000;

        setData(usdToIDR, val);
    }
    return (
        <div id="main-parent">
            <div className="main-child">
                <div className="content flex flex-column" style={{ width: "90%" }}>
                    <div style={{ marginBottom: "30px", textAlign: "center" }}>
                        <h2>Konversi Bitcoin ke Rupiah</h2>
                        <h4>kurs 1 USD = 14.000 IDR</h4>
                    </div>
                    <div>
                        <div className="form-group w-100">
                            <input type="number" autoFocus className="form-control p-3" onChange={e => onChange(e.target.value)} />
                        </div>
                        <div className="mt-3">
                            <h2>BTC {convBTC} = RP {nominal}</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BitcoinIDR;