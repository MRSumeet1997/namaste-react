const RestaurantCard = ({ id, name, dishes, ratings, time,imageId }) => {
    return (
        <div key={id} className="res-card" style={{ backgroundColor: "f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src="https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg"
            />
            <h3>{name}</h3>
            <h4>{dishes}</h4>
            <h4>{ratings}</h4>
            <h4>{time}</h4>
        </div>
    )
}

export default RestaurantCard;