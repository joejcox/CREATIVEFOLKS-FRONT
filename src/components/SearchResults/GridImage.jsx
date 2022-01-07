import useModal from "Hooks/useModal"
import Modal from "ModalPortal/Modal"

const GridImage = ({ image }) => {
  const { openModal, closeModal, modalIsOpen } = useModal()

  return (
    <>
      <Modal
        closeModal={() => closeModal()}
        isOpen={modalIsOpen}
        data={image}
      />
      <img
        src={image.urls.small}
        alt={image.alt_description && image.alt_description}
        className="cursor-pointer"
        onClick={() => openModal()}
      />
    </>
  )
}

export default GridImage
