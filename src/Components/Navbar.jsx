
import '../App.css'
import logo from '../Resources/site_logo.png'
export default function Navbar() {
  return (
    <nav className=' flex justify-between'>
        <div className='flex '>
            <img src={logo} alt="" className=' w-20 h-16 '/>
        <h1 className=' text-black font-bold  -ml-3 text-3xl mt-1'>SAMURAI</h1>
        </div>
        <button  className='rounded-xl mt-3 text-white w-20 bg-git-btn   mr-3 mb-2 pb-1'> <a href='https://github.com/Tushar1619/Samurai' target="_blank" rel="noreferrer">Github</a> </button>
    </nav>
  )
}
