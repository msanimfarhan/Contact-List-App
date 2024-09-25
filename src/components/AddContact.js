import React from 'react';
class AddConatct extends React.Component{
render(){
    return(
        <div className="ui main">
            <h2>Add Contact</h2>
            
            <form className="ui form">
                <div className="field">
                    <label >Name</label>
                    <input type="text" name="name" placeholder="Email" />
                </div>
                <div className="field">
                    <label >Name</label>
                    <input type="text" name="name" placeholder="Email" />
                </div>
                <button className="ui buttom blue">Add</button>
            </form>
        </div>
        
    );
}
}
export default AddConatct;