import { useState } from "react";

const useAlert = () => {

    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({
        message: "",

        // Tipo de 4severity: critical | error | warning | info | debug
        severity: "",
    });

    const handleAlert = (newAlert) => {
        setAlert(newAlert);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setAlert({
            message: "",
            severity: "",
        });
    }

    return { open, alert, handleAlert, handleClose };
}

export default useAlert;