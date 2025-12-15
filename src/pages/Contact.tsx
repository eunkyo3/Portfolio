import { useState } from 'react'
import { useI18n } from '../contexts/I18nContext'

export function Contact() {
  const { t } = useI18n()
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sent')
  }

  return (
    <section className="max-w-xl">
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">{t.contact.title}</h2>
      {status === 'sent' ? (
        <div className="rounded border border-green-200 bg-green-50 text-green-700 p-4 dark:border-green-700 dark:bg-green-900/30 dark:text-green-200">
          {t.contact.sent}
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-1">{t.contact.email}</label>
            <input required type="email" className="w-full rounded bg-white border border-neutral-300 px-3 py-2 text-neutral-900 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-100" />
          </div>
          <div>
            <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-1">{t.contact.message}</label>
            <textarea required className="w-full rounded bg-white border border-neutral-300 px-3 py-2 h-32 text-neutral-900 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-100" />
          </div>
          <button type="submit" className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white">
            {t.contact.send}
          </button>
        </form>
      )}
    </section>
  )
}


