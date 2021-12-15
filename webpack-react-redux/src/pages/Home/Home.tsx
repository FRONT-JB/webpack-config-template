import { Outlet } from 'react-router';
import { StyledHome } from './Styled';

const Home = () => {
  return (
    <StyledHome>
      Home
      <Outlet />
    </StyledHome>
  );
};

export default Home;
