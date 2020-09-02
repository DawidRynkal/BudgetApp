

export const fetchAllCategories = async () => {
    const response = await fetch('https://my-json-server.typicode.com/dawidrynkal/budgetAppData/categories/?_expand=parentCategory');
    const data = response.json();
    return data;
}