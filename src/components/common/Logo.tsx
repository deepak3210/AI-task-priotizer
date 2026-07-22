import { memo } from 'react'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { APP_NAME } from '@/constants'
import { cn } from '@/utils'

interface LogoProps {
  collapsed?: boolean
  className?: string
}

function LogoComponent({ collapsed = false, className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)} aria-label={APP_NAME}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/25">
        <SparklesIcon className="h-5 w-5 text-white" aria-hidden="true" />
      </div>
      {!collapsed && (
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-slate-900 dark:text-slate-100">{APP_NAME}</p>
          <p className="truncate text-xs text-slate-500 dark:text-slate-400">Smart Prioritization</p>
        </div>
      )}
    </div>
  )
}

export const Logo = memo(LogoComponent)
