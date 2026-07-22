import { memo } from 'react'
import { PageHeader } from '@/components/common'

function AIPageComponent() {
  return (
    <div>
      <PageHeader
        title="AI Assistant"
        description="Smart recommendations to help you prioritize what matters most."
      />
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/50 p-12 text-center dark:border-slate-700 dark:bg-slate-900/50">
        <p className="text-slate-500 dark:text-slate-400">AI recommendation cards — Step 5</p>
      </div>
    </div>
  )
}

export default memo(AIPageComponent)
