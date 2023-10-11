import React from 'react';
import { useSelector } from 'react-redux';
import { getStatus } from '../redux/categories/categoriesSlice';

function CategoryList() {
  const categories = useSelector(getStatus);
  const handleClick = () => `Status: ${categories}`;

  return (
    <div>
      <button type="button" onClick={handleClick}>Get Status</button>
      <div />
    </div>
  );
}

export default CategoryList;
