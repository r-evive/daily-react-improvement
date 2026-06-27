import type { ReactNode } from "react"

interface Task {
    title: string
    description: string
    children: ReactNode
}

export const Exercise = ({title, description, children} : Task) => {
    return (<div className="w-full py-8 px-8 border rounded border-neutral-800 bg-neutral-900 flex flex-col gap-4">
        <div className="w-full flex flex-col items-start gap-2">
            <span className="text-2xl text-white">{title}</span>
            <span className="text-base text-left">{description}</span>
        </div>
        <div className="w-full border-b-2 border-neutral-600 mb-4"></div>
        <div className="w-full flex justify-center">
            {children}
        </div>
    </div>)
}