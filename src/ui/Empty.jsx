import styled from "styled-components";

const StyledEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Empty({ resourceName }) {
  return (
    <StyledEmpty>
      <p>No {resourceName} could be found.</p>
    </StyledEmpty>
  );
}

export default Empty;
