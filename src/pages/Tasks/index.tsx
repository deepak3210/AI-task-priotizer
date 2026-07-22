import { memo } from 'react'
import { PageHeader } from '@/components/common'

function TasksPageComponent() {
  return (
    <div>
      <PageHeader
        title="Tasks"
        description="Manage your tasks with table, kanban, and calendar views."
      />
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/50 p-12 text-center dark:border-slate-700 dark:bg-slate-900/50">
        <p className="text-slate-500 dark:text-slate-400">Task management UI — Step 3</p>
      </div>
    </div>
  )
}

export default memo(TasksPageComponent)
