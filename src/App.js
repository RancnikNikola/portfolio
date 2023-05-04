import { useState, useEffect } from "react";
import NavigationBar from "./components/navigation/navigation.component";
import Header from "./components/header/header.component";
import About from "./pages/about/about.pages";
import Projects from "./pages/projects/projects.pages";
import Contact from "./pages/contact/contact.pages";
import Footer from "./pages/footer/footer.component";
import PageLoader from "./components/page-loader/page-loader.component";

const App = () => {

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);


  return (
  <>
    {
      loading ? <PageLoader /> : (

        <>
        <NavigationBar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
        </>
      )
    }
  </>
    
  )
}

export default App;
