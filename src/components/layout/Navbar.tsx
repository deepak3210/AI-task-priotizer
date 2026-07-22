import { memo, useCallback, useState } from 'react'
import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Badge from '@mui/material/Badge'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import InputBase from '@mui/material/InputBase'
import Tooltip from '@mui/material/Tooltip'
import { ThemeToggle } from '@/components/common'
import { Sidebar } from './Sidebar'
import { useAppSelector } from '@/redux/hooks'
import { selectUnreadCount } from '@/redux/slices/notificationsSlice'
import { selectUser } from '@/redux/slices/userSlice'
import { useIsMobile } from '@/hooks'
import { getInitials } from '@/utils'

interface NavbarProps {
  onMenuClick?: () => void
}

function NavbarComponent({ onMenuClick }: NavbarProps) {
  const isMobile = useIsMobile()
  const user = useAppSelector(selectUser)
  const unreadCount = useAppSelector(selectUnreadCount)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleOpenMenu = useCallback(() => {
    if (onMenuClick) {
      onMenuClick()
      return
    }
    setMobileOpen(true)
  }, [onMenuClick])

  const handleCloseMenu = useCallback(() => {
    setMobileOpen(false)
  }, [])

  return (
    <>
      <header
        className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-slate-200/80 bg-white/80 px-4 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/80 sm:px-6"
        role="banner"
      >
        {isMobile && (
          <IconButton
            onClick={handleOpenMenu}
            aria-label="Open navigation menu"
            size="small"
            className="!text-slate-600 dark:!text-slate-300"
          >
            <Bars3Icon className="h-6 w-6" />
          </IconButton>
        )}

        <div className="relative hidden min-w-0 flex-1 md:block md:max-w-md lg:max-w-lg">
          <MagnifyingGlassIcon
            className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <InputBase
            placeholder="Search tasks, projects..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            inputProps={{
              'aria-label': 'Search tasks and projects',
            }}
            className="w-full rounded-xl border border-slate-200/80 bg-slate-50/80 pl-10 pr-4 py-2 text-sm text-slate-900 transition-colors focus-within:border-indigo-400 focus-within:bg-white dark:border-slate-700/80 dark:bg-slate-800/50 dark:text-slate-100 dark:focus-within:border-indigo-500 dark:focus-within:bg-slate-800"
          />
        </div>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <ThemeToggle />

          <Tooltip title="Notifications">
            <IconButton
              aria-label={`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ''}`}
              size="small"
              className="!text-slate-600 dark:!text-slate-300"
            >
              <Badge badgeContent={unreadCount} color="error" max={99}>
                <BellIcon className="h-5 w-5" />
              </Badge>
            </IconButton>
          </Tooltip>

          {user && (
            <Tooltip title={`${user.firstName} ${user.lastName}`}>
              <Avatar
                alt={`${user.firstName} ${user.lastName}`}
                className="!h-9 !w-9 !bg-gradient-to-br !from-indigo-500 !to-violet-600 !text-sm !font-semibold"
              >
                {getInitials(user.firstName, user.lastName)}
              </Avatar>
            </Tooltip>
          )}
        </div>
      </header>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleCloseMenu}
        slotProps={{
          paper: {
            className: '!bg-transparent !shadow-none',
          },
        }}
        sx={{ display: { lg: 'none' } }}
      >
        <div className="relative flex h-full">
          <Sidebar mobile onNavigate={handleCloseMenu} />
          <IconButton
            onClick={handleCloseMenu}
            aria-label="Close navigation menu"
            className="!absolute !right-2 !top-3 !text-slate-600 dark:!text-slate-300"
          >
            <XMarkIcon className="h-6 w-6" />
          </IconButton>
        </div>
      </Drawer>
    </>
  )
}

export const Navbar = memo(NavbarComponent)
