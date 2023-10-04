import React from 'react'
import { Navigate } from 'react-router-dom'
export default function Proteger({estconnecte,children}) {

    if(!estconnecte) return <Navigate to="/emploi"/>

  return (
    <div>{children}</div>
  )
}
