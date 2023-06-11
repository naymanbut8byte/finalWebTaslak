import CategoryItem from "../category-item/category-item.component";

import './categories.styles.css';

const Categories = ({categories}) => {
    return (
        <div className="categories-container">
            {categories.map((category) => {
                const { id } = category;
                return (
                    <CategoryItem key={id} category={category} />
                );
            }
            )}
        </div>
    );
}

export default Categories;