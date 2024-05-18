import styles from "./Modal.module.css";

function Modal({children, hideModal}) {
  return <>
    <div className={styles.backdrop} onClick={hideModal}/>
    <dialog open className={styles.modal}>
      {children}
    </dialog>
  </>
}

export default Modal