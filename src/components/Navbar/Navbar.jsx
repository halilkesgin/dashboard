import { useContext } from "react";
import { ThreeBarIcon } from "../../assets/icons";
import { SidebarContext } from "../../contexts";
import IconButton from "../Button/IconButton";
import { FaUser, FaInfoCircle, FaPalette, FaExpand } from "react-icons/fa";
import Language from "./components/Language";
import Apps from "./components/Apps";

const Navbar = () => {
    const {setIsOpenSidebar} = useContext(SidebarContext);
    return (
        <div className="fixed left-0 right-0 top-0 flex h-[65px] items-center justify-between bg-white pr-5 backdrop-blur dark:bg-gray-700/50 dark:shadow-white/10 xl:left-[275px]">
            <div className="flex flex-1 items-center gap-4 pl-4 xl:pl-2 pr-4">
                <button className="text-2xl xl:hidden" onClick={() => setIsOpenSidebar(true)}>
                    <ThreeBarIcon />
                </button>
                <div>

                </div>
            </div>
            <div className='flex justify-between gap-3'>
                <Language />
                <Apps />
                <IconButton icon={FaExpand} />
                <IconButton icon={FaInfoCircle} />
                <IconButton icon={FaPalette} />
                <IconButton icon={FaUser} />
            </div>
        </div>
    );
}

export default Navbar