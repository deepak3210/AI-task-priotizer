import { memo, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'
import { Logo } from '@/components/common'
import { NavItemLink } from '@/components/navigation'
import { MAIN_NAV_ITEMS } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setSidebarCollapsed } from '@/redux/slices/settingsSlice'
import { logout, selectUser } from '@/redux/slices/userSlice'
import { cn } from '@/utils'

interface SidebarProps {
  mobile?: boolean
  onNavigate?: () => void
}

function SidebarComponent({ mobile = false, onNavigate }: SidebarProps) {
  const dispatch = useAppDispatch()
  const collapsed = useAppSelector((state) => state.settings.sidebarCollapsed)
  const user = useAppSelector(selectUser)

  const isCollapsed = !mobile && collapsed

  const handleToggleCollapse = useCallback(() => {
    dispatch(setSidebarCollapsed(!collapsed))
  }, [collapsed, dispatch])

  const handleLogout = useCallback(() => {
    dispatch(logout())
    onNavigate?.()
  }, [dispatch, onNavigate])

  return (
    <motion.aside
      initial={false}
      animate={{ width: mobile ? 280 : isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className={cn(
        'flex h-full flex-col border-r border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/80',
        mobile ? 'w-[280px]' : 'shrink-0',
      )}
      aria-label="Main navigation"
    >
      <div className="flex h-16 items-center justify-between px-4">
        <Logo collapsed={isCollapsed} />
        {!mobile && (
          <Tooltip title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
            <IconButton
              onClick={handleToggleCollapse}
              size="small"
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              className="!text-slate-500 dark:!text-slate-400"
            >
              {isCollapsed ? (
                <ChevronRightIcon className="h-5 w-5" />
              ) : (
                <ChevronLeftIcon className="h-5 w-5" />
              )}
            </IconButton>
          </Tooltip>
        )}
      </div>

      <Divider className="!border-slate-200/80 dark:!border-slate-800/80" />

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4" aria-label="Primary">
        {MAIN_NAV_ITEMS.map((item) => (
          <NavItemLink
            key={item.id}
            item={item}
            collapsed={isCollapsed}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <div className="border-t border-slate-200/80 p-3 dark:border-slate-800/80">
        {!isCollapsed && user && (
          <div className="mb-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50">
            <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
              {user.firstName} {user.lastName}
            </p>
            <p className="truncate text-xs text-slate-500 dark:text-slate-400">{user.email}</p>
          </div>
        )}

        <Tooltip title="Sign out">
          <button
            type="button"
            onClick={handleLogout}
            className={cn(
              'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-red-50 hover:text-red-600 dark:text-slate-400 dark:hover:bg-red-500/10 dark:hover:text-red-400',
              isCollapsed && 'justify-center px-2',
            )}
            aria-label="Sign out"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
            {!isCollapsed && <span>Sign out</span>}
          </button>
        </Tooltip>
      </div>
    </motion.aside>
  )
}

export const Sidebar = memo(SidebarComponent)
