export function MenuItem({item}){
    const {name ,price ,imageSrc, soldOut} = item

    return (
        <div className="flex flex-col  w-100  border-2 border-black">
            <div className="relative w-full">
                <img src={imageSrc} alt={name} className="w-full object-cover h-80 "/>
                {soldOut && <p className="absolute text-md font-bold text-white bg-red-600 top-4 right-4 px-2 py-1 rounded-full">Sold out</p>}

            </div>
            <div className="pt-2 pb-2 px-10 ">
                <h4 className="text-2xl font-bold">{name}</h4>
                <p className="text-lg font-bold">$ {price}</p>
            </div>

        </div>
    )
}