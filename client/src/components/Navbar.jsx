import {useState} from 'react'
import logo from "../../images/logo.png"
import logomini from "../../images/icon-192x192.png"
import {AiOutlineClose, HiMenuAlt4} from "react-icons/all";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faHouse, faFileChartPie, faFileSignature, faWallet} from "@fortawesome/pro-solid-svg-icons";
import {faHouse, faUserCircle, faBars, faWallet} from "@fortawesome/pro-regular-svg-icons";

const NavbarItem = ({title, classProps}) => {
    return (
        <li className={`cursor-pointer ${classProps} p-2 hover:bg-[#E2F5F4] hover:text-[#076461]`}>
            <FontAwesomeIcon className="ml-2" icon={faHouse}/> <span className="ml-2">{title}</span>
        </li>
    )
}

const NavbarItem2 = ({title, classProps}) => {
    return (
        <li className={`cursor-pointer ${classProps} border-2 p-2 hover:bg-[#E2F5F4] hover:text-[#076461] `}>
            <FontAwesomeIcon className="ml-2" icon={faUserCircle}/> <span className="ml-2">{title}</span>
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
            <nav className="w-full flex  justify-between items-center h-16 bg-white">
                {/*<div className="md:flex[0-5] flex-initial justify-center items-center">*/}
                {/*    <img src={logo} className="w-10 cursor-pointer"/>*/}
                {/*</div>*/}
                {/*<ul className="text-white md:flex hidden flex-row justify-between items-center flex-initial">*/}
                {/*    {*/}
                {/*        ['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (*/}
                {/*            <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*    <li className="bg-[#2952e3] px-6 py-2 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">Login</li>*/}
                {/*</ul>*/}

                <div>
                    {toggleMenu
                        ? <AiOutlineClose fontSize={28} className="text-white cursor-pointer" onClick={() => setToggleMenu(false)}/>
                        :
                        <div className="flex">
                            <FontAwesomeIcon className="ml-2" icon={faBars} onClick={() => setToggleMenu(true)}/>
                            <img className="mx-2 -my-2 w-8 h-8" src={logomini}/>
                        </div>
                    }
                    {toggleMenu && (
                        <ul className="z-10 fixed top-0 left-0 w-[240px] h-screen shadow-2xl list-none
                            flex flex-col justify-between rounded-md bg-white text-[#7c7f85]
                        ">
                            <div>
                            <li className="text-xl w-full mx-4 my-5 flex flex-row">
                                <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                                <img className="mx-3 -my-2 w-20 h-10" src={logo}/>
                            </li>
                            {
                                ['Terminal', 'Analytics', 'BuyDesk', 'Sourceforce', 'Add new'].map((item, index) => (
                                    <NavbarItem key={item + index} title={item} classProps="ml-0 my-2 text-lg"/>
                                ))
                            }
                            </div>

                            <div>
                            {
                                ['Profile', 'Log out'].map((item, index) => (
                                    <NavbarItem2 key={item + index} title={item} classProps="ml-0 text-lg"/>
                                ))
                            }
                            </div>
                        </ul>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
