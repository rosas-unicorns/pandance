import React from 'react'

const Modal = ({ handleClose, show, children }) => {
  const showHide = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHide}>
      <section className="modal-main">
        {children}
        <button className="btn purple darken-4" onClick={handleClose}>
          close
        </button>
      </section>
    </div>
  )
}

export default Modal