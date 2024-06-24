"use client";
import { bubbleSortStep } from "@/algorithms/bubbleSort";
import { useState } from "react";

//TODO: Stop addinng rows after sort is complete
//TODO:

export default function BubbleSortComponent(props: { initArray: number[] }) {

    const initArray = props.initArray;

    const [currArray, setArray] = useState(initArray);
    const [allSteps, setAllSteps] = useState([initArray]);

    function nextStepHandler() {

        const initialArray = [...currArray]
        const res = (bubbleSortStep(initialArray));
        setArray(res.toSortArray);
        const tempArray = [...res.toSortArray]
        setAllSteps([...allSteps, tempArray]);


    }

    return (
        <>
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
            <div>All Steps</div>
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
        </>
    );

}