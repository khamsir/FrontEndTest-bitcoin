import React, { useState } from 'react';

const IDRBitcoin = () => {
    const [nominal, setNominal] = useState(0);
    const [convBTC, setConBTC] = useState(0);


    const setData = (nom, conv) => {
        setNominal(nom);
        setConBTC(conv.toFixed(10));
    }

    const onChange = (value) => {
        const val = value;
        const convToUSD = val/14000;

        fetch(`https://blockchain.info/tobtc?currency=USD&value=${convToUSD}`)
            .then(response => response.json())
            .then(data => setData(val, data));
    }

    return (

        <div id="main-parent">
            <div className="main-child">
                <div className="content flex flex-column" style={{ width: "90%" }}>
                    <div style={{ marginBottom: "30px", textAlign: "center" }}>
                        <h2>Konversi Rupiah ke Bitcoin</h2>
                        <h4>kurs 1 USD = 14.000 IDR</h4>
                    </div>
                    <div>
                        <div className="form-group w-100">
                            <input type="number" autoFocus className="form-control p-3" onChange={e => onChange(e.target.value)} />
                        </div>
                        <div className="mt-3">
                            <h2>Rp {nominal} = BTC {convBTC}</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default IDRBitcoin;