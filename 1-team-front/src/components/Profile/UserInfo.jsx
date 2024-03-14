/* eslint-disable*/
import styled from 'styled-components';

import profileImage from '../../assets/images/IMG_2827.jpeg';

const UserInfoWrapper = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 40px 0 130px;
  gap: 280px;
  > button {
    font-size: 0.85rem;
    font-weight: 600;
    color: #fff;
    border-radius: 4px;
    background-color: hsl(235 calc(1 * 85.6%) 64.7% / 1);
    transition: all 0.3s ease;
  }
  > button:hover {
    background-color: hsl(235 calc(1 * 51.4%) 52.4% / 1);
  }
`;

const UserImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -30px;
  left: 20px;
  background-color: hsl(225 calc(1 * 6.3%) 12.5% / 1);
  border-radius: 100%;
  > img {
    width: 85px;
    height: 85px;
    border-radius: 100%;
  }
`;

const UserInfo = () => {
  return (
    <UserInfoWrapper>
      <UserImgWrapper>
        <img src={profileImage} />
      </UserImgWrapper>
      <h3>sebellko</h3>
      <button>사용자 프로필 편집</button>
    </UserInfoWrapper>
  );
};

export default UserInfo;
