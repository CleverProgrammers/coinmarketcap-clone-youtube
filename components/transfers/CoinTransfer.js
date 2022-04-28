import React from 'react'
import { useEffect, useState } from 'react';
import { useMoralis, useNativeBalance } from 'react-moralis';
import AssetSelector from './AssetSelector';

export default function CoinTransfer() {

    const { Moralis } = useMoralis();
    const [receiver, setReceiver] = useState();
    const [asset, setAsset] = useState();
    const [tx, setTx] = useState();
    const [amount, setAmount] = useState();
    const [isPending, setIsPending] = useState(false);

    const { data } = useNativeBalance();

    console.log("DATAFFFFFFFFFFFFFFFFFFFFFFFFFFFFf", data);

    async function transfer() {
        const { amount, receiver, asset } = tx;

        let options = {};

        switch (asset.token_address) {
            case "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee":
                options = {
                    native: "native",
                    amount: Moralis.Units.ETH(amount),
                    receiver,
                    awaitReceipt: false,
                };
                break;
            default:
                options = {
                    type: "erc20",
                    amount: Moralis.Units.Token(amount, asset.decimals),
                    receiver,
                    contractAddress: asset.token_address,
                    awaitReceipt: false,
                };
        }

        setIsPending(true);
        const txStatus = await Moralis.transfer(options);

        txStatus
            .on("transactionHash", (hash) => {
                openNotification({
                    message: "🔊 New Transaction",
                    description: `${hash}`,
                });
                console.log("🔊 New Transaction", hash);
            })
            .on("receipt", (receipt) => {
                openNotification({
                    message: "📃 New Receipt",
                    description: `${receipt.transactionHash}`,
                });
                console.log("🔊 New Receipt: ", receipt);
                setIsPending(false);
            })
            .on("error", (error) => {
                openNotification({
                    message: "📃 Error",
                    description: `${error.message}`,
                });
                console.error(error);
                setIsPending(false);
            });
    }

    useEffect(() => {
        asset && amount && receiver ? setTx({ amount, receiver, asset }) : setTx();
    }, [asset, amount, receiver]);

    return (
        <div>
            <input placeholder='select Token' />
            <p>Show Balance:</p>
            <input type="number" placeholder='amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
            <p>To:</p>
            <input placeholder='address' value={receiver} onChange={(e) => setReceiver(e.target.value)} />

            <button onClick={transfer}>Transfer</button>
            <AssetSelector />
        </div>
    )
}
