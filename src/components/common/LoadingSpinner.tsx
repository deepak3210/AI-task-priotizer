import { memo } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { cn } from '@/utils'

interface LoadingSpinnerProps {
  size?: number
  className?: string
  label?: string
}

function LoadingSpinnerComponent({
  size = 40,
  className,
  label = 'Loading',
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn('flex flex-col items-center justify-center gap-3', className)}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <CircularProgress size={size} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </div>
  )
}

export const LoadingSpinner = memo(LoadingSpinnerComponent)
