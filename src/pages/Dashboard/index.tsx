import { memo } from 'react'
import { motion } from 'framer-motion'
import { PageHeader } from '@/components/common'

function DashboardPageComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here's an overview of your tasks and productivity."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {['Total Tasks', 'Completed', 'Pending', 'Overdue', 'Focus Today', 'Productivity'].map(
          (label) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/70"
            >
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-50">—</p>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                Data loads in Step 2
              </p>
            </div>
          ),
        )}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="min-h-[280px] rounded-2xl border border-dashed border-slate-300 bg-white/50 p-6 dark:border-slate-700 dark:bg-slate-900/50">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Weekly Productivity
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Chart.js widgets will be added in Step 2.
          </p>
        </div>
        <div className="min-h-[280px] rounded-2xl border border-dashed border-slate-300 bg-white/50 p-6 dark:border-slate-700 dark:bg-slate-900/50">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            AI Recommendations
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            AI recommendation cards will be added in Step 2.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default memo(DashboardPageComponent)
