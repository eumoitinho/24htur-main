'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function RDStationWhatsApp() {
  const pathname = usePathname()

  // Não carrega o script nas páginas do studio
  if (pathname?.startsWith('/studio')) {
    return null
  }

  return (
    <script
      type="text/javascript"
      async
      src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/2deb2af1-fe70-43e5-ab3b-70dc4e7a9a77-loader.js"
    />
  )
}
