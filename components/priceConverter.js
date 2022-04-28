import Image from 'next/image'

import converter from '../assets/converter.png'
import btc from '../assets/btc.png'
import eth from '../assets/eth.png'
import usdc from '../assets/usdc.png'
import usdt from '../assets/usdt.png'
import xrp from '../assets/xrp.png'
import cardano from '../assets/cardano.png'
import tera from '../assets/tera.png'
import solana from '../assets/solana.png'
import avalanche from '../assets/avalanche.png'
import bnb from '../assets/bnb.png'
import { useContext } from 'react'
import { CoinMarketContext } from '../context/context'

const styles = {
  converter: `flex items-center justify-between bg-[#171924] border border-gray-500/10 px-5 py-5 rounded-xl`,
  convertButton: `bg-[#1d4ed8] p-2 px-5 w-min rounded-xl mt-5 cursor-pointer hover:opacity-60`,
}

const CMCpriceConverter = ({
  from,
  to,
  fromSymbol,
  toSymbol,
  fromLogo,
  toLogo,
  price,
}) => {
  const { convertCrypto } = useContext(CoinMarketContext)
  console.log(convertCrypto)

  const coinIcon = () => {
    switch (from) {
      case 'Bitcoin':
        return (
          <Image
            src={btc}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        )

      case 'Ethereum':
        return (
          <Image
            src={eth}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        )

      case 'Tether':
        return (
          <Image
            src={usdt}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        )

      case 'BNB':
        return (
          <Image
            src={bnb}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        )

      case 'USD Coin':
        return (
          <Image
            src={usdc}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        )

      case 'XRP':
        return (
          <Image
            src={xrp}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        )

      case 'Cardano':
        return (
          <Image
            src={cardano}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        )

      case 'Terra':
        return (
          <Image
            src={tera}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        )

      case 'Solana':
        return (
          <Image
            src={solana}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        )

      case 'Avalanche':
        return (
          <Image
            src={avalanche}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        )

      default:
        return (
          <Image
            src={btc}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        )
    }
  }

  return (
    <div>
      <h2>
        {fromSymbol} to {toSymbol} Converter
      </h2>
      <br />
      <div className={styles.converter}>
        <div>
          <div className='flex'>
            <div className='avatar-container'>
              {fromLogo && fromLogo ? coinIcon() : <div></div>}
            </div>
            &nbsp; &nbsp;
            <div>
              <p>{fromSymbol}</p>
              <h4>{from}</h4>
            </div>
          </div>
        </div>

        <div className='flex'>
          <p className='text-3xl'>1</p>
          &nbsp;&nbsp;
          <div>
            <Image alt='' src={converter} width={40} height={40} />
          </div>
          &nbsp;&nbsp;
          <div className='flex'>
            {toLogo}
            &nbsp; &nbsp;
            <div>
              <p>{toSymbol}</p>
              <h4>{to}</h4>
            </div>
          </div>
        </div>

        <p className='text-3xl'>${price}</p>
      </div>

      <div className={styles.convertButton} onClick={convertCrypto}>
        Convert
      </div>
    </div>
  )
}

export default CMCpriceConverter
