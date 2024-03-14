/* eslint-disable */

import styled from 'styled-components';
import UserInfo from './UserInfo';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(225 calc(1 * 6.3%) 12.5% / 1);
`;
const Banner = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgb(116, 124, 139);
  border-radius: 5px 5px 0 0;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <Banner></Banner>
      <UserInfo></UserInfo>
    </ProfileContainer>
  );
};

export default Profile;
