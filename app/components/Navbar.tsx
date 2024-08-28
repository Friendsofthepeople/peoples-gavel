import Image from 'next/image'

const Navbar = () => {
    return (
        <main className="sticky top-0 z-1 py-4 px-28 bg-white">
            <nav className="flex justify-between items-center w-full">
                <a href='/'>
                    <Image height={100} width={100} alt='logo' src={'/logo/logo-full-v.svg'} />
                </a>
                <ul className="flex justify-center items-center gap-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>How it works</li>
                </ul>
                <div className="flex justify-center items-center gap-4">
                    <button className='border-2 border-[#01C909] rounded py-1 px-4' >Sign up</button>
                    <button className='border-2 border-[#01C909] bg-[#01C909] py-1 px-4 text-white rounded'>Login</button>
                </div>
            </nav>
        </main>
    )
}

export default Navbar;