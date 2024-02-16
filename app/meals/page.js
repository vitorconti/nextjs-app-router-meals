import MealsHeader from "@/components/meals/meals-header";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "./loading-out";


async function Meals(){
    const meals = await getMeals()
    return <MealsGrid meals={meals}/>
}

export default async function MealsPage(){

    return <>
        <MealsHeader/>
        <main>
            <Suspense fallback={<MealsLoadingPage/>}>
                <Meals/>
            </Suspense>
        </main>
    </>
}