import { memo } from 'react'
import { PageHeader } from '@/components/common'

function SettingsPageComponent() {
  return (
    <div>
      <PageHeader title="Settings" description="Manage your profile, preferences, and notifications." />
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/50 p-12 text-center dark:border-slate-700 dark:bg-slate-900/50">
        <p className="text-slate-500 dark:text-slate-400">Settings panel — Step 6</p>
      </div>
    </div>
  )
}

export default memo(SettingsPageComponent)
