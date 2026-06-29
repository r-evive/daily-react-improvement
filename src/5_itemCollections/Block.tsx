import type { DragTarget, Item } from "./types";
import { useDragContext } from "./useDragContext";

interface BlockProps {
    item: Item;
    source: DragTarget
}

export const Block = ({ item, source }: BlockProps) => {
    const { setDraggingItem } = useDragContext()

    const onDragStart = () => {
        setDraggingItem(item, source);
    }

    return <div className="flex w-full h-16 border shadow items-center justify-center bg-gray-500 cursor-grab" draggable onDragStart={onDragStart}>
        <span className="text-white font-medium text-xl">{item}</span>
    </div>
}