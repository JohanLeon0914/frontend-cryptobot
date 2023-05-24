import styles from "./Footer.module.css";
import Link from "next/link";
import Image from 'next/image'

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.containerFooterAll}>
          <div className={styles.containerBody}>
            <div className={styles.colum1}>
              <h2>CryptoBot - 2023</h2>
              <p>Follow our social networks to keep informed of new updates.</p>
            </div>
            <div className={styles.colum2}>
              <h2>Social Networks</h2>

              <div className={styles.row}>
                <Link href="https://www.instagram.com">
                  <a>
                    <Image
                      className={styles.icon}
                      alt="arrow"
                      src='https://cdn-icons-png.flaticon.com/512/1384/1384063.png'
                      width={40}
                      height={40}
                    />
                    <label className={styles.nerwork}>Follow us on Instagram</label>
                  </a>
                </Link>
              </div>

              <div className={styles.row}>
                <Link href="https://www.twitter.com">
                  <a>
                    <Image
                      className={styles.icon}
                      alt="arrow"
                      src='/images/logoTwitter.png'
                      width={45}
                      height={40}
                    />
                    <label className={styles.nerwork} >Follow us on Twitter</label>
                  </a>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerFooter}>
          <div className={styles.footer}>
            <div className={styles.copi}>
              ©2023 CryptoBot, virtual assistant. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
