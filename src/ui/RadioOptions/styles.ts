import styled from "styled-components";

export const RadioOptionsLayout = styled.div`
  li + li {
    margin-top: 1rem;
  }

  label {
    display: block;
  }

  label span {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    color: var(--color-text-title);
    font-weight: bold;
  }

  input + span::before {
    content: "";
    display: block;
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 50%;
    margin-right: 10px;
    border: 2px solid #b7b7b7;
    transition: all 0.1s ease;
  }

  input:checked + span::before {
    border-color: var(--color-gray);
  }

  input + span::after {
    content: "";
    display: block;
    position: absolute;
    opacity: 0;
    background: var(--color-primary);
    left: 4px;
    top: 4px;
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 50%;
    transition: all 0.1s ease;
  }

  input:checked + span::after {
    opacity: 1;
  }

  input:focus + span {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;
