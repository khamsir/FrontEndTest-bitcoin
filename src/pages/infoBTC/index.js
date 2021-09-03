import React, { useState, useEffect } from 'react';

const mataUang = ['Australia Dollar', 'Euro Eropa', 'Pounsterling Inggris', 'Yen Japan', 'Dollar Amerika'];

const InfoBitcoin = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://blockchain.info/ticker')
            .then(response => response.json())
            .then(data => {
                const Arr = [data["AUD"], data["EUR"], data["GBP"], data["JPY"], data["USD"],];
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
                <div className="content flex flex-column" style={{ width: "90%" }}>
                    <div style={{marginBottom: "30px"}}>
                        <h2>Info Bitcoin Hari ini</h2>
                    </div>
                    <div>
                        <table style={border}>
                            <tr>
                                <th style={border}>Mata Uang</th>
                                <th style={border}>Harga Beli Bitcoin</th>
                                <th style={border}>Harga Jual Bitcoin</th>
                            </tr>
                            {
                                data.map((isi, idx) => (
                                    <tr key={idx}>
                                        <td style={border}>{isi.matauang}</td>
                                        <td style={border}>{isi.beli}</td>
                                        <td style={border}>{isi.jual}</td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoBitcoin;

const border = {
    border: "1px solid black",
    padding: "10px"
}