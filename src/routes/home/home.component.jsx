import Categories from "../../components/categories/categories.component";
import {Outlet} from 'react-router-dom';

const Home = () => {
    const categories = [
        {
          "id": 1,
          "title": "Klasik Gitar",
          "imageUrl": "https://img-zuhalmuzik.mncdn.com/mnresize/1000/1000/images/product/120927001.png"
        },
        {
          "id": 2,
          "title": "Akustik Gitar",
          "imageUrl": "https://img-zuhalmuzik.mncdn.com/mnresize/1000/1000/images/product/141407GLA%20T170ACE_1.png"
        },
        {
          "id": 3,
          "title": "Elektro Gitar",
          "imageUrl": "https://img-zuhalmuzik.mncdn.com/images/category/1508460149862350_1.png"
        },
        {
          "id": 4,
          "title": "Bass Gitar",
          "imageUrl": "https://img-zuhalmuzik.mncdn.com/mnresize/1000/1000/images/product/0370760532_1.png"
        },
        {
          "id": 5,
          "title": "12 Telli Gitar",
          "imageUrl": "https://img-zuhalmuzik.mncdn.com/mnresize/1000/1000/images/product/001221PF1512-NT_1.jpg"
        },
        {
          "id": 6,
          "title": "Perdesiz Bass Gitar",
          "imageUrl": "https://img-zuhalmuzik.mncdn.com/mnresize/700/700/images/product/160213SRF705-BBF_1.jpg"
        },
        {
          "id": 7,
          "title": "Ukulele",
          "imageUrl": "https://img-zuhalmuzik.mncdn.com/mnresize/700/700/images/product/174402GLU%20TKU8C_1.jpg"
        },
        {
          "id": 8,
          "title": "Gitar Setleri",
          "imageUrl": "https://www.do-re.com.tr/sx-se1-sk-3ts-elektro-gitar-seti-8c6bd425e351d31e0ee8ebee51a0913f-77d4f7052e0537480d86dbf36984f0d7-large-pp.jpg"
        },
      ]
  return (
    <div>
        <Outlet/>
        <Categories categories={categories}/>
    </div>
  );
}

export default Home;