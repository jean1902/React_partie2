import React from 'react'

export default function contact() {
  return (
    <div>
        
        <form action="" className='formulaire '>
        <legend>contactez nous</legend>
           <div className="form-group">
           <label htmlFor="nom">Nom</label> <br />
            <input  className='input-formulaire' type="text" id='nom' />
           </div>
           <div className="form-group">
           <label htmlFor="email">Email</label> <br />
            <input className='input-formulaire' type="email" id='email'/>
           </div>
            <div className="form-group">
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <button type='subnit'>Envoyez</button>
        </form>

    </div>
  )
}
