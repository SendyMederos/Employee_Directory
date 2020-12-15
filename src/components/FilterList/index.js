function FilterList(props) {
    let optionsListDup= [];
    /// evaluating if we are going to pass the city or the state as the value of the option making an array with all cities or states
    /// the only reason why we are not passsing the option with the value of each city or state is because it won't let you eliminate duplicates after.
    if (props.value === "city") {
        props.employees.forEach((x) => {
            return optionsListDup.push(x.city)
        })
    } else if (props.value === "state") {
        props.employees.forEach((x) => {
            return optionsListDup.push(x.state)
        })
    }
    //// I am setting optionsListDup to a new array without duplicates 
    optionsListDup = [... new Set(optionsListDup)]
    console.log(optionsListDup)
    /// now that the array has no duplicates I am mapping thru it and returning the options with the array of cities or states as their value 
    let optionsList = optionsListDup.map((x) => {
        return <option value={x}/>})
    return (
        <div>
            <input type="text" list="data" onChange={props.handleFilter} />
            <datalist id="data">
                {optionsList}
            </datalist>
        </div>
    )
}

export default FilterList;
