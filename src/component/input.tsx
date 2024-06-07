import type {FC, HTMLInputTypeAttribute} from 'react'

import {InputAdornment, SvgIconTypeMap} from '@mui/material'

import TextField from '@mui/material/TextField'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form'
import {OverridableComponent} from '@mui/material/OverridableComponent'

interface inputProps {
  id: string
  register: UseFormRegister<FieldValues>
  registerOptions?: RegisterOptions
  className?: string
  errors: FieldErrors
  dirtyFields: boolean
  required?: boolean
  helperText?: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  startIcon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
  endIcon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
}
type PropsHandelEndIcon = {
  dirtyFields: boolean
  errors: boolean
  endIcon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
  registerOptions?: RegisterOptions
  required?: boolean
}

// const InputStyle = styled(TextField)<TextFieldProps>(({theme}) => {
//   const {primary, success, error} = theme.palette

//   return {
//     // Root class for the input field

//     '& .MuiOutlinedInput-root': {
//       // Class for the border around the input field
//       '& .MuiOutlinedInput-notchedOutline': {
//         borderWidth: '1px',
//       },
//       '&.Mui-focused': {
//         '& .MuiOutlinedInput-notchedOutline': {
//           borderWidth: '2px',
//         },
//       },
//       '&:hover:not(.Mui-focused)': {
//         '& .MuiOutlinedInput-notchedOutline': {
//           borderColor: '#0000003b',
//         },
//       },
//     },
//   }
// }) as typeof TextField

const HandelEndIcon: React.FC<PropsHandelEndIcon> = ({
  dirtyFields,
  errors,
  endIcon: EndIcon,
  registerOptions,
  required,
}): JSX.Element | undefined | null => {
  if (registerOptions || required) {
    if (!dirtyFields && !errors) {
      return EndIcon ? <EndIcon /> : null
    } else if (errors) {
      return <ErrorOutlineIcon color="error" />
    } else {
      return <CheckCircleIcon color="success" />
    }
  }

  return EndIcon && <EndIcon />
}

const Input: FC<inputProps> = ({
  id,
  register,
  registerOptions,
  className,
  required,
  errors,
  dirtyFields,
  helperText,
  type,
  placeholder,
  startIcon: StartIcon,
  endIcon,
}) => {
  return (
    <TextField
      className={className}
      required={required || !!registerOptions?.required}
      fullWidth
      type={type}
      variant="outlined"
      color={dirtyFields ? 'success' : 'primary'}
      label={'نام'}
      {...register(id, {
        required,
        ...registerOptions,
      })}
      InputProps={{
        startAdornment: StartIcon && (
          <InputAdornment position="start" disablePointerEvents={true}>
            <StartIcon />
          </InputAdornment>
        ),

        endAdornment: (
          <HandelEndIcon
            dirtyFields={dirtyFields}
            errors={!!errors[id]}
            endIcon={endIcon}
            registerOptions={registerOptions}
            required={required}
          />
        ),

        // endAdornment: (
        //   (!dirtyFields && !errors['firstName']) ? (<AccountCircle/>) :
        //   (errors['firstName']?
        //   <ErrorOutlineIcon color="error" />:<CheckCircleIcon color='success' /> )
        //   )
      }}
      error={Boolean(errors[id])}
      placeholder={placeholder}
      helperText={errors[id] ? (errors[id]?.message as string) : helperText}
    />
  )
}
export default Input
