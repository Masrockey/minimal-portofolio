import { Navbar } from "flowbite-react";



export default function Navigasi() {
    return (
    <>
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <img
                src="/images/logo.png"
                className="mr-3 h-6 sm:h-9"
                alt="MasRockey Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                MasRockey
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                href="#"
                active={true}
                >
                Home
                </Navbar.Link>
                <Navbar.Link href="/about">
                About
                </Navbar.Link>
                <Navbar.Link href="#">
                Services
                </Navbar.Link>
                <Navbar.Link href="#">
                Pricing
                </Navbar.Link>
                <Navbar.Link href="#">
                Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    </>
    )
}

