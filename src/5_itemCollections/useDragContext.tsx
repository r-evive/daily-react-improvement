import { createContext, useContext, useState, type Dispatch, type PropsWithChildren, type SetStateAction } from "react";
import type { DragTarget, Item, ItemSet } from "./types";

type DragContext = {
    items: ItemSet
    setItems: Dispatch<SetStateAction<ItemSet>>
    moveItem: (source: DragTarget, target: DragTarget, item: number) => void
    draggingItem: Item | null
    source: DragTarget | null
    setDraggingItem: (item: Item, source: DragTarget) => void
}

const DragContext = createContext<DragContext | null>(null)

export const DragProvider = ({ children }: PropsWithChildren) => {
    const [draggingItem, setDraggingItemState] = useState<Item | null>(null);
    const [source, setSource] = useState<DragTarget | null>(null)


    const [items, setItems] = useState<ItemSet>({
        'A': [1,2,3,4,5,6],
        'B': [],
        'C': [7, 8, 9]
    })

    const setDraggingItem = (item: Item, source: DragTarget) => {
        setDraggingItemState(item)
        setSource(source)
    }

    const clearDraggingItem = () => {
        setDraggingItemState(null)
        setSource(null)
    }

    const moveItem = (source: DragTarget, target: DragTarget, item: number) => {
        if(source === target) return

        setItems((prev) => ({
            ...prev,
            [source]: prev[source].filter(_item => _item !== item),
            [target]: [...prev[target], item]
        }))

        clearDraggingItem()
    }

    return <DragContext.Provider value={{items, setItems, moveItem, draggingItem, setDraggingItem, source}}>
        {children}
    </DragContext.Provider>
}


export const useDragContext = () => {
    const context = useContext(DragContext)

    if(!context)
        throw new Error('Invalid drag context!')

    return context
}