import '../index.css';
const AddedMessage = ({ message }) => {
    if (message === null) {
      return null
    }
    return (
      <div className='addMessage'>
        {message}
      </div>
    )
  }
export default AddedMessage;