import Header from "Header";
import Hero from "Hero";
import Projects from "Projects";
import Footer from "Footer";
import Blog from "Blog";
import Contact from "Contact";
import About from "About";

// App component, main component
export default function App() {
    return (
        <>
            <Header></Header>
            <main>
                <Hero></Hero>
                <About></About>
                <Projects></Projects>
                <Blog></Blog>
                <Contact></Contact>
            </main>
            <Footer></Footer>
        </>
    );
}
