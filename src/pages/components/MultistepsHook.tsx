import { ReactElement, useState } from "react";

export function MultistepsHook (steps: ReactElement[]) {
    const [currentStepIndex, setCurrentstepIndex] = useState(0)

    function next(){
        setCurrentstepIndex(i => {
            if(i == steps.length - 1) return i
            return i+1
        })
    }

    function back(){
        setCurrentstepIndex(i => {
            if(i <= 0 ) return i
            return i - 1
        })
    }

    function goTo(index: number){
        setCurrentstepIndex(index)
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        goTo,
        next,
        back,
    }

}