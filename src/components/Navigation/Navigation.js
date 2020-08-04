import React from 'react';
import { List, Container } from './Navigation.css'
import { NavigationWrapper } from './Navigation.css'
import Button from '../Button/Button'
import PropTypes from 'prop-types';



function Navigation({ items = [], RightElement }) {
    return (
        <Container>
            <NavigationWrapper>
                <List>
                    {items.map(item => {
                        return (
                            <li key={item.to}>
                                <Button variant="inline" to={item.to}>
                                    {item.content}
                                </Button>
                            </li>
                        )
                    })}
                </List>
                {RightElement}
            </NavigationWrapper>
        </Container>
    )
}

Navigation.propTypes = {
    items: PropTypes.array.isRequired,
}

export default Navigation;