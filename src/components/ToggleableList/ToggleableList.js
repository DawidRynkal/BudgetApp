import React, { useState } from 'react';

const Item = ({ item, onClickHandler, isActive }) =>
    (
        <div>
            <item.Trigger onClick={onClickHandler} />
            {isActive && item.children}
        </div>)


function ToggleableList({ items }) {
    const [selectedItem, setSelectedItem] = useState();
    console.log(selectedItem)
    return (
        <>
            {items.map(item => {
                return (
                    <Item
                        key={item.id}
                        item={item}
                        onClickHandler={setSelectedItem}
                        isActive={selectedItem === item.id}
                    />
                )
            }
            )}
        </>
    )
}

export default ToggleableList;