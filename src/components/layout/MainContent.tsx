import { memo, type ReactNode } from 'react'
import { cn } from '@/utils'

interface MainContentProps {
  children: ReactNode
  className?: string
}

function MainContentComponent({ children, className }: MainContentProps) {
  return (
    <main
      id="main-content"
      className={cn(
        'flex-1 overflow-y-auto bg-slate-50/50 p-4 dark:bg-slate-950/50 sm:p-6 lg:p-8',
        className,
      )}
      role="main"
      tabIndex={-1}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </main>
  )
}

export const MainContent = memo(MainContentComponent)
