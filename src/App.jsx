import Sidebar from './Components/Sidebar'
import reactLogo from './assets/react.svg'

function App() {
  return (
    <>
      <input className='hidden' type="checkbox" id='sidebarToggle' />

      <label htmlFor="sidebarToggle"
        className='text-white cursor-pointer p-3 hover:bg-gray-700 
        rounded-lg fixed right-2 top-2'>
        <svg xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </label>

      <Sidebar />

      <section
        className='h-screen w-full 
        flex flex-col justify-center items-center gap-7'>
        <img
          className='w-52 h-52 
          object-contain aspect-square animate-spin'
          src={reactLogo}
          alt="React Logo"
        />
        <h1 className='text-4xl font-semibold text-sky-400'>
          React App
        </h1>
      </section>
    </>
  )
}

export default App