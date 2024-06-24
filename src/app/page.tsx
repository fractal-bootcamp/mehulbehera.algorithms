"use client";
import bubbleSort, { bubbleSortStep } from "@/algorithms/bubbleSort";
import BubbleSortComponent from "@/components/BubbleSortComponent";
import Navigation from "@/components/Navigation";
import SelectionSortComponent from "@/components/SelectionSortComponent";
import { useState } from "react";

let initArray = [6, 3, 4, 8, 9, 1];

export default function Home() {

  return (
    <div>
      <Navigation />
      <SelectionSortComponent initArray={initArray} />
    </div>
  );
}


//<BubbleSortComponent initArray={initArray} />
//<SelectionSortComponent initArray={initArray} />