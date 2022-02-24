// components in React is just a JS function
// function is named in large capital to tell React this is a customized HTML.
// lower cases will be regarded as regular imported HTML elements.
function ExpenseItem() {
    return (
    <div>
        <div>March 28th 2021</div>
        <div>
            <h2>Car Insurance</h2>
            <div>$294.67</div>
        </div>
    </div>
    );
}

// need to export. Otherwise, function only useful in this file.

export default ExpenseItem;