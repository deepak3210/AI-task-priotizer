import { memo, type ReactNode } from 'react'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { Logo } from '@/components/common'
import { ROUTES } from '@/constants'

interface AuthLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
}

function AuthLayoutComponent({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.2),_transparent_45%)]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="mb-8 flex justify-center">
          <Link to={ROUTES.LOGIN} aria-label="Go to login">
            <Logo />
          </Link>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            {subtitle && <p className="mt-2 text-sm text-slate-300">{subtitle}</p>}
          </div>
          {children}
        </div>
      </motion.div>
    </div>
  )
}

export const AuthLayout = memo(AuthLayoutComponent)
