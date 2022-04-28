import { useContext } from 'react'
import { CoinMarketContext } from '../context/context'

const styles = {
  modal: `w-screen h-screen bg-gray-900/90 z-10 fixed top-0 left-0 flex items-center justify-center`,
  modalContent: `bg-white rounded-lg p-3 w-max w-1/3`,
  input: `w-full p-2 border rounded-lg mb-5 border-gray-600/50 outline-none`,
  button: `bg-[#6188FF] p-2 px-5 rounded-lg text-white hover:opacity-50`,
  label: `font-bold text-3xl`,
  closeModalButton: `hover:text-red-300 text-gray-600 cursor-pointer`,
}

const SwapCryptoModal = () => {
  const {
    openBuyCryptoModal,
    setOpenBuyCryptoModal,
    mint,
    coins,
    loadingCoins,
    amount,
    setAmount,
    fromToken,
    setFromToken,
    toToken,
    setToToken,
  } = useContext(CoinMarketContext)

  if (openBuyCryptoModal)
    return (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className='flex items-center justify-between'>
            <p className={styles.label}>Swap your crypto</p>
            <p
              className={styles.closeModalButton}
              onClick={() => {
                setOpenBuyCryptoModal(false)
                setAmount(0)
                setFromToken('')
                setToToken('')
              }}
            >
              close &times;
            </p>
          </div>
          <div className='mb-5' />
          <label htmlFor='fromToken' className='block mb-2 ml-2'>
            From
          </label>
          <select
            name='fromToken'
            className={styles.input}
            placeholder='Token to swap'
            onChange={e => setFromToken(e.target.value)}
            value={fromToken}
          >
            {coins.map(coin => {
              if (!loadingCoins) {
                return (
                  <option key={coin.id} value={coin.attributes.name}>
                    {coin.attributes.name}
                  </option>
                )
              }
            })}
            <option value='ETH'>ETH</option>
          </select>
          <label htmlFor='fromToken' className='block mb-2 ml-2'>
            To
          </label>
          <select
            name='toToken'
            className={styles.input}
            placeholder='Token to swap'
            onChange={e => setToToken(e.target.value)}
            value={toToken}
          >
            {coins.map(coin => {
              if (!loadingCoins) {
                return (
                  <option key={coin.id} value={coin.attributes.name}>
                    {coin.attributes.name}
                  </option>
                )
              }
            })}
          </select>
          <label htmlFor='amount' className='block mb-2 ml-2'>
            Amount
          </label>
          <input
            name='amount'
            className={styles.input}
            placeholder='Token to swap'
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />

          <button className={styles.button} onClick={mint}>
            Swap!
          </button>
        </div>
      </div>
    )

  return <></>
}

export default SwapCryptoModal
