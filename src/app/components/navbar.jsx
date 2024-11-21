"use client"

import React, { useEffect, useRef, useState } from 'react';
import '../css/index.css';
import Image from 'next/image';
import { alfalfa, arrowdown, cartimage, coffee, prife, stemcell, stock, takara } from '../../../public/imports';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import UseScroll from './navScroll';
import { useCart } from '../contexts/cartContext';


export default function Navbar() {
    const [burgerActive, setBurgerActive] = useState(false);
    const pathname = usePathname();
    const scrollDirection = UseScroll();
    const [visible, setVisible] = useState(false);
    const [categories, setCategories] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const router = useRouter();
    const { cart } = useCart();
    const hideTimeout = useRef(null);

    useEffect(() => {
        if (scrollDirection === "up") {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }, [scrollDirection])

    const handleMouseEnter = () => {
        if(hideTimeout.current) {
            clearTimeout(hideTimeout.current)
        }
        setCategories(true);
    }

    const handleMouseLeave = () => {
        hideTimeout.current = setTimeout(() => {
            setCategories(false);
        }, 200);
    };

    // useEffect(() => {
    //     const sourceDiv = document.getElementById("shopdiv");
    //     const targetDiv = document.getElementById("catdiv");
    //     const mainNav = document.getElementById("main-nav")
    //     const wellsol = document.getElementById("wellsol")
    //     const blog = document.getElementById("blogdiv")

    
    //     const checkTarget = (event) => {
    //         const isOverBlog = blog.contains(event.target);
    //         const isOverShop = wellsol.contains(event.target);
    //         const isOverTarget = targetDiv.contains(event.target)
    //         if(isOverBlog || isOverShop) {
    //             setCategories(false)
    //         } else if(isOverTarget) {
    //             setCategories(true)
    //         } else {
    //             setTimeout(() => {
    //                 setCategories(false)
    //             }, 2500);
    //         }
    
    //         document.removeEventListener("mousemove", checkTarget);
    //     }

    //     if(sourceDiv) {
    //         sourceDiv.addEventListener("mouseleave", (event) => {
    //             document.addEventListener("mousemove", checkTarget);
    //         });
    //     }

    //     return () => {
    //         document.removeEventListener("mousemove", checkTarget);
    //         sourceDiv?.removeEventListener("mouseleave", () => {
    //             document.addEventListener("mousemove", checkTarget);
    //         });
    //     };
    // }, []);



    return (
        <div className={visible ? 'nav-main' : 'nav-main hide-nav'}>
            <div className="nav-container">

                <div className={burgerActive ? "mobile-nav" : "mobile-nav hide-mobile-nav"}>
                    <div>
                        <Link href="/shop" className='links'>
                            <p>Wellness solutions</p>
                        </Link>
                    </div>

                    <div>
                        <Link href="/" className='links category-link' onClick={() => setShowProducts(!showProducts)}>
                            <div className="category-link0">
                                <p>Shop</p>
                                <Image src={arrowdown} width={17} height={17} alt='arrow-svg' style={showProducts ? { transform: "rotate(180deg)", transition: ".2s ease-in-out" } : { transform: "rotate(0deg)", transition: ".2s ease-in-out" }} />
                            </div>


                            {
                                showProducts && (
                                    <>
                                        <div className="products">
                                            <Link href="/" className='links'>
                                                <p>6-in-1 Coffee</p>
                                            </Link>

                                            <Link href="/" className='links'>
                                                <p>Takara Patch</p>
                                            </Link>

                                            <Link href="/" className='links'>
                                                <p>Katuaba Plus</p>
                                            </Link>

                                            <Link href="/" className='links'>
                                                <p>ION Shield</p>
                                            </Link>
                                        </div>
                                    </>
                                )
                            }

                        </Link>
                    </div>

                    <div>
                        <Link href="/interior" className='links'>
                            <p>About</p>
                        </Link>
                    </div>

                    <div>
                        <Link href="/#workdone" className='links'>
                            <p>Blog</p>
                        </Link>
                    </div>
                </div>

                <div className="banner">
                    <p>Wellness the natural way: Achieve optimum health the Prife way!</p>
                </div>

                <div className="main-nav-content" id='main-nav'>

                    <div className={categories ? "categories" : "hide-categories"} id='catdiv' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {/* <div className='category-title'>
                            <h4>Categories</h4>

                            <div className="products">
                                <Link href="/" className='links'>
                                    <p>Wallpapers</p>
                                </Link>

                                <Link href="/" className='links'>
                                    <p>Contact Paper</p>
                                </Link>

                                <Link href="/" className='links'>
                                    <p>Carpets</p>
                                </Link>

                                <Link href="/" className='links'>
                                    <p>Marble sheets</p>
                                </Link>
                            </div>

                        </div> */}

                        <div className='category-images'>
                            <div>
                                <Image src={stemcell} width={100} height={100} alt='wallpaper-image' className='cat-img' unoptimized="true" />
                                <p>Pro Stem-cells</p>
                            </div>

                            <div>
                                <Image src={coffee} width={100} height={100} alt='wallpaper-image' className='cat-img' unoptimized="true" />
                                <p>6-in-1 Coffee</p>
                            </div>

                            <div>
                                <Image src={takara} width={100} height={100} alt='wallpaper-image' className='cat-img' unoptimized="true" />
                                <p>Takara Patch</p>
                            </div>

                            <div>
                                <Image src={alfalfa} width={100} height={100} alt='wallpaper-image' className='cat-img' unoptimized="true" />
                                <p>Alfalfa</p>
                            </div>
                        </div>
                    </div>

                    <div className='nav-logo-div'>
                        {/* <Image src={globe} width={25} height={25} alt='swift-logo' className='swift-logo' /> */}
                        <div className="hamburger-container" onClick={() => setBurgerActive(!burgerActive)} style={{ marginRight: ".5rem" }}>
                            <div className={burgerActive ? "hamburger-menu burger-active" : "hamburger-menu"} ></div>
                        </div>
                        {/* <h2 onClick={() => router.push("/")}>Prife</h2> */}
                        <Image src={prife} width={115} height={45} alt='prife-logo' />
                    </div>

                    <div className='nav-links'>
                        <Link href="/" className='links' id='categories'>
                            <p>Home</p>
                            <div className="indicator"></div>
                        </Link>
                        <Link href="/shop" className='links'>
                            <p>About</p>
                            <div className="indicator"></div>
                        </Link>
                        <Link href="/interior" className='links' id='wellsol'>
                            <p>Wellness Solutions</p>
                            <div className="indicator"></div>
                        </Link>
                        <Link href="/#workdone" className='links' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <p>Shop</p>
                            <div className="indicator"></div>
                        </Link>
                        <Link href="/#workdone" className='links' id='blogdiv'>
                            <p>Blog</p>
                            <div className="indicator"></div>
                        </Link>
                    </div>

                    <div className='nav-cart-div'>
                        <div className="cart-div">
                            <button>
                                (+254) 706534206
                            </button>
                            <button id='nav-button2'>
                                Book Session
                            </button>
                        </div>
                    </div>


                    <div className='mobile-cart-div'>
                        <div className="cart-div">
                            <button id='nav-button2'>
                                Book Session
                            </button>
                        </div>
                    </div>


                </div>


            </div>



            <div className={burgerActive ? "filter-div" : "filter-div invisible"}>
                <div className='filter-div-menu'>
                    {/* <Link href="/" className='links' onClick={() => setBurgerActive(false)}>
                        <p>Home</p>
                    </Link >
                    <Link href="/about" className='links' onClick={() => setBurgerActive(false)}>
                        <p>About us</p>
                    </Link>
                    <Link href="/#services" className='links' onClick={() => setBurgerActive(false)}>
                        <p>Services</p>
                    </Link>
                    <Link href="/pricing" className='links' onClick={() => setBurgerActive(false)}>
                        <p>Pricing</p>
                    </Link>

                    <button className='filter-gradient-button' onClick={() => setBurgerActive(false)}>
                        Get in touch
                    </button> */}


                </div>
            </div>
        </div>
    )
}
