
function Filter(props) {
  //// options Filtered by and Cancel have a value of "all" to achieve the same effect thru the state
  return (
  <select  value={props.value} onChange={props.handleOptionFilter} >
     <option value="all" > Filter by: </option>
     <option value="city" >City</option>
     <option value="state" >State</option>
    <option value="all">Cancel</option>  
  </select>
    )}
  export default Filter;