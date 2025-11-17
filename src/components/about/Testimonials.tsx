import { testimonialsData } from "./testimonialdata";
import { motion } from "framer-motion";

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                    What Our Users Say
                </h2>
                <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
                    Trusted by developers, QA teams, and project managers who rely on BugTracker Pro to deliver quality software on time.
                </p>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {testimonialsData.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 text-center border border-gray-100"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-[3px] border-blue-600"
                            />

                            <p className="text-gray-600 mb-6 italic">
                                “{testimonial.content}”
                            </p>

                            <div>
                                <h3 className="font-semibold text-lg text-gray-800">
                                    {testimonial.name}
                                </h3>
                                <span className="text-blue-600 text-sm font-medium">
                                    {testimonial.role}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
