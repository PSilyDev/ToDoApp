export const Modal = (props) => {

    return(
        <div className="h-full w-full bg-transparent flex justify-center items-center">
            <div className="w-2/6 h-2/6 rounded-lg bg-white ">
            <button type="button" disabled={true} className="w-24 h-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">continue</button>
            </div>
            
        </div>
    )
}