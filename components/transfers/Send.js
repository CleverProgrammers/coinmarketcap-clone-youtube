import React from "react";
import { useMoralis, useWeb3Transfer, useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from "react";

const TransferEth = () => {
    const { Moralis, user, account, isAuthenticated } = useMoralis();
    const Web3Api = useMoralisWeb3Api();

    const [amount, setAmount] = useState('0');
    const [receiver, setReceiver] = useState();

    const { fetch, error, isFetching } = useWeb3Transfer({
        type: "native",
        amount: amount !== '' ? Moralis.Units.ETH(parseFloat(amount)) : Moralis.Units.ETH(parseFloat('0.1')),
        receiver: receiver
    });

    useEffect(() => {

        Moralis.enableWeb3()

        test()

        // Moralis.Cloud.HTTPOptions.baseURL = 'https://api.moralis.io/v1/';

        // const balance = await Moralis.Web3API.account.getNativeBalance();

    }, [Moralis])

    console.log(error)

    if (isAuthenticated) {

        // fetchNativeBalance('bsc', user.get("ethAddress"))
    }

    const test = async () => {

        console.warn("makng call..")

        try {

            /**
             * https://forum.moralis.io/t/is-it-possible-to-use-cloud-code-to-transfer-erc20-tokens/6757
             * you can not use that method from a cloud function, 
             * mainly because you don’t have access to a wallet in a cloud function, 
             * you could still do a transfer in a cloud function, 
             * but you’ll have to write your own code and to hardcode a private key
             */

            await Moralis.start({
                appId: "UHl1r17lBIzihxHTi3egHrHP2WSK9Z1Bu4P7pWsK",
                serverUrl: "https://xe78hpdwyjsp.usemoralis.com:2053/server"
            })

            await Moralis.Cloud.run("sendEth").then(async (data) => {

                console.log("data >>> ", data)
            })
        }

        catch (e) {

            return ("error >>> ", e.message)
        }
    }

    // Use your custom error component to show errors
    return (
        <div>
            <div>
                <input placeholder='select Token' />
                <p>Show Balance:</p>
                <input type="number" placeholder='amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                <p>To:</p>
                <input placeholder='address' value={receiver} onChange={(e) => setReceiver(e.target.value)} />

                {/* <button onClick={transfer}>Transfer</button> */}
                {/* <AssetSelector /> */}



            </div>
            <button onClick={() => fetch()} disabled={isFetching}>
                Transfer
            </button>
        </div>
    );
};

export default TransferEth;