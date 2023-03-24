import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HaderImage from '../../../client/public/images/comming-soon.jpg'
import './index.css'
import './App.css'

const Products = () => {
  return (

    <>
      <Header />
      <div class="flex justify-center">
        <div
          class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <a href="#!">
            <img
              class="rounded-t-lg"
              src={HaderImage}
              alt="" />
          </a>
          <div class="p-6">
            <h5
              class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Coming soon !!!
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button id="product-button"
              type="button"
              class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Button
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Products