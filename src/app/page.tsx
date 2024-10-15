"use client";

import { useSortingAlgorithmContext } from "@/context/visualizer";
import { useContext, useEffect } from "react";

export default function Home() {
  const { arrayToSort, isSorting } = useSortingAlgorithmContext();

  useEffect(() => {
    console.log(arrayToSort);
    console.log(isSorting);
  }, []);

  return <div>Hello</div>;
}
