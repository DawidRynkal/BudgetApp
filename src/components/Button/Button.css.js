import styled from 'styled-components';

export const RootButton = styled.button`
color: black;
cursor: inherit;
border: none;
background-color: transparent;
cursor: ${props => props.to || props.onClick || props.type === 'submit' ? 'pointer' : 'default'};

&:hover {
    background: white;
    color :black;
    
}
`;

export const InlineButton = styled(RootButton)`
&:hover {
    text-decoration: underline;
}
`

export const RegularButton = styled(RootButton)`
background: black;
color: white;
margin: 5px;
padding: 5px;
border-radius: 3px;
`