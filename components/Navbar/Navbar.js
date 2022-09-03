import Image from 'next/image'

const navList=['About', 'How it works', 'Pricing', 'Contact']
const navItems=navList.map((item)=><li key={item.index} className='m-0 mx-5'>{item}</li>)

const Navbar = ()=>{
return(

  <>
    <header className="text-gray-500 text-sm border-solid border-black border mx-8 mt-0">
      <nav className="flex">
       <Image className="m-0" src="/logo_no_square.svg" alt="Dot Vonn Logo" width='85%' height='85%'/>
       <ul className='flex mt-6 mx-12'>{navItems}</ul>
      </nav>
    </header>
  </>

)

}

export default Navbar;