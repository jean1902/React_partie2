import React from 'react'
import { useParams,Navigate } from 'react-router-dom';

export default function article() {

  // if(!estconnecte) return <Navigate to="/"/> //verifier si l'user est connecté , Navigate permet de rediriger l'utilisateur  avec ¨{estconnete} en paramètre

    const id =  useParams();//fonction qui renvoie le contenant de l'url de navigation
      console.log(id)
  return (
    <div>
      <h3> article avec id:{id} </h3>
    </div>
  ) 
}
 