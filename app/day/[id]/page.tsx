import Link from 'next/link'

export default function DayPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-700 to-purple-700">
      <h1 className="text-4xl font-bold text-white mb-8">Day {params.id}</h1>
      <p className="text-xl text-white mb-8">Content for Day {params.id} goes here.</p>
      <Link href="/" className="text-white underline">Back to Calendar</Link>
    </div>
  )
}

