import styled from 'styled-components'

export const List = styled.ul`
> li + li {
    margin-top: 10px;
}
`;

export const ListItem = styled.li`
margin-left:10px;
margin-bottom:1px;
border: 1px solid black;
padding: 10px;
display:flex;
justify-content: space-between;
> *:nth-child(1) {
    flex: 4;
}
> *:nth-child(2) {
    flex: 2;
}
> *:nth-child(3) {
    flex: 3;
}
> *:nth-child(4) {
    flex: 1;
}
`