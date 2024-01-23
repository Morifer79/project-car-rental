import { StyledLink, StyledLogo } from './Navigation.styled';
import SpriteIcons from '../../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectFavorite } from '../../../redux/selectors';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Navigation = () => {
  const [hasClass, setHasClass] = useState(false);
  const favorites = useSelector(selectFavorite);
  const location = useLocation();
  const isOnFavoritePage = location.pathname === '/favorites';
  const className = hasClass ? 'hintLink' : '';

  useEffect(() => {
    isOnFavoritePage && !hasClass
      ? setHasClass(true)
      : !isOnFavoritePage && hasClass && setHasClass(false);
  }, [isOnFavoritePage, hasClass]);

  return (
    <>
      <StyledLogo to="/">
        CAR
        <svg width="40" height="40" fill="#3470FF">
          <use xlinkHref={`${SpriteIcons}#icon-logo_car`} />
        </svg>
        RENT
      </StyledLogo>
      <StyledLink to="/">Home</StyledLink>
      {favorites.length === 0 ? (
        <StyledLink to="/catalog" className={className}>
          Catalog
        </StyledLink>
      ) : (
        <StyledLink to="/catalog">Catalog</StyledLink>
      )}
      <StyledLink to="/favorites">Favorite</StyledLink>
      <StyledLogo to="/">
        CAR
        <svg width="40" height="40" fill="#3470FF">
          <use xlinkHref={`${SpriteIcons}#icon-logo_car`} />
        </svg>
        RENT
      </StyledLogo>
    </>
  );
};
