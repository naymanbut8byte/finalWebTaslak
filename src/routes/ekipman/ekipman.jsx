import Categories from "../../components/categories/ekipmanies";
import {Outlet} from 'react-router-dom';

const Ekipman = () => {
    const categories = [
        {
          "id": 1,
          "title": "Gitar Askısı",
          "imageUrl": "https://www.do-re.com.tr/jim-dunlop-jh08-hendrix-ttg-studios-gitar-askisi-002e96a7df90cee9313b73b6dd3b6578-e964baf3977b8202ff456e5f9b2e3f76-large-pp.jpg"
        },
        {
          "id": 2,
          "title": "Gitar Teli",
          "imageUrl": "https://media.mydukkan.com/image/38705/thmb_900x900_PitbullStrings.PitbullStringsSilverSeriesSEG1046L38705.jpg"
        },
        {
          "id": 3,
          "title": "Case & Kılıf",
          "imageUrl": "https://data.do-re.com.tr/ProductCategoryPhoto/d3f8679ef3f9697f963228eebf8756a8.jpg"
        },
        {
          "id": 4,
          "title": "Aksam/Yedek Parçalar",
          "imageUrl": "https://img-zuhalmuzik.mncdn.com/images/category/144405yedekPar%C3%A7a.jpg"
        },
        {
          "id": 5,
          "title": "Kablolar",
          "imageUrl": "https://data.do-re.com.tr/ProductCategoryPhoto/23f52c23e6571dbfe8462d7ee50decbe.jpg"
        },
        {
          "id": 6,
          "title": "Penalar",
          "imageUrl": "https://data.do-re.com.tr/ProductCategoryPhoto/ec82487e72a6eb819e4423d655cd23af.jpg"
        },
        {
          "id": 7,
          "title": "Sehpa & Stantlar",
          "imageUrl": "https://data.do-re.com.tr/ProductCategoryPhoto/99909bcb7c0a4be463c6ec9b27750a87.jpg"
        },
        {
          "id": 8,
          "title": "Bakım ve Temizlik",
          "imageUrl": "https://data.do-re.com.tr/ProductCategoryPhoto/9fd4191190896a9b1042827b0624ff28.jpg"
        },
      ]
  return (
    <div>
        <Outlet/>
        <Categories categories={categories}/>
    </div>
  );
}

export default Ekipman;