export const Modal = (props) => {

    return(
        <div className="h-full w-full bg-transparent flex justify-center items-center">
            <div className="w-2/6 h-2/6 rounded-lg bg-slate-800 relative">
                
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 absolute ml-4 mt-4" viewBox="0 0 512 512"><path fill="#ff0000" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                
                <hr className="w-11/12 border-t border-gray-500 mt-20 justify-self-center" />
                
                <button type="button" disabled={true} className="absolute w-24 h-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center right-0 bottom-0 mb-4 mr-4">continue</button>
            </div>
            
        </div>
    )
}