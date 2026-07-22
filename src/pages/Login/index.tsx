import { memo, useCallback, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import { AuthLayout } from '@/layouts'
import { ROUTES } from '@/constants'
import { useAppDispatch } from '@/redux/hooks'
import { loginSuccess } from '@/redux/slices/userSlice'
import type { User } from '@/types'

const mockUser: User = {
  id: 'user-1',
  email: 'alex.johnson@example.com',
  firstName: 'Alex',
  lastName: 'Johnson',
  role: 'admin',
  createdAt: '2025-01-15T08:00:00.000Z',
}

function LoginPageComponent() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      dispatch(loginSuccess(mockUser))
      navigate(ROUTES.DASHBOARD, { replace: true })
    },
    [dispatch, navigate],
  )

  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to your account to continue">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <TextField
          label="Email address"
          type="email"
          fullWidth
          required
          defaultValue="alex.johnson@example.com"
          slotProps={{
            input: {
              className: '!text-slate-900 dark:!text-slate-100',
            },
          }}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          defaultValue="password123"
          slotProps={{
            input: {
              className: '!text-slate-900 dark:!text-slate-100',
            },
          }}
        />

        <div className="flex items-center justify-between">
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label={<span className="text-sm text-slate-300">Remember me</span>}
          />
          <button
            type="button"
            className="text-sm font-medium text-indigo-300 transition-colors hover:text-indigo-200"
          >
            Forgot password?
          </button>
        </div>

        <Button type="submit" variant="contained" fullWidth size="large" className="!mt-2">
          Sign in
        </Button>

        <p className="text-center text-sm text-slate-400">
          Don&apos;t have an account?{' '}
          <Link to={ROUTES.REGISTER} className="font-medium text-indigo-300 hover:text-indigo-200">
            Create one
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}

export default memo(LoginPageComponent)
