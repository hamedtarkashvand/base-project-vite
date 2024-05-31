import {useForm} from 'react-hook-form'
import TextField, {TextFieldProps} from '@mui/material/TextField'
import {styled} from '@mui/system'

import './App.css'

import {Autocomplete, Button, Icon, IconButton, InputAdornment, PaletteOptions} from '@mui/material'
import {AccountCircle, BorderColor} from '@mui/icons-material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useEffect } from 'react'
import Input from './component/input'

const Hamed = styled(TextField)<TextFieldProps>(({theme}) => {
  const {primary , success , error } = theme.palette 
  
  return ({
    // Root class for the input field

    '& .MuiOutlinedInput-root': {
      // Class for the border around the input field
      '& .MuiOutlinedInput-notchedOutline': {
         borderWidth: "1px",
      },
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderWidth: "2px",
        },
      },
      '&:hover:not(.Mui-focused)': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#0000003b',
        },
      },
    },
    
  })
})

type FormData = {
  firstName: string;
    name: string;
};

function App() {
  const {
    register,
    getValues,
    trigger,
    formState: {errors , dirtyFields },
  } = useForm<FormData>({
    defaultValues:{
      firstName:'',
      name:''
    },
    mode: 'all',
  })

  
  useEffect(()=>{
    console.log(dirtyFields);
    
  },[])


  return (
    <div
      className="
       max-w-[1920px] 
    ">
      <Hamed
        className=""
        fullWidth
        variant="outlined"
        color={dirtyFields['firstName'] ? 'success' : 'primary'}
        label={'نام کاربری'}
        {...register('firstName', {
          required: {
            value: true,
            message: 'نام کاربری وارد کنید',
          },
        })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" disablePointerEvents={true}>
              <AccountCircle />
            </InputAdornment>
          ),

          endAdornment: (
            !dirtyFields['firstName'] &&  !errors['firstName']  ? (<AccountCircle/>) :
            (errors['firstName']? 
            <ErrorOutlineIcon color="error" />:<CheckCircleIcon color='success' />  
            ))
          
        }}
        error={!!errors['firstName']}
        placeholder="نام"
        helperText={(errors['firstName']?.message as string) || 'نام کاربری'}
      />

      <Input id='name'
      errors={errors} 
      placeholder='محل وارد کردن نام'
      register={register}
      // registerOptions={{
      //   required:{
      //     value:true,
      //     message:'نام کاربری اجباری است'
      //   }
      // }}
      dirtyFields={Boolean(dirtyFields.name)}
      helperText="این متن کمکی برای وارد کردن نام است"
      startIcon={AccountCircle}
      endIcon={AccountCircle}
      required
      />
   
    </div>
  )
}
export default App
