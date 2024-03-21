const { useState } = require( "react" );

const UserForm = () => {

    const handleChange = (e) => {
        const [submittal, setSubmittal] = useState[{
            userName:""
        }];
        const [error, setError] = useState[{
            userName: ""
        }];

        const value = e.target.value;
        setSubmittal({ ...submittal, [e.target.name]: value });
      };
      
    const handleSubmit = (e) => {
        e.preventDefault()
        if(submittal.userName = ""){
            setError("Please fill out this field")
        }
    }
    return(
        <form action={handleSubmit} >
            <input type="text" name="userName" id="userName" onChange={handleChange} value={submittal.userName} />
            <span className={error.userName != "" ? "text-red-400 text-xs dark:text-red-50" : "hidden"} >{error.userName}</span>
            <button onSubmit={handleSubmit}>Submit</button>
        </form>
    )
}
export default UserForm;