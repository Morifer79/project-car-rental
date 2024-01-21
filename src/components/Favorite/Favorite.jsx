import { useSelector } from 'react-redux';
import { getIsLoading, selectFavorite } from '../../redux/selectors';
import { ItemCard } from 'components/ItemCard/ItemCard';
import { Filters } from 'components/Filters/Filters';
import { Loader } from 'components/Loader/Loader';
import SpriteIcons from '../../images/sprite.svg';
import {
  ErMs,
  FavoriteFrame,
  FavoriteItem,
  FavoriteList,
  FavoriteWrapper,
  Ups,
} from './Favorite.styled';

export const Favorite = () => {
  const favorites = useSelector(selectFavorite);
  const isLoader = useSelector(getIsLoading);
  return (
    <>
      {isLoader && <Loader />}
      {favorites.length > 0 ? (
        <FavoriteFrame>
          <Filters />
          <FavoriteWrapper>
            <FavoriteList>
              {favorites.map(item => (
                <FavoriteItem key={item.id}>
                  <ItemCard advert={item} />
                </FavoriteItem>
              ))}
            </FavoriteList>
          </FavoriteWrapper>
        </FavoriteFrame>
      ) : (
        <ErMs>
          <Ups>NO FAVORITE YET</Ups>
          <svg width="80vw" height="80vh" fill="#0B44CD">
            <use xlinkHref={`${SpriteIcons}#icon-no_favorite`} />
          </svg>
        </ErMs>
      )}
    </>
  );
};
