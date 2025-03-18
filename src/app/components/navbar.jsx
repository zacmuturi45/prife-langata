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
    const [conditions, setConditions] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const [showConditions, setShowConditions] = useState(false);
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



    const handleMouseEnter = (setSomething, setSomethingElse = null) => {
        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current)
        }
        setSomethingElse ? setSomethingElse(false) : null
        setSomething(true);

    }

    const handleMouseLeave = (setSomething) => {
        hideTimeout.current = setTimeout(() => {
            setSomething(false);
        }, 200);
    };





    return (
        <div className={visible ? 'nav-main' : 'nav-main hide-nav'}>
            <div className="nav-container">

                <div className={burgerActive ? "mobile-nav" : "mobile-nav hide-mobile-nav"}>

                    <div>
                        <Link href="#about" className='links' onClick={() => setBurgerActive(!burgerActive)}>
                            <p>About</p>
                        </Link>
                    </div>
                    <div>
                        <Link href="#conditionsWeTreat" className='links category-links1' onClick={() => setShowConditions(!showConditions)}>
                            <div className="category-link0">
                                <p>Conditions we treat</p>
                                <Image src={arrowdown} width={17} height={17} alt='arrow-svg' style={showConditions ? { transform: "rotate(180deg)", transition: ".2s ease-in-out" } : { transform: "rotate(0deg)", transition: ".2s ease-in-out" }} />
                            </div>



                            {
                                showConditions && (
                                    <>
                                        <div className="products">
                                            <div>
                                                <p>Peripheral Neuropathy</p>
                                                <p>Diabetes & Diabetic Neuropathy</p>
                                                <p>Rheumatoid Arthritis & Osteoarthritis</p>
                                                <Link href={"/treatments/cancer"} style={{ textDecoration: "none" }}><p>oncology support</p></Link>

                                            </div>

                                            <div>
                                                <p>Neurological Disorders</p>
                                                <p>Reproductive Health Disorders</p>
                                                <p>Skin Disorders</p>
                                                <p>Metabolic & Weight Management Disorders</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            }

                        </Link>
                    </div>

                    <div>
                        <Link href="/shop" className='links category-link' onClick={() => setShowProducts(!showProducts)}>
                            <div className="category-link0">
                                <p>Shop</p>
                                <Image src={arrowdown} width={17} height={17} alt='arrow-svg' style={showProducts ? { transform: "rotate(180deg)", transition: ".2s ease-in-out" } : { transform: "rotate(0deg)", transition: ".2s ease-in-out" }} />
                            </div>


                            {
                                showProducts && (
                                    <>
                                        <div className="products">
                                            <Link href="/prCo" className='links'>
                                                <p>6-in-1 Coffee</p>
                                            </Link>

                                            <Link href="/prTa" className='links'>
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
                        <Link href="/blog" className='links'>
                            <p>Blog</p>
                        </Link>
                    </div>
                </div>

                <div className="banner">
                    <p style={{ fontWeight: "300" }}>Wellness the natural way: Unlock your body&apos;s natural healing potential!</p>
                </div>

                <div className="main-nav-content" id='main-nav'>

                    <div className={categories ? "categories" : "hide-categories"} id='catdiv' onMouseEnter={() => handleMouseEnter(setCategories)} onMouseLeave={() => handleMouseLeave(setCategories)}>

                        <div className='category-images'>
                            <div>
                                <Link href={"/prSt"} className='prSt'>
                                <Image src={stemcell} width={100} height={100} alt='wallpaper-image' className='cat-img' unoptimized="true" />
                                <p>Pro Stem-cells</p>
                                </Link>
                            </div>

                            <div>
                                <Link href={"/prCo"} className='links'>
                                <Image src={coffee} width={100} height={100} alt='wallpaper-image' className='cat-img' unoptimized="true" />
                                <p>6-in-1 Coffee</p>
                                </Link>
                            </div>

                            <div>
                                <Link href={"/prTa"} className='links'>
                                <Image src={takara} width={100} height={100} alt='wallpaper-image' className='cat-img' unoptimized="true" />
                                <p>Takara Patch</p>
                                </Link>
                            </div>

                            <div>
                                <Link href={"/prAlf"} className='links'>
                                <Image src={alfalfa} width={100} height={100} alt='wallpaper-image' className='cat-img' unoptimized="true" />
                                <p>Alfalfa</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={conditions ? "conditions" : "hide-categories"} id='catdiv' onMouseEnter={() => handleMouseEnter(setConditions)} onMouseLeave={() => handleMouseLeave(setConditions)}>

                        <div className='category-images'>
                            <div>
                                <Link href={'/treatments/peripheral_neuropathy'} style={{ textDecoration: 'none' }}>
                                    <p>Peripheral Neuropathy</p>
                                </Link>
                                <Link href={'/treatments/diabetes'} style={{ textDecoration: 'none' }}>
                                    <p>Diabetes & Diabetic Neuropathy</p>
                                </Link>
                                <Link href={'/treatments/arthritis'} style={{ textDecoration: 'none' }}>
                                    <p>Rheumatoid Arthritis & Osteoarthritis</p>
                                </Link>
                                <Link href={'/treatments/cancer'} style={{ textDecoration: 'none' }}>
                                    <p>Oncology Support</p>
                                </Link>
                            </div>
                            <div>
                                <Link href={'/treatments/neurological_disorders'} style={{ textDecoration: 'none' }}>
                                    <p>Neurological Disorders</p>
                                </Link>
                                <Link href={'/treatments/reproductive_health'} style={{ textDecoration: 'none' }}>
                                    <p>Reproductive Health Disorders</p>
                                </Link>
                                <Link href={'/treatments/skin_disorders'} style={{ textDecoration: 'none' }}>
                                    <p>Skin Disorders</p>
                                </Link>
                                <Link href={'/treatments/metabolic_weight_management'} style={{ textDecoration: 'none' }}>
                                    <p>Metabolic & Weight Management Disorders</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='nav-logo-div'>
                        {/* <Image src={globe} width={25} height={25} alt='swift-logo' className='swift-logo' /> */}
                        <div className="hamburger-container" onClick={() => setBurgerActive(!burgerActive)} style={{ marginRight: ".5rem" }}>
                            <div className={burgerActive ? "hamburger-menu burger-active" : "hamburger-menu"} ></div>
                        </div>
                        {/* <h2 onClick={() => router.push("/")}>Prife</h2> */}
                        <Link href={"/"} onClick={() => {
                            setShowConditions(false)
                            setShowProducts(false)
                            setBurgerActive(false)
                        }}><Image src={prife} width={160} height={60} alt='prife-logo' /></Link>
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
                        <Link href="/interior" className='links' id='wellsol' onMouseEnter={() => handleMouseEnter(setConditions, setCategories)} onMouseLeave={() => handleMouseLeave(setConditions)}>
                            <p>Focused wellness areas</p>
                            <div className="indicator"></div>
                        </Link>
                        <Link href="/shop" className='links' onMouseEnter={() => handleMouseEnter(setCategories, setConditions)} onMouseLeave={() => handleMouseLeave(setCategories)}>
                            <p>Shop</p>
                            <div className="indicator"></div>
                        </Link>
                        <Link href="/blog" className='links' id='blogdiv'>
                            <p>Blog</p>
                            <div className="indicator"></div>
                        </Link>
                    </div>

                    <div className='nav-cart-div'>
                        <div className="cart-div">
                            <button>
                                <a href='tel:254707486258' style={{textDecoration: "none", color: "black"}}>
                                (+254) 707486258
                                </a>
                            </button>
                            <button id='nav-button2'>
                            <a href='tel:254707486258' style={{textDecoration: "none", color: "black"}}>
                                Book Session
                                </a>
                            </button>
                        </div>
                    </div>


                    <div className='mobile-cart-div'>
                        <div className="cart-div">
                            <button id='nav-button2' style={{ backgroundColor: "white", color: "black", transform: "scale(0.85)" }}>
                                Book Session
                            </button>
                        </div>
                    </div>


                </div>


            </div>



            <div className={burgerActive ? "filter-div" : "filter-div invisible"}>
                <div className='filter-div-menu'>

                </div>
            </div>
        </div>
    )
}
