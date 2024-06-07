import {Outlet} from 'react-router-dom'
import Header from '../component/header'

const MainLayout: React.FC = () => {
  return (
    <>
      <>
        <div
          className="layout  
             flex
             flex-col
             h-full
                ">
          <Header />

          <main className="flex flex-row w-full h-full">
            <nav className="flex flex-col w-64 border border-emerald-600 h-full">
              خروج
            </nav>
            <section className="w-full h-full p-6">
              <Outlet />
            </section>
          </main>
        </div>
      </>
    </>
  )
}
export default MainLayout
