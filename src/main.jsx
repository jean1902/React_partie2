import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Article from './article.jsx'
import Contact from './contact.jsx'
import Emploi from './emploi.jsx'
import PageErreur from './PageErreur.jsx'
import './index.css'
import Proteger from './Proteger.jsx'
  import {createBrowserRouter,Link,RouterProvider,Outlet} from 'react-router-dom'
import Erreur404 from './Erreur404.jsx'

  const route =createBrowserRouter([
    {
      path:"/",
      element : < App/>,
      // errorElement: <PageErreur/>
      
    },
    {
      path:"apropos",
      element : (
        <>
        <h1>voila apropos</h1>
       <Link to="/ ">retour Accueil </Link> <br />
       <Link to="/apropos/contact">contact</Link> <br />
    <Link to="/apropos/emploi">emploi</Link>
    <div>
        <Outlet/>
      </div>
       
        {/* <a href="/">retour a l'accueil</a> */}
        </>
      ),children :[
        {
          path :"/apropos/contact",
          element:<Contact/>
        },
        {   
          path :"/apropos/emploi",
          element:<Emploi/>
        }
      ]
    },
    {
      path:"contact",
      element : <h1>voici ici tous les contacts</h1>
    },
    {
      path:"/blog",
      element : <>
      {/* <h2>listes des articles</h2>
      // <Link to="/blog/1"> article 1</Link> */} 
      {/* route protegé */}
      {/* <Article estConnecte={false} /> */}
      <Proteger>
        <Article  estconnecte ={true}/>
      </Proteger>
      </>
    } ,
    {
      path:"/blog/:id",
      element : <>
        <h2> nous sommes sur l'article </h2>
      </>
    }
    ,{
      path:"*",    //erreur 404
      element:<Erreur404/>
    }
  ])

// <outlet/> pour afficher le nombre le contenu de chaque route enfant(children)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
    {/* <App/> */}
  </React.StrictMode>,
)
