import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='pt-8 mt-6' style={{ backgroundColor: "#0a4275" }}>
            <section className='flex px-12 py-4'>
                <div className='flex gap-6 text-sm w-4/6' style={{ borderRight: "1px solid #454d5e" }}>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <p className='uppercase text-gray-900 text-sm font-medium'>About</p>
                        <ul className='text-sm text-white font-medium cursor-pointer'>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li>Careers</li>
                            <li>Stories</li>
                        </ul>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2'>
                        <p className='uppercase text-gray-900 text-sm font-medium'>Group Companies</p>
                        <ul className='text-white font-medium cursor-pointer'>
                            <li>Myntra</li>
                            <li>Flipkart</li>
                            <li>Amazon</li>
                            <li>Meesho</li>
                        </ul>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2'>
                        <p className='uppercase text-gray-900 text-sm font-medium'>Help</p>
                        <ul className='text-sm text-white font-medium cursor-pointer'>
                            <li>Payment</li>
                            <li>Shopping</li>
                            <li>Retunrs</li>
                            <li>FAQ's</li>
                        </ul>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2'>
                        <p className='uppercase text-gray-900 text-sm font-medium'>Consumer Policy</p>
                        <ul className='text-sm text-white font-medium cursor-pointer'>
                            <li>Terms of Use</li>
                            <li>Policy</li>
                            <li>Security</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='flex pl-4 text-sm'>
                    <div className='flex flex-col gap-4 px-12'>
                        <div>
                            <p className='uppercase text-gray-900 text-sm font-medium pb-2'>Mail Us:</p>
                            <p className='text-white font-medium'>Ashish Private Limited,2 Bachi Lane,Farasi Enclave,249204</p>
                        </div>
                        <div>
                            <p className='uppercase text-gray-900 text-sm font-medium pb-2'>Socials:</p>
                            <div className='flex gap-4 justify-around text-sm'>
                                <span className='cursor-pointer text-2xl'>
                                    <i class="fa-brands fa-linkedin"></i>
                                </span>
                                <span className='cursor-pointer text-2xl'>
                                    <i class="fa-brands fa-facebook"></i>
                                </span>
                                <span className='cursor-pointer text-2xl'>
                                    <i class="fa-solid fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='uppercase text-gray-900 text-sm font-medium'>Registered Office:</p>
                        <p className='text-white font-medium'>Ashish Private Limited,2 Bachi Lane,Farasi Enclave,249204</p>
                    </div>
                </div>
                <div>

                </div>
            </section>
            <footer className="text-center text-white" style={{ borderTop: "1px solid #454d5e" }}>
                <div className="text-center p-3">
                    © 2024 Copyright&nbsp;
                    <Link className="text-light text-decoration-none" to="/">
                        FakeShop
                    </Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
