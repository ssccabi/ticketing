export interface Sect {
    title: string,
    isAvailable: boolean,
    children: JSX.Element
}

export interface WizardProps {
    currentStep: number,
    handleBack: (index: number) => void,
    handleForward: (index: number) => void,
    sects: Sect[]
}