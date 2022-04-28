import btc from "../assets/btc.png"
import eth from "../assets/eth.png"
import usdt from "../assets/usdt.png"
import CMCtableTitle from "./cmc-table/cmcTableTitle"
import CMCtableRow from "./cmc-table/cmcTableRow"

const CMCtable = () => {
    return <div>
        <div>
            <table>
                <CMCtableTitle />
                <CMCtableRow starNum='1' coinName='Bitcoin BTC' coinSymbol="BTC" coinIcon={btc} showBuy={true} hRate='0.32%' dRate="2.32%" hRateIsIncrement={true} price='$39,043.07' marketCapValue="$608,520,906" volumeCryptoValue="554,455" volumeValue="$120,500,811" circulatingSupply="12,312,432 BTC" graphImage='https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg' />
                <CMCtableRow starNum='2' coinName='Ethereum ETH' coinSymbol="ETH" coinIcon={eth} showBuy={true} hRate='82.32%' dRate="9.12%" hRateIsIncrement={true} price='$2,212' marketCapValue="$650,180,277" volumeCryptoValue="240,637,800" volumeValue="$909,616,252" circulatingSupply="12,312,432 BTC" graphImage='https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4705.svg' />
                <CMCtableRow starNum='3' coinName='Tether USDT' coinSymbol="USDT" coinIcon={usdt} showBuy={false} hRate='0.32%' dRate="20.32%" hRateIsIncrement={true} price='$1.00' marketCapValue="$660,450,998" volumeCryptoValue="112,407,700" volumeValue="$12,714,977" circulatingSupply="12,312,432 BTC" graphImage='https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4705.svg' />
            </table>
        </div>
    </div>
}

export default CMCtable