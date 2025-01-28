import { useParams } from "react-router-dom"

export default function Profile() {
  const { name } = useParams<{ name?: string }>()
  const displayName = name || "Alik"

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Profile</h1>
      <p className="text-2xl">Made By {displayName}</p>
    </div>
  )
}

