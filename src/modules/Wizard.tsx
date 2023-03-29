import React, { ReactNode } from "react";
import { JsxElement } from "typescript";
import { Sect, WizardProps } from "../types/types";


export function Wizard ({ currentStep, ...props }: WizardProps) : JSX.Element  {
    return (
        <div>
            <nav >
                {props.sects.map((sect, index) => {
                    
                    return (
                        <button
                            key={sect.title}
                            // onClick={() => (sect.canStepBack && sect.canStepForward) ? props.handleChange(index): {}} //TODO: revise cases
                            className={(sect.isAvailable) ? "primary" : "secondary"}
                        >    {sect.title}
                        </button>
                    )
                    
                })}
            </nav>
            {props.sects[currentStep].children}
            <footer>
                <button onClick={(props.sects[currentStep-1] && props.sects[currentStep-1].isAvailable) ? () => props.handleBack(currentStep) : undefined} >
                    Előző</button>
                <button onClick={(props.sects[currentStep+1] && props.sects[currentStep+1].isAvailable) ? () => props.handleForward(currentStep) : undefined}>Következő</button>
            </footer>
        </div>
    )
}