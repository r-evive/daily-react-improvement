import { Exercise } from "../shared/Exercise";
import { DragProvider } from "./useDragContext";
import { Collections } from "./Collections";

export const ItemCollectionsExample = () => {
    return (
        <Exercise title="5. Drag & drop" description="Build a reusable drag & drop system that allows moving items between collections using React Context and the native HTML5 Drag & Drop API.">
            <DragProvider>
                <Collections/>
            </DragProvider>
        </Exercise>

    )
}