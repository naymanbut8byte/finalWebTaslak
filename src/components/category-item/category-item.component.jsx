import './category-item.styles.css';

const CategoryItem = ({category}) => {
    const {title,imageUrl} = category;
    return (
        <div className="card">
            <img className='img'src={imageUrl}  alt="Gitar"  />
          <h1>{title}</h1>
           <button className='button' > Satın Al </button>    
         </div>
     
    );
}

export default CategoryItem;  