import React, {useState}from 'react';

const EditForm = props => {

    const changeHandler = e =>{
        props.setObject({ ...props.member, [e.target.name]: e.target.value })
    }

    return(
        <div className='editform'>
            <form>
              <div className='formbox'>
                <label>
                  Name:&nbsp;
                  <input
                      type='text'
                      placeholder='Enter name here...'
                      name='name'
                      value={props.member.name}
                      onChange={changeHandler}
                  />
                </label>
              </div>
              <div className='formbox'>
              <label>
                Email:&nbsp;
                  <input
                      type='text'
                      placeholder='Enter email here...'
                      name='email'
                      value={props.member.email}
                      onChange={changeHandler}
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
                      value={props.member.role}
                      onChange={changeHandler}
                  />
                </label>
              </div>
            </form>
        </div>
    )
}
export default EditForm;
