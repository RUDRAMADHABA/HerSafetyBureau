import React from 'react'
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        rel="stylesheet"
      />
      <footer className="relative pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-2xl font-bold text-blueGray-700">
                CONTACT US
              </h4>
              <div className="mt-6 lg:mb-0 mb-6">
                <a href="#">
                  <button
                    className="text-blue-600 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FaFacebook size={30} />
                  </button>
                </a>
                <a href='https://github.com/RUDRAMADHABA/HerSafetyBureau'>
                  <button
                    className="text-blueGray-800 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FaGithub size={30} />
                  </button>
                </a>
                <button
                  className="text-blue-800 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaLinkedinIn size={30} />
                </button>
                <button
                  className="text-blue-400 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaTwitter size={30} />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-800 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        About Us
                      </a>
                    </li>
                    <Link href="/GeneralDiary">
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href=""
                        >
                          General Diary
                        </a>
                      </li>
                    </Link>
                    <Link href="/Missing">
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href=""
                        >
                          Missing Report
                        </a>
                      </li>
                    </Link>
                    <Link href="/crime">
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href=""
                        >
                          Crime Report
                        </a>
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-800 text-sm font-semibold mb-2">
                    Other Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2021</span>
                <a
                  href=""
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                />{' '}
                all rights
                <a
                  href=""
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  {' '}
                  reserved
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer