import React, { useState } from "react";
import Gallery from "./Gallery";

export default function Categories({categorySlug}) {
  const [categorySlug, setCategorySlug] = useState()



  return (
    <>
      <Gallery page='category' path={categorySlug}/>
    </>
  )
}

/*
  Slugs that I will be using Wallpapers, Nature, Travel, Animals and Food & Drink
  Use a case/if statement to change the state of the slug
  Save the category in the slug variable
*/