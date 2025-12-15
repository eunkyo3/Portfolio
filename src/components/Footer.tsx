export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="container-responsive py-6 text-sm text-neutral-600 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Eunkyo&apos;s Portfolio</p>
        <div className="flex items-center gap-4">
          <a
            className="hover:text-neutral-900 dark:hover:text-white"
            href="https://github.com/eunkyo3"
            target="_blank"
            rel="noreferrer"
          >
            GitHub · 소스 코드 저장소
          </a>
          <a
            className="hover:text-neutral-900 dark:hover:text-white"
            href="https://kyo-0209.notion.site/2caeed92c4108090bccfccd2f56b3c6d"
            target="_blank"
            rel="noreferrer"
          >
            Notion 포트폴리오
          </a>
        </div>
      </div>
    </footer>
  )
}


