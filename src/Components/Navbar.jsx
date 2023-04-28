
import '../App.css'
import logo from '../Resources/site_logo.png'
export default function Navbar() {
  return (
    <nav className=' flex justify-between'>
        <div className='flex '>
            <img src={logo} alt="" className=' w-20 h-16 '/>
        <h1 className='titlefontStyle -ml-3 text-3xl mt-3'>Samurai</h1>
        </div>
        <button className='rounded-lg bg-black  mt-3 text-white w-20   mr-3 mb-2 pb-1'> <a href=''>Github</a> </button>
    </nav>
  )
}
