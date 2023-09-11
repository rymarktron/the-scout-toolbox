import React from 'react'
import Image from 'next/image'; // Import the next/image component
import ScoutTrail from '@/images/badges/scout-trail.png'

const Cover = () => {
  return (
    <div>
      <Image
        src={ScoutTrail}
        alt="Scout Trail"
        width={500} // Set the width of the image
      />
    </div>
  )
}

export default Cover