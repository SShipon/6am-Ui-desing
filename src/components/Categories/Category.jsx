import React from 'react';

const Category = (product) => {
    const {name} = product
    return (
        <div>
            {name}
        </div>
    );
};

export default Category;