import React from 'react'


export const LogFormComponent = ({ visible, data, onHide }) => {
  
    if (!visible) {
        return null;
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        onHide();
      };

    return (
        <div>
      <form onSubmit={handleSubmit}>
      <input
                className="input"
                type="text"
                value={data.name}
                onChange={((e)=>{
                   console.log(e.target.value)
                  
                })}
                 />
       
        <button type="submit">Submit</button>
      </form>
      <button onClick={onHide}>Close</button>
    </div>
  )
};