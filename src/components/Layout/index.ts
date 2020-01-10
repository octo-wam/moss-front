import styled from "styled-components";

export const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;

  main {
    flex: 1;
    overflow-y: auto;
  }
`;
