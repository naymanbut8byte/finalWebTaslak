import EkipmanItem from '../category-item/ekipman-item';

import './categories.styles.css';

const Categories = ({categories}) => {
    return (
        <div className="categories-container">
            {categories.map((category) => {
                const { id } = category;
                return (
                    <EkipmanItem key={id} category={category} />
                );
            }
            )}
        </div>
    );
}

export default Categories;