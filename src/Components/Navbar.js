import React, {  useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {  Link } from 'react-router-dom';

export default function Navbar(props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div >
            <header className={`bg-${props.mode}`}>
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-4" aria-label="Global">
                    <div className="w-full flex justify-between">
                        <div className="flex lg:flex-1">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <h1 className={`font-semibold mx-4 text-xl text-${props.mode !== "white" ? "white" : "black"}`}>S-News</h1>
                            </Link>
                        </div>
                        <div className="flex lg:flex1 ">
                            <Popover.Group className="hidden lg:flex">
                                <div className={`flex items-center justify-around lg:gap-x-7 font-semibold text-${props.mode !== "white" ? "white" : "black"}`}>
                                    News-Category :
                                    <Link className="newscategory" to="/business">Business</Link>
                                    <Link className="newscategory" to="/entertainment">Entertainment</Link>
                                    <Link className="newscategory" to="/general">General</Link>
                                    <Link className="newscategory" to="/health">Health</Link>
                                    <Link className="newscategory" to="/science">Science</Link>
                                    <Link className="newscategory" to="/sports">Sports</Link>
                                    <Link className="newscategory" to="/technology">Technology</Link>
                                    <div className="form-check mx-2  form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handledarkmode} />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">&nbsp; {props.mode === "white" ? "Dark" : "Light"} mode</label>
                                 </div>
                                </div>
                            </Popover.Group>
                        </div>
                        
                        <div className="flex lg:hidden">
                            
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black font-medium"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <Bars3Icon className={`h-6 w-8 text-${props.mode !== "white" ? "white" : "black"}`} aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen} >
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className={`fixed inset-y-0 left-0 z-10 w-3/4 overflow-y-auto ${props.mode === "white" ? "bg-gray-100" : "bg-gray-900"}  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`} style={{ borderLeft: "1px solid black" }}>
                        <div className="flex items-center justify-end">
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-black font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <XMarkIcon className={`h-6 w-6 text-${props.mode==="white"?"black":"white"} `} aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className={"-my-6 divide-y divide-gray-500/10 "}>
                                <div className={`space-y-2 py-6 ${props.mode === "white" ? "text-black" : "text-white"}`}>
                                    <h2 className='block text-center text-xl font-semibold'>News Category </h2>
                                    <Link className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 " to="/business">Business</Link>

                                    <Link className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 " to="/entertainment">Entertainment</Link>

                                    <Link className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 " to="/general">General</Link>

                                    <Link className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 " to="/health">Health</Link>
                                    <Link className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 " to="/science">Science</Link>

                                    <Link className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 " to="/sports">Sports</Link>

                                    <Link className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 " to="/technology">Technology</Link>
                                    <div className="form-check mx-2 py-2 form-switch">
                                        <input className="form-check-input  " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handledarkmode} />
                                        <label className="form-check-label font-semibold" for="flexSwitchCheckDefault">{props.mode === "white" ? "Dark " : "Light "} mode</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}