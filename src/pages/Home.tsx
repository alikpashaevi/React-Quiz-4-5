import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
      <div className="mb-8">
        <img src="https://picsum.photos/800/400" alt="Hero" className="rounded-lg shadow-lg"/>
      </div>
      <p className="text-xl mb-8">Explore our amazing gallery of images!</p>
      <Link
        to="/gallery"
        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300"
      >
        Go To Gallery
      </Link>

    </div>
  )
}

