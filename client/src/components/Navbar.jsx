import {useState} from 'react'
import logo from "../../images/logo.png"
import {AiOutlineClose, HiMenuAlt4} from "react-icons/all";

const NavbarItem = ({title, classProps}) => {
    return (
        <li className={`mx-5 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
            <nav className="w-full flex md:justify-center justify-between items-center p-4 bg-emerald-400">
                <div className="md:flex[0-5] flex-initial justify-center items-center">
                    <img src={logo} className="w-10 cursor-pointer"/>
                </div>
                <ul className="text-white md:flex hidden flex-row justify-between items-center flex-initial">
                    {
                        ['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
                            <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>
                        ))
                    }
                    <li className="bg-[#2952e3] px-6 py-2 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">Login</li>
                </ul>

                <div>
                    {toggleMenu
                        ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
                        : <HiMenuAlt4 fontSize={36} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>}
                    {toggleMenu && (
                        <ul className="z-10 fixed top-0 -right-2 p-3 w-[40vw] h-screen shadow-2xl md:hidden list-none
                            flex flex-col justify-start items-end rounded-md bg-amber-300 text-white
                        ">
                            <li className="text-xl w-full my-2">
                                <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                            </li>
                            {
                                ['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
                                    <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>
                                ))
                            }
                        </ul>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
