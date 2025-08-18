import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Chatbot Demo
        </h1>
      </div>
      
      {/* Chatbot Component */}
      <Chatbot />
    </main>
  )
}
