import { memo } from 'react'
import { NavLink } from 'react-router'
import { cn } from '@/utils'
import type { NavItem } from '@/constants'

interface NavItemLinkProps {
  item: NavItem
  collapsed?: boolean
  onNavigate?: () => void
}

function NavItemLinkComponent({ item, collapsed = false, onNavigate }: NavItemLinkProps) {
  const Icon = item.icon

  return (
    <NavLink
      to={item.path}
      end={item.path === '/'}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900',
          isActive
            ? 'bg-indigo-50 text-indigo-700 shadow-sm dark:bg-indigo-500/15 dark:text-indigo-300'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-slate-100',
          collapsed && 'justify-center px-2',
        )
      }
      aria-label={item.label}
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <span
              className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-indigo-500"
              aria-hidden="true"
            />
          )}
          <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
          {!collapsed && <span className="truncate">{item.label}</span>}
          {!collapsed && item.badge !== undefined && item.badge > 0 && (
            <span className="ml-auto rounded-full bg-indigo-500 px-2 py-0.5 text-xs font-semibold text-white">
              {item.badge}
            </span>
          )}
        </>
      )}
    </NavLink>
  )
}

export const NavItemLink = memo(NavItemLinkComponent)
