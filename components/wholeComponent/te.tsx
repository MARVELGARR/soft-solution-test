'use client'
import dynamic from 'next/dynamic'


export default function MyPage() {
    const Map = dynamic(
      () => import("@/components/wholeComponent/mapComponent"),
      { 
        loading: () => <p>A map is loading</p>,
        ssr: false
      }
    )
  
    return <div>
      <Map />
    </div>
  }
