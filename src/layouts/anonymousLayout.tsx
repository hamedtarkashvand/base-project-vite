import type {FC} from 'react'
import {Outlet} from 'react-router-dom'

interface anonymousLayoutProps {}

const AnonymousLayout: FC<anonymousLayoutProps> = () => {
  return (
    <>
      <div
        className="layout  
             flex
             flex-col
             h-full
                ">
        <Outlet />
        AnonymousLayout
      </div>
    </>
  )
}
export default AnonymousLayout
