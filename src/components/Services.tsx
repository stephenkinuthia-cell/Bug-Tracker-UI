import serviceIMG from "../assets/images/services.png";

export const Services = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-fit p-4 md:p-8">

            {/* IMAGE */}
            <div className="w-full md:w-1/2 flex items-center mb-6 md:mb-0">
                <img
                    src={serviceIMG}
                    alt="Bug tracking services"
                    className="rounded-xl shadow-md"
                />
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">

                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
                    What Our Bug Tracking System Offers
                </h2>

                <p className="mb-4 text-gray-700 text-base md:text-lg">
                    Streamline your software development workflow with powerful tools
                    designed for QA teams, developers, and project managers. Track issues,
                    monitor progress, and ship high-quality product releases every time.
                </p>

                {/* TABLE */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-blue-400 text-gray-800">
                        <thead className="bg-blue-100 text-gray-800">
                            <tr>
                                <th className="px-4 py-2 border">#</th>
                                <th className="px-4 py-2 border">Feature</th>
                                <th className="px-4 py-2 border">Description</th>
                                <th className="px-4 py-2 border">Benefit</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="odd:bg-white even:bg-blue-50">
                                <th className="px-4 py-2 border">1</th>
                                <td className="px-4 py-2 border">Issue Tracking</td>
                                <td className="px-4 py-2 border">Log bugs, assign them, and add severity levels</td>
                                <td className="px-4 py-2 border">Improves collaboration</td>
                            </tr>

                            <tr className="odd:bg-white even:bg-blue-50">
                                <th className="px-4 py-2 border">2</th>
                                <td className="px-4 py-2 border">Real-Time Notifications</td>
                                <td className="px-4 py-2 border">Get notified when bugs are created, updated, or resolved</td>
                                <td className="px-4 py-2 border">Reduces communication delays</td>
                            </tr>

                            <tr className="odd:bg-white even:bg-blue-50">
                                <th className="px-4 py-2 border">3</th>
                                <td className="px-4 py-2 border">Kanban Board</td>
                                <td className="px-4 py-2 border">Visual workflow for open, in progress, and closed issues</td>
                                <td className="px-4 py-2 border">Boosts productivity</td>
                            </tr>

                            <tr className="odd:bg-white even:bg-blue-50">
                                <th className="px-4 py-2 border">4</th>
                                <td className="px-4 py-2 border">Role-Based Access</td>
                                <td className="px-4 py-2 border">Admin, QA, developer, and viewer roles</td>
                                <td className="px-4 py-2 border">Ensures security</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button className="w-full py-3 mt-4 text-lg bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition">
                    Create Your First Issue
                </button>
            </div>
        </div>
    );
};




