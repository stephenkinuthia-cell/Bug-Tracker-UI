import Intro from "../components/about/Intro";
import Testimonials from "../components/about/Testimonials";
import { Footer } from "../components/footer/Footer";
import Navbar from "../components/nav/Navbar";

export const AboutPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <main className="pt-8">
                <Intro />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
};
