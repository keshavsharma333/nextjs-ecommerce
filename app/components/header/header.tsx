import { Urbanist } from 'next/font/google'
import { Burger } from '@/app/components/header/burger/burger'
import { CartIcon } from './cart-icon/cart-icon'

const urbanist100 = Urbanist({
  subsets: ['latin'],
  weight: '100'
})

const urbanist400 = Urbanist({
  subsets: ['latin'],
  weight: '400'
})

export const Header = () => {
  return (
    <header
      className={`flex w-full select-none ${urbanist400.className}`}
      style={{ height: '12vh' }}
    >
      <nav className='flex bg-white justify-center items-center h-full w-full'>
        <Burger />
        <div className={`flex ${urbanist100.className}`}>
          <h1 id='title' className='flex justify-self-center antialiased'>
            <span className='text-3xl sm:text-5xl scale-100'>A</span>
            <span className='text-3xl sm:text-5xl -scale-x-100'>N</span>
            <span className='text-3xl sm:text-5xl scale-100'>VERSO</span>
          </h1>

          <h2 className='hidden sm:flex flex-col text-xs'>
            <span className='mt-1'>STYLING</span>
            <span className='-my-1'>YOUR</span>
            <span className='mb-1'>DESIRES</span>
          </h2>
        </div>
        <CartIcon />
      </nav>
    </header>
  )
}
