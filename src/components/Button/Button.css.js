import styled from 'styled-components';

export const RootButton = styled.button`
color: #E6E6FA;
cursor: inherit;
border: none;
background-color: transparent;
cursor: ${props => props.to || props.onClick || props.type === 'submit' ? 'pointer' : 'default'};

&:hover {
    background:#E6E6FA;
    color :black;
    border-radius: 10px;
}
`;

export const InlineButton = styled(RootButton)`
&:hover {
    
}
`

export const RegularButton = styled(RootButton)`
background: #FF6666;
color: white;
border-radius: 3px;
margin-left: 13px;
`