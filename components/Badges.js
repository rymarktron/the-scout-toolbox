import arts from './../public/badges/arts.png'
import camera from './../public/badges/camera.png'
import canada from './../public/badges/canada.png'
import cooking from './../public/badges/cooking.png'
import maps from './../public/badges/maps.png'
import rewards from './../public/badges/rewards.png'
import tracks from './../public/badges/tracks.png'
import tree from './../public/badges/tree.png'
import tradition from './../public/badges/traditions.png'
import outdoor_games from './../public/badges/outdoor_games.png'
import snow from './../public/badges/snow.png'
import weather from './../public/badges/weather.png'

import Image from 'next/image'

//12 is a good number on main page. 4x3,2x6,1x12
const skills = [
    {
      name: 'Painting',
      role: 'Arts',
      imageUrl: arts,
    },
    {
        name: 'Photography',
        role: 'Arts',
        imageUrl: camera,
      },
      {
        name: 'Canada',
        role: 'History',
        imageUrl: canada,
      },
      {
        name: 'Cooking',
        role: 'Outdoor Skills',
        imageUrl: cooking,
      },
      {
        name: 'Maps',
        role: 'Outdoor Skills',
        imageUrl: maps,
      },
      {
        name: 'Rewards',
        role: 'Arts',
        imageUrl: rewards,
      },
      {
        name: 'Track ID',
        role: 'Outdoor Skills',
        imageUrl: tracks,
      },
      {
        name: 'Tree ID',
        role: 'Outdoor Skills',
        imageUrl: tree,
      },
      {
        name: 'Weather',
        role: 'Outdoor Skills',
        imageUrl: weather,
      },
      {
        name: 'Outdoor Games',
        role: 'Outdoor Skills',
        imageUrl: outdoor_games,
      },
      {
        name: 'Traditions',
        role: 'Outdoor Skills',
        imageUrl: tradition,
      },
      {
        name: 'Snow',
        role: 'Outdoor Skills',
        imageUrl: snow,
      },
      
  ]
  
  export default function Badges() {
    return (
      <div className="bg-white">
        <div className="px-6 py-12 mx-auto text-center max-w-7xl lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The Skills</h2>
              <p className="text-xl text-gray-500">
                We feature a variety of skills that you can learn and earn badges for.
              </p>
            </div>
            <ul
              role="list"
              className="grid grid-cols-2 mx-auto gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
            >
              {skills.map((hobby) => (
                <li key={hobby.name}>
                  <div className="space-y-4">
                    <Image className="h-20ounded-full w mx-25 w-25 lg:h-30 lg:w-30" src={hobby.imageUrl} alt="" />
                    <div className="space-y-2">
                      <div className="text-xs font-medium lg:text-sm">
                        <h1>{hobby.name}</h1>
                        <p className="text-green-700">{hobby.role}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }