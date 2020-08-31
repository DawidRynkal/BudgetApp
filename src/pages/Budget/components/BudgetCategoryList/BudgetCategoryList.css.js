import styled from 'styled-components'

export const ParentCategory = styled.div`
border: 1px solid black;
margin-bottom: 1px;
padding: 10px;
display: flex;
justify-content: space-between;
`;

export const CategoryItem = styled.div`
border: 1px solid black;

`;

export const CategoryAmount = styled.div`
font-weight: 700;
color: ${({ negative }) => negative ? 'red' : '#00CC00'}
`;
