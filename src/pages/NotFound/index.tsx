import { memo } from 'react'
import { Link } from 'react-router'
import Button from '@mui/material/Button'
import { ROUTES } from '@/constants'

function NotFoundPageComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 dark:bg-slate-950">
      <p className="text-8xl font-bold text-indigo-500">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-50">Page not found</h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button component={Link} to={ROUTES.DASHBOARD} variant="contained" className="!mt-6">
        Back to Dashboard
      </Button>
    </div>
  )
}

export default memo(NotFoundPageComponent)
