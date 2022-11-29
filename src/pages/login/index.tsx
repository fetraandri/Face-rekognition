import React, { useRef, useState } from "react";
import AntInput from "../../components/input";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { axiosGget, login } from '../../hooks';
import './style.scss';

export default function Login() {

      const [token, setToken] = useState<string>("");
      const [tokenUseur, setTokenUsern] = useState<any>();
  
    const ProjectUrl: string = "http://localhost:3000";
    const functionLogToken = () => {
      
      axiosGget('/whoami',token,setTokenUsern,()=>{},()=>{})
      console.log(tokenUseur);
      
      if (tokenUseur.role==="MANAGER2"||tokenUseur.role==="TEACHER") {
        localStorage.setItem("user", JSON.stringify({accessToken:token,username:"ezra"}));
        window.location.href=(ProjectUrl+"/new-event");
      }
    }

    const submitBtn = (e:object) => {
      functionLogToken();
      console.log(e);
      
    }
    return(
      <>
      <div className="LoginPage">
        <div className="loginContainer" >
          <div className="LogoandConnexion">
            <div className="login">
             
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="16" viewBox="0 0 35 16" fill="none">
            <path d="M12.068 0.667999C12.152 0.667999 12.26 0.703999 12.392 0.776C12.524 0.847999 12.59 1.022 12.59 1.298V14.888C12.59 15.164 12.524 15.338 12.392 15.41C12.26 15.482 12.152 15.518 12.068 15.518H10.412C10.34 15.518 10.238 15.482 10.106 15.41C9.986 15.338 9.926 15.164 9.926 14.888V9.344H3.104V14.888C3.104 15.164 3.038 15.338 2.906 15.41C2.786 15.482 2.684 15.518 2.6 15.518H0.962C0.878 15.518 0.77 15.482 0.638 15.41C0.506 15.338 0.44 15.164 0.44 14.888V1.298C0.44 1.022 0.506 0.847999 0.638 0.776C0.77 0.703999 0.878 0.667999 0.962 0.667999H2.6C2.684 0.667999 2.786 0.703999 2.906 0.776C3.038 0.847999 3.104 1.022 3.104 1.298V6.68H9.926V1.298C9.926 1.022 9.986 0.847999 10.106 0.776C10.238 0.703999 10.34 0.667999 10.412 0.667999H12.068ZM27.1838 12.278C27.2678 12.278 27.3758 12.314 27.5078 12.386C27.6398 12.446 27.7058 12.614 27.7058 12.89V14.87C27.7058 15.146 27.6398 15.32 27.5078 15.392C27.3758 15.452 27.2678 15.482 27.1838 15.482H20.7938C19.9778 15.482 19.3058 15.38 18.7778 15.176C18.1898 14.972 17.7218 14.642 17.3738 14.186C17.0138 13.718 16.7558 13.13 16.5998 12.422C16.5398 12.122 16.4858 11.792 16.4378 11.432C16.4018 11.072 16.3778 10.682 16.3658 10.262V10.172L16.4018 7.904C16.4378 7.772 16.5038 7.622 16.5998 7.454C16.8638 6.986 17.2718 6.734 17.8238 6.698L27.1118 6.68C27.1838 6.68 27.2858 6.716 27.4178 6.788C27.5498 6.848 27.6158 7.016 27.6158 7.292V8.714C27.6158 8.99 27.5498 9.164 27.4178 9.236C27.2858 9.308 27.1838 9.344 27.1118 9.344H19.0658C19.0538 9.344 19.0478 9.41 19.0478 9.542C19.0478 9.674 19.0478 9.824 19.0478 9.992C19.0478 10.184 19.0418 10.4 19.0298 10.64C19.0418 10.688 19.0478 10.742 19.0478 10.802C19.0478 10.85 19.0538 10.898 19.0658 10.946C19.1138 11.282 19.2158 11.552 19.3718 11.756C19.5158 11.936 19.6958 12.068 19.9118 12.152C20.0438 12.188 20.1818 12.218 20.3258 12.242C20.4818 12.266 20.6558 12.278 20.8478 12.278H27.1838ZM27.2018 0.631999C27.2738 0.631999 27.3758 0.667999 27.5078 0.739999C27.6398 0.812 27.7058 0.986 27.7058 1.262V2.684C27.7058 2.96 27.6398 3.134 27.5078 3.206C27.3758 3.278 27.2738 3.314 27.2018 3.314L16.8518 3.296C16.7798 3.296 16.6778 3.266 16.5458 3.206C16.4258 3.134 16.3658 2.96 16.3658 2.684V1.28C16.3658 0.992 16.4258 0.812 16.5458 0.739999C16.6778 0.667999 16.7798 0.631999 16.8518 0.631999H27.2018ZM33.643 0.667999C33.715 0.667999 33.817 0.703999 33.949 0.776C34.081 0.847999 34.147 1.022 34.147 1.298V14.888C34.147 15.164 34.081 15.338 33.949 15.41C33.817 15.482 33.715 15.518 33.643 15.518H31.987C31.915 15.518 31.813 15.482 31.681 15.41C31.549 15.338 31.483 15.164 31.483 14.888V1.298C31.483 1.022 31.549 0.847999 31.681 0.776C31.813 0.703999 31.915 0.667999 31.987 0.667999H33.643Z" fill="#EFBB04"/>
           </svg>
          
                <p className="connex">connexion</p>             
          </div>               
            </div>
            <div className="MailMDP">
              <div className="frame4">
                    <p className="textemail">Email ou nom d'Utilisateurs</p>
                    <div>
                      <input type="mail" placeholder="Email ou nom d'utilisateur " className="inputmail" />
                      </div>
                      <div className=" ">
                  <Link to="/home">           
                      <Button type="primary" onClick={submitBtn} className ="bouton">
                          Connecter
                      </Button>
                  </Link>
                  <div className="CreateAccount">
                <p>ou</p>
                <p>Créer un compte</p>
            </div>
            </div>
                    
              </div>
              <div className="frame5">
                    <p className="textemail" >Mot de passe</p>
                    <div>
                      <input type="password" placeholder="Mot de passe" className="inputmail" />
                    </div>
              </div>
              <div className="mdpoublie">
                <p>Mot de passe oublier ?</p>
                </div>
              </div> 
                                                     
        </div>
          
        </div>  
      </>
    //     <>
    //   <section className="h-100 gradient-form sizimg2">
    //     <div className="container py-5 h-100">
    //       <div className="row d-flex justify-content-center align-items-center h-100">
    //         <div className="col-xl-10">
    //           <div className="card rounded-3 text-black">
    //             <div className="row g-0">
    //               <div className="col-lg-6">
    //                 <div className="card-body p-md-5 mx-md-4">

    //                   <div className="text-center">
    //                     {/* <img src={hei}
    //                       alt="logo" className=' sizimg'/>
    //                     <h4 className="mt-1 mb-5 pb-1">{"Se connecter"}</h4>
    //                   </div> */}

    //                   <Form>

    //                     <Form.Group className="form-outline mb-4">

    //                       <Form.Control 
    //                         className="form-control"
    //                         name="username"  type="text" 
    //                         placeholder="Entrer l'Identifiant"  
    //                         value={username} 
    //                         onChange={(e)=>{setUsername(e.target.value)} }
    //                       />
    //                       <Form.Label className="form-label" 
    //                           htmlFor="username" 
    //                       >Identifiant</Form.Label>
    //                     </Form.Group>

    //                     <Form.Group className="form-outline mb-4">

    //                       <Form.Control 
    //                         name="password"  type="password" 
    //                         placeholder="Entrer le Mot de passe" 
    //                         value={password} 
    //                         onChange={(e)=>{setPassword(e.target.value)}}
    //                         className="form-control" />
    //                       <Form.Label className="form-label" 
    //                           htmlFor="password" 
    //                         >Mot de passe: </Form.Label>
    //                       </Form.Group>
    //                     <Form.Group className="text-center pt-1 mb-5 pb-1">
    //                       <Button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button"  onClick={(e)=>{functionLog(username, password)}}>CONNEXION</Button>
    //                     </Form.Group>

    //                   </Form>

    //                   <Form>

    //                     <Form.Group className="form-outline mb-4">

    //                       <Form.Control 
    //                         className="form-control"
    //                         name="token"  type="text" 
    //                         placeholder="Entrer l'Identifiant"  
    //                         value={token} 
    //                         onChange={(e)=>{setToken(e.target.value)} }
    //                       />
    //                       <Form.Label className="form-label" 
    //                           htmlFor="token" 
    //                       >Token</Form.Label>
    //                     </Form.Group>

    //                     <Form.Group className="text-center pt-1 mb-5 pb-1">
    //                       <Button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button"  
    //                       onClick={(e)=>{functionLogToken()}}>
    //                         CONNEXION AVEC TOKEN
    //                         </Button>
    //                     </Form.Group>

    //                   </Form>

    //                 </div>
    //               </div>
    //               <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
    //                 <div className="text-white px-3 py-4 p-md-5 mx-md-4">
    //                   <h4 className="mb-4">0 Vulnérabilité</h4>
    //                   <p className="small mb-0">
    //                   Crashtest nous scanne, mais ne trouve rien !
    //                   </p>
    //                   <h3 className="small mb-0">
    //                   {". "}
    //                   </h3>
    //                   <h4 className="mb-4">250,000,000 Utilisateurs</h4>
    //                   <p className="small mb-0">
    //                   Onboarder tout Madagascar ? Dix fois sans problème.
    //                   </p>
    //                   <h3 className="small mb-0">
    //                   {". "}
    //                   </h3>

    //                   <h4 className="mb-4">1 Seconde</h4>
    //                   <p className="small mb-0">
    //                   Pire réponse de notre API au percentile 97.
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
    )
}
