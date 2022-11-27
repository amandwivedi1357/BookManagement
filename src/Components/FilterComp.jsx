import React, { useEffect, useState } from 'react'
import {  useSearchParams } from 'react-router-dom'

const FilterComp = () => {
  const [searchParams,setSearchPrams] = useSearchParams()
  const initData = searchParams.getAll('category')
  const initSort = searchParams.getAll('sort')
  const [category,setCategory] = useState(initData||[])
  const [sort,setSort] = useState(initSort[0]||'')
  
  const handleFilterCheckbox = (e)=>{
  const newCategory = [...category];
  if(newCategory.includes(e.target.value))
  {
  newCategory.splice(newCategory.indexOf(e.target.value),1)
  }
  else{
    newCategory.push(e.target.value)
  }

  setCategory(newCategory)
  }
  console.log(category)
 
  const handleSort = (e)=>{
    setSort(e.target.value)
}

  useEffect(()=>{
    let params = {}
    sort && (params.sort = sort)
  params.category = category;
  setSearchPrams(params);
  },[category,setSearchPrams,sort])

  
  return (
    <div>
      <h3>Filter Component</h3>

      <div>
        <input type="checkbox" value='Novel' checked={category.includes('Novel')} onChange={handleFilterCheckbox}/>
        <label>Novel</label>
      </div>
      <div>
        <input type="checkbox" value='Motivational' checked={category.includes('Motivational')}  onChange={handleFilterCheckbox}/>
        <label>Motivational</label>
      </div>
      <div>
        <input type="checkbox" value='Thriller' checked={category.includes('Thriller')}  onChange={handleFilterCheckbox}/>
        <label>Thriller</label>
      </div>
      <div>
        <input type="checkbox" value='Science_Fiction' checked={category.includes('Science_Fiction')}  onChange={handleFilterCheckbox}/>
        <label>Science Fiction</label>
      </div>

      <h3>Sort Component</h3>
      <div onChange={handleSort}>
        <input defaultChecked = {sort==="asc"} type="radio" value="asc" name="sortBy" />
        <label >Ascending</label>
        <br />
        <input defaultChecked={sort==="desc"} type="radio" value="desc" name="sortBy" />
        <label >Descending</label>

      </div>
    </div>
  )
}

export default FilterComp
