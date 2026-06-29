import type { DragEvent } from "react"
import type { DragTarget, Item } from "./types"
import { useDragContext } from "./useDragContext"
import { Block } from "./Block"

interface CollectionProps {
    id: DragTarget
    values: Item[]
}

export const Collection = ({ values, id }: CollectionProps) => {
    const { moveItem, draggingItem, source } = useDragContext();

    const onDrop = (event: DragEvent<HTMLElement>) => {
        event.preventDefault()
        if(!draggingItem || !source) return

        moveItem(source, id, draggingItem);
    }

    const onDragOver = (event: DragEvent<HTMLElement>) => {
        event.preventDefault()
    }

    return (<div className="grid grid-cols-2 gap-2 border p-4 bg-gray-800 w-64 content-start" onDrop={onDrop} onDragOver={onDragOver}>
            {values.map(item => <Block key={item} item={item} source={id}></Block>)}
        </div>)
}