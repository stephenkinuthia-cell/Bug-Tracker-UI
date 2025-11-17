import bugManager from '../../assets/images/bag-manager.jpeg';

const Intro = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between gap-8 h-fit p-4 md:p-8">

                {/* IMAGE */}
                <div className="w-full md:w-1/2 flex items-center">
                    <img
                        src={bugManager}
                        alt="bug-tracking-dashboard"
                        className="w-full h-48 md:h-full object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* TEXT */}
                <div className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg p-6 md:p-8 mb-6 md:mb-0 bg-white shadow-sm">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">
                        About BugTrackr
                    </h1>

                    <p className="mb-4 text-gray-700 text-base md:text-lg">
                        BugTrackr is a modern bug tracking and issue management platform 
                        designed to help software teams identify, organize, and resolve 
                        issues efficiently.
                    </p>

                    <p className="mb-4 text-gray-700 text-base md:text-lg">
                        From reporting bugs to assigning developers, prioritizing tasks, 
                        and monitoring fixes in real-time, BugTrackr brings clarity and 
                        structure to your entire debugging workflow.
                    </p>

                    <p className="text-gray-700 text-base md:text-lg">
                        Whether you're building small apps or managing enterprise-level 
                        software, BugTrackr gives your team the visibility and control 
                        they need to ship high-quality products faster.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Intro;
