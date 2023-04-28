import loader from '../Resources/loader.gif'


export default function Loader() {
  return (
    <div className='mt-20'>
        <img src={loader} alt="loader" className='h-10 mx-auto'/>
        <p className='text-sm text-center ml-2'>Loading....</p>
        
    </div>
  )
}
