import { CheckIcon, FaceSmileIcon } from "@heroicons/react/24/outline"


const posts = [


  {
    title: "Build & maintain your website",
    href: '#',
    category: { name: 'Web', href: '#' },
    description:
      'Homebase, Digital HQ, Internet Empire. Whatever you call it, you need an effective website.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      './web_still_6.jpg',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    serviceList: ['Landing page', 'Business site with CMS', 'Portfolio', 'Blog', 'Custom Web App'],
  },
  {
    title: "Make custom content that fits your brand",
    href: '#',
    category: { name: 'Content', href: '#' },
    description:
      "Turns out content is legit hard work. Lol, who knew? Let's lighten that load up.",
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      './content_still_5.jpg',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    serviceList: ['Design', 'Social Copy', 'Templates', 'Blog Posts', 'Email'],
  },
  {
    title: "Set a strong foundation with content strategy and brand strategy",
    href: '#',
    category: { name: 'Strategy', href: '#' },
    description:
      "There's posting, and then there's posting with purpose & context. There's levels to this.",
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'strat_still_5.jpg',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    serviceList: ['Brand Voice and Tone', 'Content Strategy', 'Channel Strategy','Page Audit', 'Competitor Audit' ],
  },
]

export default function Services() {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
           You want to be creative and run your business. Not build websites, or worry about making the next batch of content. Our tech & talent can help keep your hustle going, your business booming. 
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
          
            <div key={post.title} className="flex flex-col overflow-hidden border-2 border-black shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#ff66ea]">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p><br></br>
                  </a>
                  <div className="ml-4">
                    {post.serviceList.map(service=>
                    <ul className="list-disc">
                      <li className="flex space-x-3">
                        <FaceSmileIcon className="h-5 w-5 flex-shrink-0 text-black" aria-hidden="true"></FaceSmileIcon>
                        <span className="text-sm text-black bg-pink-100 mb-1">{service}</span>
                      </li>
                    </ul>)}
                  </div>
                 {/* { post.serviceList.map(function(service){
                  console.log(service)
                 })}  */}
                </div>
                <div className="mt-6 flex items-center">
               
                  <div className="flex-shrink-0">
                    {/* <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                    </a> */}
                  </div>
                  <div className="ml-3">
                  
                    {/* <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p> */}
                    {/* <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



