import { FaMapLocationDot } from "react-icons/fa6";
import { IoListSharp } from "react-icons/io5";

const ViewSwitcher = ({ tabView, setTabView }) => {
    const views = ["Map", "List"];

    return (
        <div className="flex items-center gap-3">
            {views.map((view, i) => (
                <button
                    key={i}
                    className={`flex items-center gap-[6px] h-[32px] rounded-sm px-2 text-sm text-white font-medium cursor-pointer transition-all duration-200 ${view === tabView ? "bg-primary" : "bg-[#7C848DB2]"}`}
                    onClick={() => setTabView(view)}
                >
                    {view === "Map" ? (
                        <FaMapLocationDot className="text-base text-white" />
                    ) : (
                        <IoListSharp className="text-base text-white" />
                    )}
                    {view}
                </button>
            ))}
        </div>
    );
};

export default ViewSwitcher;
