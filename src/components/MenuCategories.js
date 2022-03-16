const MenuCategories = ({ categories, setSelectedCategory }) => {

    const handleClick = (category) => {
        // modify the state value
        setSelectedCategory(category)
    }

    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => handleClick(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default MenuCategories