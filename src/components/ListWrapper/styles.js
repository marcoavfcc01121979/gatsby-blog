import styled from 'styled-components'

export const listWrapper = styled.section`
  body#grid & {
    background-color: #dedede;
    border-bottom: 1px solid #dedede;
    display: grid;
    grid-area: posts;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
`;