import React from 'react';

const Form = (props) => {

    return(
        <div className='form'>
            <form>
            <div className='formbox'>
              <label>
              Name:&nbsp;
                <input
                    type='text'
                    placeholder='Enter name here...'
                    name='name'
                    onChange={props.handleChange}
                />
              </label>
            </div>

            <div className='formbox'>
              <label>
              Email:&nbsp;
                <input
                    type='email'
                    placeholder='Enter email here...'
                    name='email'
                    onChange={props.handleChange}
                />
              </label>
            </div>

            <div className='formbox'>
              <label>
              Role:&nbsp;
                <input
                    type='text'
                    placeholder='Enter role here...'
                    name='role'
                    onChange={props.handleChange}
                />
              </label>
            </div>

                <button className='addmember' onClick={props.addMember} >Add Member to Team</button>
            </form>
        </div>
    )
}

export default Form;
