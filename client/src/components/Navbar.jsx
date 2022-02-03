import logo from "../../images/logo.png"

const NavbarItem = ({title, ss}) => {
    return (
        <li className={ss}>
            {title}
        </li>
    )
}

const Navbar = () => {
    return (
        <>
            <nav className="w-full flex md:justify-center justify-center items-center p-4">
                <div className="md:flex[0-5] flex-initial justify-center items-center">
                    <img src={logo} className="w-32 cursor-pointer"/>
                </div>
                <ul>
                    {
                        ['Market', 'Exchange', 'Tutorials'].map((item, index) => (
                            <NavbarItem key={item + index} title={item} ss={index}/>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
