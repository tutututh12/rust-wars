import { useState } from 'react'
import Map, { Marker, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const INITIAL_VIEW_STATE = {
  latitude: 0,
  longitude: 0,
  zoom: 3
}

interface POI {
  id: number
  name: string
  type: 'pvp' | 'shop' | 'monument'
  latitude: number
  longitude: number
}

const POINTS_OF_INTEREST: POI[] = [
  { id: 1, name: 'Death Star Arena', type: 'pvp', latitude: 0, longitude: 0 },
  { id: 2, name: 'Rebel Shop', type: 'shop', latitude: 0.02, longitude: 0.02 },
  { id: 3, name: 'Imperial Base', type: 'monument', latitude: -0.02, longitude: -0.02 },
]

export default function MapPreview() {
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE)

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden">
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
        <NavigationControl />
        
        {POINTS_OF_INTEREST.map((poi) => (
          <Marker
            key={poi.id}
            latitude={poi.latitude}
            longitude={poi.longitude}
          >
            <div className="relative group">
              <div className="w-4 h-4 bg-sw-accent rounded-full cursor-pointer" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-sw-blue-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {poi.name}
              </div>
            </div>
          </Marker>
        ))}
      </Map>
    </div>
  )
} 