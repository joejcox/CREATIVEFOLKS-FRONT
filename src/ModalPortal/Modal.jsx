import ModalPortal from "./ModalPortal"
import FocusTrap from "focus-trap-react"
import { useState } from "react"

const Modal = ({ closeModal, isOpen, data }) => {
  if (!isOpen) return null
  const image = data

  return (
    <ModalPortal>
      <FocusTrap>
        <div
          className="px-6 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
          style={{ zIndex: "9999" }}
        >
          <div className="bg-primary p-6 xl:p-12 w-full sm:w-2/3 xl:w-2/4 h-[550px] z-50">
            <div className="flex flex-col xl:flex-row h-full overflow-y-scroll xl:overflow-hidden">
              <aside className="w-[250px] flex xl:block">
                <figure className="min-w-[250px] xl:min-w-auto xl:w-full h-[250px] mb-6">
                  <img
                    src={image.urls.small}
                    alt={image.alt_description && image.alt_description}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <p className="text-white w-full">{image.user.bio}</p>
              </aside>
              <div className="flex-1 lg:ml-12">
                <h2 className="font-primary font-extralight capitalize flex flex-col lg:flex-row justify-between items-center text-[50px] leading-[63px] text-white">
                  {image.description || "Image Title"}
                  <a
                    href="/"
                    className="bg-white text-grey rounded-[53px] border-2 font-bold border-grey text-[16px] flex items-center justify-center xl:h-[50px] xl:w-[200px]"
                  >
                    View Profile
                  </a>
                </h2>
                <section className="mt-12 mb-6">
                  <h3 className="text-white font-primary text-[20px]">Size</h3>
                  <div className="flex">
                    <div className="variation">
                      <button className="variation--button selected">
                        10x8
                      </button>
                    </div>
                    <div className="variation">
                      <button className="variation--button">15x10</button>
                    </div>

                    <div className="variation">
                      <button className="variation--button">24x16</button>
                    </div>
                  </div>
                </section>
                <section className="mb-6">
                  <h3 className="text-white font-primary text-[20px]">
                    Border
                  </h3>
                  <div className="flex">
                    <div className="variation">
                      <button className="variation--button selected">
                        Add Border
                      </button>
                    </div>
                    <div className="variation">
                      <button className="variation--button">No Border</button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div
            className="absolute overlay bg-black bg-opacity-80 w-full h-full z-40 cursor-pointer"
            onClick={closeModal}
          ></div>
        </div>
      </FocusTrap>
    </ModalPortal>
  )
}

export default Modal
