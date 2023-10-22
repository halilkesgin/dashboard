import { BsThreeDotsVertical } from "react-icons/bs";

const Test = () => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-white rounded-lg">
                <div className="p-3 flex justify-between justify-center border-b">
                    <div className="font-bold border-l-2 border-sky-200 pl-1">
                        Users
                    </div>
                    <div>
                        <button className="bg-sky-100 px-2 rounded hover:bg-sky-200 p-0.5">
                            <BsThreeDotsVertical />
                        </button>
                    </div>
                </div>
                <div className="p-3 bg-white">
                    <div className="flex justify-between">
                        <div>
                            Hello
                        </div>
                        <div>
                            S.a
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test;