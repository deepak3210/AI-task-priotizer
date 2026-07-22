import { memo } from 'react'
import { Link } from 'react-router'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { AuthLayout } from '@/layouts'
import { ROUTES } from '@/constants'

function RegisterPageComponent() {
  return (
    <AuthLayout title="Create account" subtitle="Start prioritizing your tasks with AI assistance">
      <form className="space-y-4" noValidate onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="First name" fullWidth required />
          <TextField label="Last name" fullWidth required />
        </div>
        <TextField label="Email address" type="email" fullWidth required />
        <TextField label="Password" type="password" fullWidth required />
        <TextField label="Confirm password" type="password" fullWidth required />

        <Button type="submit" variant="contained" fullWidth size="large">
          Create account
        </Button>

        <p className="text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link to={ROUTES.LOGIN} className="font-medium text-indigo-300 hover:text-indigo-200">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}

export default memo(RegisterPageComponent)
