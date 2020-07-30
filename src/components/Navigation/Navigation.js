import React from 'react';
import { List, Container } from './Navigation.css'
import { Wrapper } from 'components'
import { Link } from 'react-router-dom'



function Navigation({ items }) {
    return (
        <Container>
            <Wrapper>
                <List>
                    {items.map(item => {
                        return (
                            <li key={item.to}>
                                <Link to={item.to}>
                                    {item.content}
                                </Link>
                            </li>
                        )
                    })}
                </List>
            </Wrapper>
        </Container>
    )
}

export default Navigation;