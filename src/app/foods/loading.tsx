import FoodCardSkeleton from '@/components/FoodCardSkeleton/FoodCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {
                [...Array(12)].map((_,index)=><FoodCardSkeleton key={index}></FoodCardSkeleton>)
            }
        </div>
    );
};

export default loading;