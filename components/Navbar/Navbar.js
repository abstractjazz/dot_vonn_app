import Image from 'next/image'

const Navbar = ()=>{
return(

  <>
    <header className="border-solid border-white border mx-14 mt-8 bg-gradient-to-r from-purple-500 to-pink-500 ">
   <Image src="/dot_vonn_logo.png" alt="Dot Vonn Logo" width='150%' height='150%'/>
 
    </header>
  </>

)

}

export default Navbar;