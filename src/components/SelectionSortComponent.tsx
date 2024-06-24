import { selectionSortStep } from "@/algorithms/selectionSort";
import { useState } from "react";

let initArray = [6, 3, 4, 8, 9, 1];
let numSorted = 0;

//implement refresh

export default function SelectionSortComponent(props: { initArray: number[] }) {

    const initArray = props.initArray;

    const [currArray, setArray] = useState(initArray);
    const [allSteps, setAllSteps] = useState([initArray]);


    function nextStepHandler() {

        const initialArray = [...currArray]
        const res = (selectionSortStep(initialArray, numSorted));
        setArray(res);
        const tempArray = [...res]
        setAllSteps([...allSteps, tempArray]);
        numSorted++;


    }

    return (
        <div className="">
            <div className="flex justify-center align-middle">
                <div className="flex flex-row align-middle">{currArray.map((element) => (
                    <button
                        className={
                            " btn border border-black h-full w-18  btn-lg text-xl  text-black "
                        }
                        id={element.toString()}
                    >
                        {element}
                    </button>
                ))}
                </div>
                <div>
                    <button className=" btn border border-black h-full  btn-lg text-xl  text-black mx-9" onClick={() => nextStepHandler()}>Next Step</button>
                </div>
            </div>
            <div className="divider"></div>
            <div className="text-xl my-4">All Steps</div>
            <div className="flex justify-center justify-items-center">
                <div className="flex flex-col justify-center align-middle">{allSteps.map((bubbleSortArray) => (<div className="flex flex-row">{bubbleSortArray.map((element) => (<button
                    className={
                        " btn border border-black h-full w-18  btn-lg text-xl  text-black "
                    }
                    id={element.toString()}
                >
                    {element}
                </button>))}</div>))}</div>
            </div>
        </div>
    );

}