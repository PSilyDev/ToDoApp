export const Modal = (props) => {

    const handleClick = (selected) => {
        props.getSelected(selected);
        props.setTrigger(false);
                
    }

    return (props.trigger) ? (
        <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-70 flex justify-center items-center z-50">

            <div className="w-5/6 h-1/5 lg:w-2/6 lg:h-2/6 rounded-lg bg-slate-800 relative">
                
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-6 ml-6 mt-6 lg:w-10" viewBox="0 0 512 512"><path fill="#ff0000" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                
                <hr className="w-11/12 border-t border-gray-600 mt-16 justify-self-center mx-auto lg:mt-20" />

                <div className="text-white text-lg text-center mt-5 lg:text-2xl lg:mt-10">Do you wish to continue?</div>
                
                <button type="button" className="absolute w-20 h-10 text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center right-0 bottom-0 mb-4 mr-4 lg:w-24 lg:h-12" onClick={() => handleClick("no")}>No</button>

                <button type="button" className="absolute w-20 h-10 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center right-0 bottom-0 mb-4 mr-28 lg:w-24 lg:h-12 lg:mr-32" onClick={() => handleClick("yes")}>Yes</button>
            </div>
           
        </div>
    ) : "";
}