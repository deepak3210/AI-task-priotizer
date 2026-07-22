import { memo } from 'react'
import { Outlet } from 'react-router'
import { Navbar, Sidebar, MainContent } from '@/components/layout'
import { useIsMobile } from '@/hooks'

function DashboardLayoutComponent() {
  const isMobile = useIsMobile()

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100 dark:bg-slate-950">
      {!isMobile && <Sidebar />}

      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </div>
  )
}

export const DashboardLayout = memo(DashboardLayoutComponent)
