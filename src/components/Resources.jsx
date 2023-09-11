'use client'

import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import DirectionIcon from '@/images/badges/directions.png'
import CookingIcon from '@/images/badges/cooking.png'
import TreeIcon from '@/images/badges/tree.png'
import WeatherIcon from '@/images/badges/weather.png'
import WinterIcon from '@/images/badges/snow.png'
import OutdoorGamesIcon from '@/images/badges/outdoor_games.png'
import CampingIcon from '@/images/badges/camping.png'
import EmergencyPrepIcon from '@/images/badges/emergency.png'
import Image from 'next/image'

const resources = [
  {
    href: '/natureId',
    name: 'Nature Identification',
    description:
      'Decode the secrets of forests, understand woods role in fire, and harness natures protective gifts.',
    icon: TreeIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/hiking',
    name: 'Hiking',
    description:
      'Dive into the world of outdoor adventure, explore diverse terrains, and master map reading skills.',
    icon: DirectionIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/cooking',
    name: 'Cooking',
    description:
      'Discover the essential gear and techniques to whip up healthy, delicious dishes outdoors.',
    icon: CookingIcon,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/cooking',
    name: 'Weather',
    description:
      'Uncover the impact of cloud patterns on climate, enhance emergency preparedness, and stay weather-wise.',
    icon: WeatherIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/winter',
    name: 'Knot Tying',
    description:
      'Master the art of tying knots for various purposes, from camping to boating.',
    icon: WinterIcon,
    pattern: {
      y: 10,
      squares: [
        [1, 2],
        [2, 4],
      ],
    },
  },
  {
    href: '/games',
    name: 'Games',
    description:
      'Learn essential survival skills, from building shelters to finding food in the wild.',
    icon: OutdoorGamesIcon,
    pattern: {
      y: 8,
      squares: [
        [0, 3],
        [2, 5],
      ],
    },
  },
  {
    href: '/emergencyPrep',
    name: 'EmergencyPrepIcon',
    description:
      'One never knows when an emergency may occur. In Scouts, we prepared for it.',
    icon: DirectionIcon,
    pattern: {
      y: 14,
      squares: [
        [0, 1],
        [2, 3],
      ],
    },
  },
  {
    href: '/camping',
    name: 'Camping',
    description:
      'Discover the joys of cooking over an open fire and create delicious campfire meals.',
    icon: CampingIcon,
    pattern: {
      y: 28,
      squares: [[1, 2]],
    },
  },
]

function ResourceIcon({ imageSrc }) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-green-700/10 dark:group-hover:ring-green-700">
      <Image
        src={imageSrc}
        alt="Resource Icon"
        className="w-12 h-12 transition-colors duration-300"
      />
    </div>
  );
}


function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 transition duration-300 opacity-0 rounded-2xl mix-blend-overlay group-hover:opacity-100"
        style={style}
      >
      </motion.div>
    </div>
  )
}

function Resource({ resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-100 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative px-4 pt-16 pb-4 rounded-2xl">
        <ResourceIcon imageSrc={resource.icon} />
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
      </div>
    </div>
  )
}

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="resources">
        Guides
      </Heading>
      <div className="grid grid-cols-1 gap-8 pt-10 mt-4 border-t not-prose border-zinc-900/5 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
