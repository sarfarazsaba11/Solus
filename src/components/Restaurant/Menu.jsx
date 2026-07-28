import {menu} from '../../lib/data'
import { MenuItem } from './MenuItem'


export function Menu (){

    const visibleMenu = menu.filter(item => item.inStock)


    return(
        <div className='grid grid-cols-1  sm:grid-cols-2 gap-4 lg:grid-cols-3 mt-16 '>
            {visibleMenu.map((item)=><MenuItem key={item.id} item={item}/> )}
        </div>

    )
}