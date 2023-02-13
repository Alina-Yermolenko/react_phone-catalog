import { useContext, useState } from 'react';
import {
  DetailedProductContext,
} from '../../../../../../../../context/DetailedProductContext';
import './ProductPicturesBlock.scss';

// type Props = {
//   detailedProduct: any,
// };

export const ProductPicturesBlock:React.FC<any> = () => {
  const [mainPicture, setMainPicture] = useState(0);
  const isSelected = (pictureNumber: number) => pictureNumber === mainPicture;
  const { detailedProduct } = useContext<any>(DetailedProductContext);

  return (
    <div className="pictures-block">
      <ul className="pictures-block__list">
        {detailedProduct.images.map((one: any, index: number) => {
          return (
            <li
              key={one}
              className={`pictures-block__item ${isSelected(index) && 'selected-picture'}`}
              onClick={() => {
                return setMainPicture(index);
              }}
              aria-hidden="true"
            >
              <img
                src={`new/${one}`}
                alt="phone"
                className="pictures-block__image"
              />
            </li>
          );
        })}
      </ul>
      <img
        src={`new/${detailedProduct.images[mainPicture]}`}
        alt="main"
        className="pictures-block__main"
      />
    </div>
  );
};