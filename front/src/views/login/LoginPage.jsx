
import { CCard} from "@coreui/react";
import {UnderscoreBox,UnderscoreInupt} from '../../css/inputs/inputs'
import{ NoneBorderButton, DarkBigSizeButton} from '../../css/buttons/buttons'
import { useEffect, useRef, useState } from "react";
import {DialogMui} from '../../components/alert/Dialogs'
import {LoginApi} from '../../services/managerApi/managerApi'
import {saveJWT } from "../../utils/CookiesHandler";
import { useNavigate } from "react-router-dom";
import {activeEnter} from '../../utils/KeyboardUtils'
import { loginText } from "../../assets/TextResources/TextResources";
const LoginPage = ()=>{
    const [openErrorDialog, setOpenErrorDialog] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const idRef = useRef("");
    const pwRef = useRef("");
    const navigate = useNavigate();
    

    const login = () => {
        let id = idRef.current.value;
        let pw = pwRef.current.value;
        if (id === "") {
          setErrorMessage(loginText.idConfirm);
          setOpenErrorDialog(true);
        } else if (pw === "") {
          setErrorMessage(loginText.pwConfirm);
          setOpenErrorDialog(true);
        } else {
          LoginApi(id, pw).then(response =>{
            if(response.data.statusCode !== 200) {
              alert(response.data.message);
            }else {
              saveJWT(response.data.token);
            }
            return response
          }).then(response => {
            if(response.data.statusCode === 200) {
              navigate('/');
            }
          })
              }
      };
    return(
        <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center justify-content-center">
              <CCard className="p-3 d-flex flex-row align-items-center justify-content-center" style={{borderRadius : '12px',width:"430px"}}>
                  <form className="text-center" style={{width:"300px"}}>
                    <div className="fw-bold text-center" style={{marginBottom:"50px", fontSize:"18px"}}>로그인</div>
                    <UnderscoreBox style={{marginBottom:"20px"}}><span>ID : </span>
                    <UnderscoreInupt type="text" style={{width:"215px"}} ref={idRef}  onKeyDown={(e) => activeEnter(e,login)} autoComplete="username"/>
                    </UnderscoreBox>
                    <UnderscoreBox style={{marginBottom:"50px"}}><span>PW : </span>
                    <UnderscoreInupt type="password" style={{width:"215px"}}  ref={pwRef} onKeyDown={(e) => activeEnter(e,login)}  autoComplete="current-password" />
                    </UnderscoreBox>
                    <div style={{margin: "10px 0px"}}>
                    <DarkBigSizeButton type="button" onClick={login}>로그인</DarkBigSizeButton>
                    </div>
                  </form>
              </CCard>
              <DialogMui isOpen ={openErrorDialog} setIsOpen={setOpenErrorDialog} message={errorMessage} title={loginText.title}/>
             {/* <EditPWModal isOpen={isOpenPWModal} setIsOpen={setIsOpenPWModal}/>     */}
        </div>
    )
}

export default LoginPage;