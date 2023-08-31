import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { WhatsAppContact } from '../components/WhatsAppContact'

export const FormContact = () => {
  return (
    <section className='formcontact' id='formcontact'>
      <div className='container mx-auto font-montserrat'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-7/12 items-center justify-center flex flex-col'>
            <h1 className='text-center text-3xl mt-8'>Contact me!</h1>
            <span className='text-xl font-semibold text-gray-400 mt-7'>
              If you can't wait
            </span>
            <WhatsAppContact />
            <span className='text-xl font-semibold text-gray-400 mt-7'></span>
          </div>
          <div className='w-full md:w7/12'>
            <form className='mx-auto mt-16 max-w-xl sm:mt-10'>
              <span className='justify-center'>
                Or you can write me an email and I will contact you as soon as
                possible
              </span>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                <div>
                  {/* <label htmlFor='first-name' className='block text-sm font-semibold leading-6 text-gray-100'>
                    First name
                  </label> */}
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      placeholder='First name'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-100 bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  {/* <label htmlFor='first-name' className='block text-sm font-semibold leading-6 text-gray-100'>
                    First name
                  </label> */}
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      name='second-name'
                      id='second-name'
                      autoComplete='family-name'
                      placeholder='Second name'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-100 bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  {/* <label htmlFor='first-name' className='block text-sm font-semibold leading-6 text-gray-100'>
                    First name
                  </label> */}
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      name='company'
                      id='company'
                      autoComplete='organization'
                      placeholder='Organization'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-100 bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  {/* <label htmlFor='first-name' className='block text-sm font-semibold leading-6 text-gray-100'>
                    First name
                  </label> */}
                  <div className='mt-2.5'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      autoComplete='email'
                      placeholder='correo@tudominio.com'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-100 bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  {/* <label
                    htmlFor='phone-number'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Phone number
                  </label> */}
                  <div className='relative mt-2.5'>
                    <div className='absolute inset-y-0 left-0 flex items-center'>
                      <label htmlFor='country' className='sr-only'>
                        Country
                      </label>
                      <select
                        id='country'
                        name='country'
                        className='h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
                      >
                        <option>US</option>
                        <option>CA</option>
                        <option>EU</option>
                      </select>
                      <ChevronDownIcon
                        className='pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <input
                      type='tel'
                      name='phone-number'
                      id='phone-number'
                      autoComplete='tel'
                      className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-100 bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  {/* <label
                    htmlFor='message'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Message
                  </label> */}
                  <div className='mt-2.5'>
                    <textarea
                      name='message'
                      id='message'
                      rows={4}
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-100 bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div></div>
              </div>
              <div className='mt-3'>
                <button
                  type='submit'
                  className='block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:tracking-wider'
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
