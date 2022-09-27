import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [


  {
    name: 'Brand Starter Kit',
    href: '#',
    priceMonthly: 3995,
    description: "Nice work! You've got a business. Now, let's work on your brand.",
    includedFeatures: ['Professionally designed logo', 'Custom type & design system', 'Page & competitor audit', 'Content pillars & content plan', '1 content batch (set of 9 across 1 platform)', 'Simple website'],
    pricingStructure: 'single payment'
  },
  {
    name: 'Creative Sprint',
    href: '#',
    priceMonthly: '1195',
    description:  "A few words here to describe. Not too many, or too little. Just right.",
    includedFeatures: [
      'Ad design (Facebook, Insta, TikTok, LinkedIn) - 3 ads perfectly to spec',
      'Content Batch (9 posts on a single platform)',
      'Blog post',
      'Email design',
      'Email copy / Newsletter copy',
      'Page audit & competitor audit',
      'Content pillars & content plan',
      'Social content template (3 designs)', 
      // add hover tooltips
    ],
    pricingStructure: '/mo for 3 months. Choose any 3 services per month.',
    includedServiceNumber: 3
  },
  {
    name: 'Creative Partnership',
    href: '#',
    priceMonthly: '1085',
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Ad design (Facebook, Insta, TikTok, LinkedIn) - 3 ads perfectly to spec',
      'Content Batch (9 posts on a single platform)',
      'Blog post',
      'Email design',
      'Email copy / Newsletter copy',
      'Page audit & competitor audit',
      'Content pillars & content plan',
      'Social content template (3 designs)', 
    ],
    pricingStructure:'/mo for 6 months. Choose any 3 services per month.',
    includedServiceNumber: 3
  },
  {
    name: 'Strategic Partnership',
    href: '#',
    priceMonthly: '950',
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
      'Id sed tellus in varius quisque.',
      'Risus egestas faucibus.',
      'Risus cursus ullamcorper.',
    ],
    pricingStructure: '/mo for 12 months. Choose any 5 services per month.',
    includedServiceNumber: 5
  },
]



export default function Pricing() {
 const keyCheck = document.getElementById("keyCheck")
 const pickAny = document.getElementById('pickAny')
 keyCheck.key="Brand Starter Kit" ? pickAny.style.display="none" : pickAny.style.display=""

  return (
    <div>
      <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">Pricing Plans</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Pick a retainer. Or start small with a single service. 
          </p>
          {/* <div className="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
            <button
              type="button"
              className="relative w-1/2 whitespace-nowrap rounded-md border-gray-200 bg-white py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"
            >
              Monthly billing
            </button>
            <button
              type="button"
              className="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"
            >
              Yearly billing
            </button>
          </div> */}
        </div>
        
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
           
              <div id="keyCheck" key={tier.name} className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-medium leading-6 text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">${tier.priceMonthly}</span>{' '}
                  <span className="text-base font-medium text-gray-500"><br></br>{tier.pricingStructure}</span>
                </p>
                <a
                  href={tier.href}
                  className="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                >
                  Get Access
                </a>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-medium text-gray-900">What's included: <br></br><span id="pickAny">Pick any {tier.includedServiceNumber} services per month</span></h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}