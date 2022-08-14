import React from 'react'
import styles from '../estilos/footer.module.css'
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaYoutube } from 'react-icons/fa'

export default function Footer(){
 return(
    <footer>
      <h4 className={styles.barekMusic}>BareKMusic</h4>
      <p className={styles.msgAutor}>© Derechos Reservados 14/08 2022-2022 Ernesto Barraza BareKMusic.com </p>
      <div className={styles.redesIcons}><FaFacebookSquare/><FaInstagramSquare/><FaTwitterSquare/><FaYoutube/></div>
    </footer>
  );
} 