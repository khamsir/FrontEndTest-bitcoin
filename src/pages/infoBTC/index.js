import React, { useState, useEffect } from 'react';

const mataUang = ['Australia Dollar', 'Euro Eropa', 'Pounsterling Inggris', 'Yen Japan', 'Dollar Amerika'];

const InfoBitcoin = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://blockchain.info/ticker')
            .then(response => response.json())
            .then(data => {
                const Arr = [data["AUD"], data["EUR"], data["GBP"], data["JPY"], data["USD"], ];
                setData(
                    Arr.map((isi, indx) => ({
                        matauang: mataUang[indx],
                        beli: isi.buy,
                        jual: isi.sell,
                    }))
                )
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div id="main-parent">
            <div className="main-child">
                <div className="content">
                    {
                        data.map(a => a.matauang)
                    }
                </div>
            </div>
        </div>
    )
}

export default InfoBitcoin;