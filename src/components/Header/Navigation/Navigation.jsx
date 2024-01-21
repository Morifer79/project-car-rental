import { StyledLink, StyledLogo } from "./Navigation.styled";
import SpriteIcons from '../../../images/sprite.svg';

export const Navigation = () => {
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
      <StyledLink to="/catalog">Catalog</StyledLink>
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
