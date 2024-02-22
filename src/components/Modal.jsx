import { useRef } from "react"
import styles from './modal.module.scss'

export default function Modal({children, title, root}){
    const ref = useRef(null)
    
  return (
    <>
    <div ref={ref} className={styles.modalContainer}>
        <div className={styles.modalView}>
        <div className={styles.modalHeader}>
            <div>Titulo</div>
            <div>
                <button className={styles.closeButton}>X</button>
            </div>
        </div>
        <div className={styles.modalContent}>
            {children} 
        </div>

        </div>
    </div>
    </>
  )
}

 