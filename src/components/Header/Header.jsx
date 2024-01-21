import { HeaderWrapper, Hr } from './Header.styled';
import { Navigation } from './Navigation/Navigation';

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Navigation />
      </HeaderWrapper>
      <Hr />
    </>
  );
};
