import { store } from "react-notifications-component";

const NOTIFICATION_DURATION = 3000;

export const addErrorNotification = (title: string, errorMessage?: string) => {
    // Sentry.captureMessage(`${title}: ${errorMessage}`); TODO: add sentry in future

    return store.addNotification({
        title,
        message: errorMessage,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: NOTIFICATION_DURATION,
            onScreen: true,
        },
    });
};
