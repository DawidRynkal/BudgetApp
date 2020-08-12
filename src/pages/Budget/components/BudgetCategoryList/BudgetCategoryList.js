import React from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import ToggleableList from 'components/ToggleableList';
import ParentCategory from './ParentCateory'
import CategoryItem from './CategoryItem'

function BudgetCategoryList({ budgetedCategories, allCategories }) {
    const budgetedCategoriesByParent = groupBy(budgetedCategories, item => allCategories.find(category => category.id === item.categoryId).parentCategory.name);



    const listItem = Object.entries(budgetedCategoriesByParent).map(([parentName, categories]) => ({
        id: parentName,
        Trigger: ({ onClick }) => (
            <ParentCategory
                name={parentName}
                onClick={() => onClick(parentName)}
            />
        ),
        children: categories.map(budgetedCategory => {
            const { name } = allCategories.find(category => category.id === budgetedCategory.categoryId)

            return (
                <CategoryItem
                    key={budgetedCategory.id}
                    name={name}
                />
            )
        })
    }))

    return (
        <ToggleableList
            items={listItem}
        />
    )
}

export default connect(state => ({
    budgetedCategories: state.budget.budgetedCategories,
    allCategories: state.common.allCategories,
}))(BudgetCategoryList)