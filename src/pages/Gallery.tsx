"use client"

import { useState, useEffect } from "react"
import axios from "axios"

interface Photo {
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get<Photo[]>("https://jsonplaceholder.typicode.com/photos?_limit=4")
        setPhotos(response.data)
      } catch (error) {
        console.error("Error fetching photos:", error)
      }
    }

    fetchPhotos()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={photo.url || "/placeholder.svg"} alt={photo.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{photo.title}</h2>
              <p className="text-gray-600">Photo ID: {photo.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

