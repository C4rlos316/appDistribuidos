import { Alert, Snackbar } from "@mui/material";

const BookNotifications = ({ open, alert, handleClose }) => {

    return (

        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>

            <Alert onClose={handleClose}
                severity={alert.severity}
                variant="filled">

                {alert.message}

            </Alert>

        </Snackbar>

    );

}

export default BookNotifications;