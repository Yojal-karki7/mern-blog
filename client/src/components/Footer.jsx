import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsGit, BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

export default function FooterCom() {
    return <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md
            grid-cols-1">
                <div className="mt-5">
                    <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                            Yojal's
                        </span>
                        Blog
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title="About" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="https://www.facebook.com/yojalkarki7"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            Yojal karki
                        </Footer.Link>
                        <Footer.Link href="about"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            Yojal' Blog
                        </Footer.Link>
                    </Footer.LinkGroup>
                            </div>
                            <div>
                    <Footer.Title title="Follow us"/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="https://www.github.com/Yojal-karki7"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            Github
                        </Footer.Link>
                        <Footer.Link href="https://www.instagram.com/aizen_sosuke224/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            Instagram
                        </Footer.Link>
                    </Footer.LinkGroup>
                            </div>
                            <div>
                    <Footer.Title title="Legal"/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="#">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#">
                            Terms &amp; Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                            </div>
                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="Yojal's blog" year={new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt0 mt-4 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook}/>
                    <Footer.Icon href="#" icon={BsDribbble}/>
                    <Footer.Icon href="#" icon={BsInstagram}/>
                    <Footer.Icon href="https://www.github.com/Yojal-karki7" icon={BsGithub}/>
                    <Footer.Icon href="#" icon={BsTwitter}/>
                </div>
            </div>
        </div>

    </Footer>
}
