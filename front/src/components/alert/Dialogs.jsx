import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from "@mui/material";
  import PropTypes from "prop-types";


export const ActionDialogMui = ({isOpen,action, message, title})=>{
    return(
    <Dialog 
      open={isOpen}
      onClose={action}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      aria-hidden={isOpen ? "false" : "true"}
    >
      <DialogTitle id="alert-dialog-title" className="custom-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={action} color="primary">
          확인
        </Button>
      </DialogActions>
    </Dialog>
    )
}
export const DialogMui = ({isOpen,setIsOpen, message, title})=>{
  const handleCloseErrorDialog = () => {
      setIsOpen(prev => !prev)
    };

  return(
  <Dialog 
    open={isOpen}
    onClose={handleCloseErrorDialog}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    aria-hidden={isOpen ? "false" : "true"}
  >
    <DialogTitle id="alert-dialog-title" className="custom-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {message}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleCloseErrorDialog} color="primary">
        확인
      </Button>
    </DialogActions>
  </Dialog>
  )
}
export const DialogMui2 = ({isOpen,setIsOpen, message, title,clickEvent})=>{
  const handleCloseErrorDialog = () => {
      setIsOpen(prev => !prev)
    };

  return(
  <Dialog 
    open={isOpen}
    onClose={handleCloseErrorDialog}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    aria-hidden={isOpen ? "false" : "true"}>
    <DialogTitle id="alert-dialog-title" className="custom-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={clickEvent} color="primary">네</Button>
      <Button onClick={handleCloseErrorDialog} color="primary" autoFocus>
        아니오
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export const DialogMui3 = ({isOpen,setIsOpen, message, title,clickEvent})=>{
  const handleCloseErrorDialog = () => {
      setIsOpen(prev => !prev)
    };

  return(
  <Dialog 
    open={isOpen}
    onClose={handleCloseErrorDialog}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    aria-hidden={isOpen ? "false" : "true"}>
    <DialogTitle id="alert-dialog-title" className="custom-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description"style={{ whiteSpace: 'pre-wrap' }}>{message}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={clickEvent} color="primary">네</Button>
      <Button onClick={handleCloseErrorDialog} color="primary" autoFocus>
        아니오
      </Button>
    </DialogActions>
  </Dialog>
  )
}
DialogMui.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
  };

  ActionDialogMui.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    action: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
  };
  DialogMui2.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    clickEvent : PropTypes.func.isRequired,
  };
  DialogMui3.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    clickEvent : PropTypes.func.isRequired,
  };


