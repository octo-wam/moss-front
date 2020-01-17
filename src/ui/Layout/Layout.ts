import styled from "styled-components";

export const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;

  main {
    flex: 1;
    overflow-y: auto;
    background: var(--color-background-gradient);
  }
`;

export const PageContent = styled.div`
  padding: 5rem 0;
  width: 96%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
