import MealsHeader from "@/components/meals/meals-header";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "./loading-out";

export const metadata = {
    title: 'All meals',
    description: 'Delicious meals, shared by our vibrant community.',
};


async function Meals() {
    const meals = await getMeals()
    return <MealsGrid meals={meals} />
}

export default async function MealsPage() {

    return <>
        <MealsHeader />
        <main>
            <Suspense fallback={<MealsLoadingPage />}>
                <Meals />
            </Suspense>
        </main>
    </>
}