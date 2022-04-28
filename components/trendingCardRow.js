import Rate from './cmc-table/rate'
import Image from 'next/image'

const styles = {
  trendingCardRow: `flex items-center justify-between mb-4 text-[0.93rem]`,
}

const TrendingCardRow = ({ number, icon, name, symbol, isIncrement, rate }) => {
  return (
    <div className={styles.trendingCardRow}>
      <p className='opacity-40'>{number}</p>
      <div className='w-full flex'>
        <div className='mx-5'>
          {icon && <Image alt='' src={icon} width={20} height={20} />}
        </div>
        <p className='font-bold'>
          {name}
          <span className='text-gray-400'> {symbol}</span>
        </p>
      </div>
      <Rate isIncrement={isIncrement} rate={rate} />
    </div>
  )
}

export default TrendingCardRow
