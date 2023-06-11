
import './category-item.styles.css';

const EkipmanItem = ({category}) => {
    const {title,imageUrl} = category;
    return (
        <div className="card">
            <img className='img1'src={imageUrl}  alt="Gitar"  />
          <h1>{title}</h1>
           <button className='button' >Satın Al</button>    
         </div>
     
    );
}

export default EkipmanItem;  