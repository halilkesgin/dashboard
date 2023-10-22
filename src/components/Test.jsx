

const Test = () => {

  

    return (
        <>
            <div className="mx-auto relative pb-14"> 
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4  mb-4">
                    <div className="md:row-span-1 lg:row-span-1 xl:row-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1  ">
                        <div className="h-full bg-white dark:bg-slate-800 shadow rounded-md w-full p-4 relative overflow-hidden grid md:gap-4 lg:gap-2 xl:gap-4 md:grid-cols-1 lg:grid-cols-4">
                            <div className="md:col-span-4 lg:col-span-2 xl:col-span-4 self-center">
                                <h3 className="text-slate-800 dark:text-slate-200 text-center text-2xl md:text-2xl lg:text-lg xl:text-2xl font-bold leading-8 py-2 md:py-2 lg:py-1 xl:py-2"><span className="inline-block xl:block">T-Wind</span>
                                Multi Application</h3>
                                <div className="text-center text-slate-400 text-base md:text-base lg:text-sm xl:text-base font-medium py-3">We Design and Develop Clean and High Quality Web Applications</div>                
                                <div className="text-center py-3 md:mb-3 lg:mb-0 xl:mb-3">
                                    <button className="px-3 py-2 lg:px-4 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600">Buy New</button>
                                </div>
                            </div>
                            <div className="md:col-span-4 lg:col-span-2 xl:col-span-4 block dark:hidden">
                            </div>
                            <div className="md:col-span-4 lg:col-span-2 xl:col-span-4 hidden dark:block">
                            </div>
                        </div> 
                    </div>
                    <div className="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-3">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="md:col-span-2 lg:col-span-2 xl:col-span-1">
                                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative overflow-hidden  bg-no-repeat bg-contain">
                                    <div className="flex justify-between xl:gap-x-2 items-cente">
                                        <div className="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                                            <i className="ti ti-users text-3xl"></i>                        
                                        </div>
                                        <div className="self-center ml-auto">                            
                                            <h3 className="my-1 font-semibold text-2xl dark:text-slate-200">24k</h3>
                                            <p className="text-gray-400 mb-0 font-medium">Sessions</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-4 lg:col-span-4 xl:col-span-3">
                        <div className="bg-white dark:bg-slate-800 shadow rounded-md h-full w-full p-4 relative overflow-hidden ">
                            <div className="chart-container" >
                                <canvas id="bar" height="290"></canvas> 
                            </div>                
                        </div>
                    </div>
                </div> 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
                   asdas
                </div>
            </div>
        </>
    )
}
export default Test;