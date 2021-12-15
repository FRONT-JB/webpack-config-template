import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ButtonStyle } from '~/assets/styles/common';
import { requestSelector, toggleOnGoing } from '~/store/slices/request';
import { StyledMain } from './Styled';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { isOnGoing } = useSelector(requestSelector);

  const handleClick = () => {
    dispatch(toggleOnGoing());
  };

  return (
    <StyledMain>
      <p>MainContainer</p>
      <Button type='button' style={{ background: '#000' }} onClick={handleClick}>
        Dispatch
      </Button>
      <p>{isOnGoing ? 'isOnGoing True' : 'isOnGoing False'}</p>
    </StyledMain>
  );
};

export default MainContainer;

const Button = styled(ButtonStyle)`
  color: red;
`;
