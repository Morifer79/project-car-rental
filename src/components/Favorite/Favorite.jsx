import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';
import { ItemCard } from 'components/ItemCard/ItemCard';
import { Filters } from 'components/Filters/Filters';
import SpriteIcons from '../../images/sprite.svg';
import { ErMs, FavoriteList, FavoriteWrapper, Ups } from './Favorite.styled';
import { LearnMoreModal } from 'components/LearnMoreModal/LearnMoreModal';

export const Favorite = ({ isModalOpen, openModal, closeModal, isClick }) => {
  const favorites = useSelector(selectFavorite);
  return (
    <>
      {favorites.length > 0 ? (
        <>
          <Filters />
          <FavoriteWrapper>
            <FavoriteList>
              {favorites.map(item => (
                <ItemCard key={item.id} advert={item} />
              ))}
            </FavoriteList>
          </FavoriteWrapper>
        </>
      ) : (
        <ErMs>
          <Ups>NO FAVORITE YET</Ups>
          <svg width="80vw" height="80vh" fill="#0B44CD">
            <use xlinkHref={`${SpriteIcons}#icon-no_favorite`} />
          </svg>
        </ErMs>
      )}
      {isModalOpen && (
        <LearnMoreModal
          isOpen={isModalOpen}
          handleCloseModal={closeModal}
          advert={isClick}
        />
      )}
    </>
  );
};
