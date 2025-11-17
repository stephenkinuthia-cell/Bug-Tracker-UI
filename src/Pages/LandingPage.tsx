import Navbar from "../components/nav/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Footer } from "../components/footer/Footer";

const LandingPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <main className="flex-1">
                <Hero />

                {/* Services / Features */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                            Powerful Features to Track & Manage Bugs
                        </h2>
                        <Services />
                    </div>
                </section>

                {/* Call-to-Action */}
                <section className="bg-blue-600 text-white py-16">
                    <div className="max-w-3xl mx-auto text-center px-4">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Take Control of Your Projects?
                        </h3>
                        <p className="text-lg mb-8">
                            Sign up for BugTrackr today and start managing your bugs, tasks, and projects efficiently. Streamline your workflow and boost team productivity!
                        </p>
                        <a
                            href="/register"
                            className="btn btn-lg bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                        >
                            Get Started
                        </a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default LandingPage;
