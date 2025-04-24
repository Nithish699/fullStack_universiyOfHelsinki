import '../index.css';
const UpdateError =({errorMessage})=>{
    if(errorMessage==null) {
        return null;
    }
    return(
        <div className='errorMessage'>
            {errorMessage}
        </div>
    )
}
export default UpdateError;