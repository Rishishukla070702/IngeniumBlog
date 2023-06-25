import "./Home.css"
import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import Footer from "../../footer/Footer"

export default function Home() {
  return (
    <>
        <Header/>
        
        <div className="home">
        <h3>Latest Post</h3>
          <Posts/>
        </div>
        <Footer/>
        </>
  )
}
