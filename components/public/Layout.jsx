
import Footer from "./footer/Footer";
import Header from '../public/header/Header'

export function Layout({children}) {
    return (
      <>
        <div>
          <div>
            <Header />
              {children}
            <Footer />  
          </div>
        </div>
  
      </>
    )
  }
  