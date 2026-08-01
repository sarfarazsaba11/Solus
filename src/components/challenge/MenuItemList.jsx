

  export default function MenuItemList ({items}){

    return(
       <ul className="mt-10">
        {items?.map(item => <li key={item.id} >{item.name}  <em className="text-slate-500 text-sm ">({item.category})</em></li>)}
      </ul>
    )
  }    