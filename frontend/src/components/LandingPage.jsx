export const LandingPage = () => {

    return(
        <div className="w-screen h-screen bg-gradient-to-r from-black via-gray-900 to-black lg: grid lg: grid-cols-12">
            
            <div className="hidden col-start-3 col-span-3 flex justify-center lg:block">
                <svg className="w-80 h-80 mt-56" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#747486" d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"/></svg>
            </div>
            <div className="flex flex-col flex-grow lg: col-span-5">
                <p className="w-full mt-48 ml-10 text-7xl font-bold text-blue-600/100 dark:text-blue-500/100 lg: text-8xl lg:mt-64">checklist.</p>

                <p className="mt-10 ml-10 text-xl font-medium text-white lg:text-4xl">Checklist helps you keep track of your to-dos and organize your tasks effortlessly</p>

            </div>
            
        </div>
    )
}