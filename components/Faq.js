/* This example requires Tailwind CSS v3.0+ */
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What's the best thing about Scouts?",
    answer:
      "Scouts in many ways is the culmination of many different skills. Whether that be leadership or outdoor adventures.",
  },
  //add the trademark symbol
  {
    question: "What is the goal of the Scout Toolbox?",
    answer:
      "To share Scouting knowledge from Scouters all across the world in one place.",
  },
  {
    question: "What's the best way to navigate on the main website?",
    answer:
      "If there's aomething you want to learn more about, feel free to click and learn more. There are so many different skills.",
  },
  {
    question: "I want to contribute to the website. What can I do?",
    answer:
      "Feel free to fill out the contact page and we'll get back to you as soon as possible.",
  },
]

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:py-40 lg:px-8">
        <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="flex items-center ml-6 h-7">
                          {open ? (
                            <PlusSmallIcon className="w-6 h-6" aria-hidden="true" />
                          ) : (
                            <MinusSmallIcon className="w-6 h-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}