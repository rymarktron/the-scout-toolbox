import { BoltIcon, BugAntIcon, SunIcon ,MapIcon,PuzzlePieceIcon, LifebuoyIcon, RocketLaunchIcon, ClockIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Camping',
    description:
      'Quam a velit animi fuga ad. Accusamus consectetur nulla perferendis quam. Aperiam error iusto id eos.',
    icon: SunIcon,
    link: '#',
  },
  {
    name: 'Nature Identification',
    description: 'Ut excepturi sequi et corrupti. Quidem est non ipsam sunt voluptatem. Velit dicta iusto. Molestiae.',
    icon: BugAntIcon,
    link: '#',
},
  {
    name: 'Natural Events',
    description:
      'Quis ratione necessitatibus ullam id animi iure accusamus debitis voluptas. Cumque debitis exercitationem.',
      icon: BoltIcon,
      link: '#',
    },
  {
    name: 'STEM Projects',
    description:
      'Quae et accusantium quo molestiae sed sit ut quo. Quidem omnis iure et maiores porro. Eligendi deserunt.',
    icon: RocketLaunchIcon,
    link: '#',
    },
  {
    name: 'Creativity',
    description: 'Optio assumenda eos neque. Quaerat temporibus dicta provident. Quia unde quo aut aut molestiae sit..',
    icon: PuzzlePieceIcon,
    link: '#',
  },
  {
    name: 'Map',
    description: 'Excepturi sed quo mollitia voluptatibus. Qui quo ut nihil quo. Dolor at dignissimos ea voluptatem.',
    icon: MapIcon,
    link: '#',
},
{
    name: 'Map',
    description: 'Excepturi sed quo mollitia voluptatibus. Qui quo ut nihil quo. Dolor at dignissimos ea voluptatem.',
    icon: ClockIcon,
    link: '#',
},
{
    name: 'Map',
    description: 'Excepturi sed quo mollitia voluptatibus. Qui quo ut nihil quo. Dolor at dignissimos ea voluptatem.',
    icon: LifebuoyIcon,
    link: '#',
},
]

import toolbox from '../public/toolbox.svg';
import Image from 'next/image';

export default function Feature() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one Toolbox
          </h2>
          <Image src= {toolbox} alt="Picture of the author" width={40} height={40}/>
          <p className="max-w-xl mx-auto mt-4 text-lg leading-8 text-gray-600">
            All these skills and experiences are tools that can help.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-12 mt-20 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <feature.icon className="absolute w-6 h-6 mt-1 text-green-900" aria-hidden="true" />
                <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}