import React from 'react';
import { Link } from 'react-router';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-green-900 text-base-300/90 rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <Link to={'/'} className=" text-5xl font-semibold text-white"><span className='font-extrabold'>Keen</span>Keeper</Link>
                </nav>

                <nav>
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </nav>

                <nav>
                    <p className='hover:link text-xl font-medium'>Social Links</p>
                    <div className="grid grid-flow-col gap-4">
                        <Link className='text-2xl bg-white text-black rounded-full p-2' >
                            <AiFillInstagram />
                        </Link>

                        <Link target="_blank" rel="noopener noreferrer" className='text-2xl bg-white text-black rounded-full p-2' >
                            <FaFacebook />
                        </Link>

                        <Link className='text-2xl bg-white text-black rounded-full p-2' >
                            <FaXTwitter />
                        </Link>
                    </div>
                </nav>

                <aside className='flex gap-50'>
                    <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-5'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookie</p>
                    </div>
                </aside>
                </footer>
        </div>
    );
};

export default Footer;