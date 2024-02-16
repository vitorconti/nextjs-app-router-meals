import Link from 'next/link'
import classes from './meals-header.module.css'



export default function MealsHeader() {
  return (
    
        <header className={classes.header}>
            <h1>Delicious meals, created</h1> 
            <span className={classes.highlight}>by you</span>
            <p>Choose your favorite recipe and cook it yourself. It is easy and fun</p>
            <p className={classes.cta}>
                <Link href={'/meals/share'}>
                    Share Your Favorite Recipe
                </Link>
            </p>
        </header>
    
  )
}
