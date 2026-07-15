const getFoods=async()=>{
    const res=await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
    const data=await res.json();
    
    return data.foods;
}
const Foods = async() => {
    const foods=await getFoods();
    console.log(foods);
    return (
        <div>
            <h2>Food Page.</h2>
        </div>
    );
};

export default Foods;