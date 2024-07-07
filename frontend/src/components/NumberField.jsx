
export const NumberField = ({count, color}) => {
    const colors = {
        orange: 'border-orange-500',
        red: 'border-red-500',
        green: 'border-green-500'
    }

    const borderColor = colors[color] || 'bg-gray-500';

    return(
        <div className={`size-28 flex items-center justify-center border-8 ${borderColor} rounded-full`}>
            <div className="text-4xl text-white font-medium">{count}</div>
        </div>
    );
}