import { FC, memo } from "react";
import { UserInfoData } from "./user_info_data";
import styled from "styled-components";

interface UserInfoProps {
  userInfo: UserInfoData;
}

const UserInfoContainer = styled.div`
  line-height: 22px;
  text-align: center;
  width: 100%;
`;

const UserInfoAvatarBig = styled.div`
  background-color: #f0dc46; /* --saveday-yellow */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  font-size: 70px;
  height: 140px;
  line-height: 140px;
  margin: 0 auto;
  width: 140px;
`;

const UserInfoDisplayNameBig = styled.div`
  font-size: 28px;
  margin-top: 20px;
`;

const UserInfoBioBig = styled.div`
  font-size: 16px;
`;

function getInitial(displayName: string): string {
  return displayName[0].toUpperCase();
}

const UserInfoExpanded: FC<UserInfoProps> = ({ userInfo }) => {
  return (
    <UserInfoContainer>
      {typeof userInfo.avatar === "string" ? (
        <UserInfoAvatarBig
          style={{ backgroundImage: `url(${userInfo.avatar})` }}
        />
      ) : (
        <UserInfoAvatarBig>
          {getInitial(userInfo.displayName)}
        </UserInfoAvatarBig>
      )}
      <UserInfoDisplayNameBig>{userInfo.displayName}</UserInfoDisplayNameBig>
      <UserInfoBioBig>{userInfo.bio}&nbsp;</UserInfoBioBig>
    </UserInfoContainer>
  );
};

const UserInfo: FC<UserInfoProps> = (props) => {
  return <UserInfoExpanded {...props} />;
};

export default memo(UserInfo);
