import styled from "styled-components";
import { useUser } from "./useUser";
import Modal from "../../ui/Modal";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4.4rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  padding: 2px;
  outline: 2px solid var(--color-brand-700);
`;

const AvatarContent = styled.div`
  padding: 1.6rem;
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <Modal>
      <StyledUserAvatar>
        <Modal.Open opens="userAvatarModal">
          <Avatar src={avatar || "default-user.jpg"} alt={fullName} />
        </Modal.Open>
        <span>{fullName}</span>

        <Modal.Window name="userAvatarModal">
          <AvatarContent>
            <img
              width="450px"
              height="450px"
              style={{ objectFit: "cover", borderRadius: "4px" }}
              src={avatar || "default-user.jpg"}
              alt={fullName}
            />
          </AvatarContent>
        </Modal.Window>
      </StyledUserAvatar>
    </Modal>
  );
}

export default UserAvatar;
