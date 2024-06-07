import './App.css'
import {Routes} from './routes'

function App() {
  return (
    <div className=" w-full h-screen bottom-1 bg-slate-100 ">
      <div className=" max-w-[1920px] bg-white m-auto h-full">
        <div
          className="layout  
             flex
             flex-col
             h-full
                ">
          {/* <Header /> */}

          <Routes isAuthorized={true} />

          {/* <main className="flex flex-row w-full h-full">
            <nav className="flex flex-col w-64 border border-emerald-600 h-full">
              خزوج
            </nav>
            <section className="w-full h-full p-6">content</section>
          </main> */}
        </div>
      </div>
    </div>
  )
}
export default App
