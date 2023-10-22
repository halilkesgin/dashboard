import Dropdown from "../../Dropdown/Dropdown";
import { FcGlobe } from "react-icons/fc";
import { Gb, Tr, Fr } from "react-flags-select";

const Language = () => {
    const data = [
        {
            language: "English",
            icon: <Gb />
        },
        {
            language: "Turkish",
            icon: <Tr />
        },
        {
            language: "French",
            icon: <Fr />
        }
    ];

    return (
        <>
            <Dropdown content={
                <div>
                    <ul className="p-2 space-y-1 text-left">
                    {data.map((item, index) => (
                        <li key={index} className="px-3 py-1.5 rounded-lg flex items-center space-x-3 hover:bg-sky-100 cursor-pointer">
                            <div className="text-xl rounded">{item.icon}</div>
                            <div>{item.language}</div>
                        </li>
                        ))}
                    </ul>
                </div>
            }>
                <FcGlobe />
            </Dropdown>
        </>
    )
};

export default Language;
