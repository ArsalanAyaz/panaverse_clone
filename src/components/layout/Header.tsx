import Link from "next/link"
import Wrapper from "@/components/shared/Wrapper"
import Image from "next/image"
import dao from "@/assets/images/dao.png"


const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
            <Wrapper>
                <div className='flex items-center justify-between  p-6  mt-2'>

                    <div>
                        <Image src={dao} alt="panaverse dao logo" width={100} height={100}/>
                    </div>

                    <div>
                        <ul className='flex space-x-8 font-semibold'>
                            <li>
                                <Link href="/"> Home </Link> 
                            </li>
                            <li>
                                <Link href="/courses"> Courses </Link> 
                            </li>
                            
                        </ul>
                    </div>

                </div>
            </Wrapper>
    </header>
  )
}

export default Header