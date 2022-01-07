import { useState } from "react"

const useModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    console.log("close")
  }

  return { openModal, closeModal, modalIsOpen }
}

export default useModal
