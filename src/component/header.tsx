import logo from '../assets/logo.png'
import LogoutIcon from '@mui/icons-material/Logout'
import {Button, Typography} from '@mui/material'

const Header = () => {
  return (
    <div className="flex flex-1 justify-between border w-full py-3 px-4 shadow border-b border-slate-200">
      <div className="right-side flex items-center justify-end gap-2">
        <img src={logo} alt="log" />
        <div className="h-full border-r-0 border-neutral-200 divide-x-8 border"></div>
        <Typography variant="subtitle2" component="span">
          {' '}
          سامانه جامع مدیریت اطلاعات اشخاص
        </Typography>
      </div>

      <div className="left-side flex items-center">
        <Button color="error" variant="text" startIcon={<LogoutIcon />}>
          خروج
        </Button>
      </div>
    </div>
  )
}
export default Header
