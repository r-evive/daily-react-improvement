import { Exercise } from "../shared/Exercise"
import { Accordion } from "./Accordion"

export const AccordionExample = () => {
    return (
        <Exercise title="3. Compound Components Pattern" description="Create a flexible accordion API using the Compound Components pattern with shared context between parent and child components.">
            <div className="flex flex-row w-full gap-4 items-center justify-center">
                <Accordion defaultValue="details">
                    <Accordion.Item tab="settings" header="Settings">
                        Hidden settings!
                    </Accordion.Item>
                    <Accordion.Item tab="details" header="Details">
                        Some user details!
                    </Accordion.Item>
                    <Accordion.Item tab="password" header="Password">
                        Change your password here!
                    </Accordion.Item>
                    <Accordion.Item tab="advanced" header="Advanced">
                        Some advanced settings tab!
                    </Accordion.Item>
                </Accordion>
            </div>
        </Exercise>
    )
}