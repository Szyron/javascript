

function UserSelect({setUserNum}) {
  return (
    <div>
        <select onChange={(e)=> setUserNum(e.target.value)}>
            <option selected value="5">5</option>
            <option value="18">18</option>
            <option value="25">25</option>
            <option value="38">25</option>
            <option value="40">40</option>
            <option value="50">50</option>
        </select>
    </div>
  )
}

export default UserSelect