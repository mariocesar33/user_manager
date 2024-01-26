import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // container
    <main className="grid min-h-screen grid-cols-5">
      {/* Menu */}
      <div className="col-span-1 flex w-full bg-muted p-5">
        <Sidebar />
      </div>
      {/* Content */}
      <div className="col-span-4 max-h-screen overflow-y-scroll p-5">
        <Navbar />
        {children}
      </div>
    </main>
  )
}
