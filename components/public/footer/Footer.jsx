import styles from './Footer.module.css'
function Footer() {
    return(
        <>
        <footer>
            <div className={styles.containerFooterAll}>
                <div className={styles.containerBody}>
                    <div className={styles.colum1}>
                        <h2>CryptoBot - 2022</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Sint suscipit rem perspiciatis adipisci corporis? 
                            Voluptatibus ipsa minus laudantium distinctio fugit dicta. 
                            Ipsam reiciendis explicabo sapiente esse sequi tenetur in 
                            error!
                        </p>
                    </div>
                    <div className={styles.colum2}>

                        <h2>Redes sociales</h2>

                        <div className={styles.row}>
                            <label>Siguenos en Instagram</label>
                        </div>

                        <div className={styles.row}>
                            <label>Siguenos en Facebook</label>
                        </div>
                        
                        

                    </div>
                </div>
                
            </div>
            <div className={styles.containerFooter}>
                    <div className={styles.footer}>
                        <div className={styles.copi}>
                            ©2022 Todos los derechos reservados
                            </div>
                    </div>        
             </div>
        </footer>
        </>
        
    )
}

export default Footer