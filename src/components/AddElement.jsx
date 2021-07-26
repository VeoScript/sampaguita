import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function AddElement() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Add Element
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-white bg-opacity-20"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#2A2E37] shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="flex flex-row justify-center text-lg font-medium leading-6 text-gray-400"
                >
                  Add Element
                </Dialog.Title>
                <div className="flex flex-col w-full space-y-2 mt-5">
                  <input
                    className="w-full text-gray-100 bg-[#3D4451] ring-2 ring-[#4D5566] rounded-xl px-5 py-3 focus:ring-[#5B6579] focus:outline-none"
                    type="text"
                    name="image"
                    placeholder="Element Image"
                  />
                  <input
                    className="w-full text-gray-100 bg-[#3D4451] ring-2 ring-[#4D5566] rounded-xl px-5 py-3 focus:ring-[#5B6579] focus:outline-none"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <input
                    className="w-full text-gray-100 bg-[#3D4451] ring-2 ring-[#4D5566] rounded-xl px-5 py-3 focus:ring-[#5B6579] focus:outline-none"
                    type="text"
                    name="atomic_number"
                    placeholder="Atomic Number"
                  />
                  <input
                    className="w-full text-gray-100 bg-[#3D4451] ring-2 ring-[#4D5566] rounded-xl px-5 py-3 focus:ring-[#5B6579] focus:outline-none"
                    type="text"
                    name="symbol"
                    placeholder="Symbol"
                  />
                  <input
                    className="w-full text-gray-100 bg-[#3D4451] ring-2 ring-[#4D5566] rounded-xl px-5 py-3 focus:ring-[#5B6579] focus:outline-none"
                    type="text"
                    name="chemical_group_block"
                    placeholder="Chemical Group Block"
                  />
                </div>

                <div className="flex flex-row items-center justify-end w-full mt-3 space-x-1">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-200 bg-[#3D4451] border border-transparent rounded-md hover:bg-[#5B6579] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-200 bg-[#3D4451] border border-transparent rounded-md hover:bg-[#5B6579] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
