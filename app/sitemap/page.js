import Link from 'next/link'

export default function SitemapPage() {
  const pages = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Contact', path: '/contact' },
    { title: 'Blog', path: '/blog' },
    { title: 'Careers', path: '/careers' },
    { title: 'Help', path: '/help' },
    { title: 'Privacy Policy', path: '/privacy' },
    { title: 'Terms of Service', path: '/terms' },
  ]

  return (
    <div className="min-h-screen pt-32 container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">Sitemap</h1>
      <div className="glass-card p-8">
        <div className="grid md:grid-cols-3 gap-4">
          {pages.map((page) => (
            <Link key={page.path} href={page.path}>
              <div className="text-gray-300 hover:text-[#4ECDC4] transition-colors">
                {page.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}