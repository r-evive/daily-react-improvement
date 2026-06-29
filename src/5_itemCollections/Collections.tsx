import { useDragContext } from "./useDragContext"
import { Collection } from "./Collection"

export const Collections = () => {
    const { items } = useDragContext()

    return  (<div className="flex justify-between gap-16">
        {Object.keys(items).map(col => <Collection key={col} values={items[col]} id={col}/>)}
    </div>)
}