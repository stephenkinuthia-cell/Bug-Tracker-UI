export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                
                {/* Services */}
                <div>
                    <h6 className="font-semibold mb-4 text-gray-100">Services</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-400 transition">Bug Tracking</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Issue Management</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Project Reporting</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Analytics</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h6 className="font-semibold mb-4 text-gray-100">Company</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Press</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h6 className="font-semibold mb-4 text-gray-100">Legal</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-400 transition">Terms of Use</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Cookie Policy</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h6 className="font-semibold mb-4 text-gray-100">Social</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-400 transition">Twitter</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Facebook</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">GitHub</a></li>
                    </ul>
                </div>

                {/* Explore */}
                <div>
                    <h6 className="font-semibold mb-4 text-gray-100">Explore</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-400 transition">Features</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Enterprise</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Security</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Pricing</a></li>
                    </ul>
                </div>

                {/* Apps */}
                <div>
                    <h6 className="font-semibold mb-4 text-gray-100">Apps</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-400 transition">Mac</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Windows</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">iPhone</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Android</a></li>
                    </ul>
                </div>

            </div>

            <div className="mt-12 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} BugTrackr. All rights reserved.
            </div>
        </footer>
    );
};
