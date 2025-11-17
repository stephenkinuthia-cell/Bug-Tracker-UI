import homeIMG from "../assets/images/home-image.jpeg";

export const Hero = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between gap-8 h-fit p-4 md:p-8">

                {/* CONTENT */}
                <div className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg text-gray-700 p-6 md:p-8 bg-white shadow-sm">

                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        Track Bugs. Ship Faster. Stay in Control.
                    </h1>

                    <p className="mb-4 text-base md:text-lg text-gray-700">
                        Welcome to <span className="font-semibold text-blue-600">BugTrackr</span> — your complete bug tracking 
                        and issue management solution. Built for developers, QA teams, 
                        and modern engineering workflows.
                    </p>

                    <p className="mb-4 text-base md:text-lg text-gray-700">
                        Log issues, assign them to team members, set priorities, monitor 
                        progress, and resolve bugs efficiently. Stay aligned with your 
                        team and keep your product quality top-notch.
                    </p>

                    <p className="mb-4 text-base md:text-lg text-gray-700">
                        Improve your debugging process and ship better features — with 
                        fewer surprises.
                    </p>

                    <button className="w-40 py-3 mt-2 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Get Started
                    </button>
                </div>

                {/* IMAGE */}
                <div className="w-40 md:w-1/2 flex items-center">
                    <img 
                        src={homeIMG} 
                        alt="bug tracking dashboard preview" 
                        className="rounded-lg shadow-md"
                    />
                </div>

            </div>
        </>
    );
};
