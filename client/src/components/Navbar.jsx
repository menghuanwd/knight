import {useState} from 'react'
import {Link} from 'react-router-dom';
import logo from "../../images/logo.png"
import logomini from "../../images/icon-192x192.png"
import {AiOutlineClose, HiMenuAlt4} from "react-icons/all";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faHouse, faFileChartPie, faFileSignature, faWallet} from "@fortawesome/pro-solid-svg-icons";
import {faHouse, faBars} from "@fortawesome/pro-regular-svg-icons";
import {
    faHomeLgAlt,
    faFileInvoiceDollar,
    faAnalytics,
    faShoppingCart,
    faCoins,
    faPlus,
    faUserCircle,
    faSignOutAlt,
    faTimes
} from "@fortawesome/pro-light-svg-icons";

const NavbarItem = ({title, classProps}) => {
    return (
        <li className={`cursor-pointer ${classProps} p-2 hover:bg-[#E2F5F4] hover:text-[#076461]`}>
            <FontAwesomeIcon className="ml-2" icon={faHomeLgAlt}/> <span className="ml-2">{title}</span>
        </li>
    )
}

const NavbarItem2 = ({title, classProps}) => {
    return (
        <li className={`cursor-pointer ${classProps} border-2 p-2 hover:bg-[#E2F5F4] hover:text-[#076461] `}>
            <FontAwesomeIcon className="ml-2" icon={faFileInvoiceDollar}/> <span className="ml-2">{title}</span>
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
            <nav className="w-full flex  justify-between items-center h-16 bg-white">
                <div>
                    {toggleMenu
                        ? <AiOutlineClose fontSize={28} className="text-white cursor-pointer"
                                          onClick={() => setToggleMenu(false)}/>
                        :
                        <div className="flex">
                            <FontAwesomeIcon className="ml-4" icon={faBars} onClick={() => setToggleMenu(true)}/>
                            <img className="ml-2 -my-2 w-8 h-8" src={logomini}/>
                        </div>
                    }
                    {toggleMenu && (
                        <ul className="z-10 fixed top-0 left-0 w-[240px] h-screen shadow-2xl list-none
                            flex flex-col justify-between rounded-md bg-white text-[#7c7f85]
                        ">
                            <div>
                                <li className="text-xl w-full ml-0 p-2 my-2 flex flex-row items-center">
                                    <FontAwesomeIcon className="ml-2 w-[20px]" icon={faTimes}
                                                     onClick={() => setToggleMenu(false)}/>
                                    {/*<AiOutlineClose className="ml-2 w-[20px]" onClick={() => setToggleMenu(false)}/>*/}
                                    <img className="mx-3 w-20 h-10" src={logo}/>
                                </li>
                                <li className={`cursor-pointer ml-0 my-2 text-lg p-1.5 hover:bg-[#E2F5F4] hover:text-[#076461]`}>
                                    <FontAwesomeIcon className="ml-2 w-[20px]" icon={faHomeLgAlt}/> <span
                                    className="ml-2 text-[14px] font-['Montserrat']">
                                    <Link to="/profile">Terminal</Link>
                                </span>
                                </li>
                                <li className={`cursor-pointer ml-0 my-2 text-lg p-1.5 hover:bg-[#E2F5F4] hover:text-[#076461]`}>
                                    <FontAwesomeIcon className="ml-2 w-[20px] " icon={faFileInvoiceDollar}/> <span
                                    className="ml-2.5  text-[14px] font-['Montserrat']">eSouring</span>
                                </li>
                                <li className={`cursor-pointer ml-0 my-2 text-lg p-1.5 hover:bg-[#E2F5F4] hover:text-[#076461]`}>
                                    <FontAwesomeIcon className="ml-2 w-[20px]" icon={faAnalytics}/> <span
                                    className="ml-2  text-[14px]  font-['Montserrat']">Analytics</span>
                                </li>
                                <li className={`cursor-pointer ml-0 my-2 text-lg p-1.5 hover:bg-[#E2F5F4] hover:text-[#076461]`}>
                                    <FontAwesomeIcon className="ml-2 w-[20px]" icon={faShoppingCart}/> <span
                                    className="ml-2  text-[14px]  font-['Montserrat']">BuyDesk</span>
                                </li>
                                <li className={`cursor-pointer ml-0 my-2 text-lg p-1.5 hover:bg-[#E2F5F4] hover:text-[#076461]`}>
                                    <FontAwesomeIcon className="ml-2  w-[20px]" icon={faCoins}/> <span
                                    className="ml-2  text-[14px]  font-['Montserrat']">Sourceforce</span>
                                </li>
                                <li className={`cursor-pointer ml-0 my-2 text-lg p-1.5 hover:bg-[#E2F5F4] hover:text-[#076461]`}>
                                    <FontAwesomeIcon className="ml-2 w-[20px]" icon={faPlus}/> <span
                                    className="ml-2  text-[14px]  font-['Montserrat']">Add new</span>
                                </li>
                            </div>

                            <div>
                                <li className={`cursor-pointer ml-0 text-lg border-y-2 p-1.5 hover:bg-[#E2F5F4] hover:text-[#076461] `}>
                                    <FontAwesomeIcon className="ml-2 w-[20px]" icon={faUserCircle}/> <span
                                    className="ml-2 text-[14px] font-['Montserrat']">Profile</span>
                                </li>
                                <li className={`cursor-pointer ml-0 text-lg border-y-1 p-1.5 hover:bg-[#E2F5F4] hover:text-[#076461] `}>
                                    <FontAwesomeIcon className="ml-2 w-[20px]" icon={faSignOutAlt}/> <span
                                    className="ml-2 text-[14px] font-['Montserrat'] ">Log out</span>
                                </li>
                            </div>
                        </ul>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
