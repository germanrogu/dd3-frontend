import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import React, { createContext, useContext, useState } from "react";

interface NotificationContextProps {
  message: string | null;
  openNotification: (placement: NotificationPlacement) => void;
}

export const NotificationContext =
  createContext<NotificationContextProps | null>({
    message: null,
    openNotification: () => null,
  });

export const useNotifications = () => useContext(NotificationContext);

type Props = {
  children?: React.ReactNode;
};

export const NotificationProvider = ({ children }: Props) => {
  const [message, setMessage] = useState<string | null>(null);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement): void => {
    api.info({
      message: `Notification ${placement}`,
      description: message,
      placement,
    });
  };

  // const [status, setStatus] = useState<AlertStatus>('success')

  // const [isVisible, setIsVisible] = useState(false)

  // const show = useCallback(
  //   (showStatus: AlertStatus, newMessage: string, options?: ShowOptions) => {
  //     const {
  //       delayMs = 0,
  //       persist,
  //       onClose,
  //       durationMs = ALERT_TIME_MS,
  //     } = options || {}

  //     setTimeout(() => {
  //       setStatus(showStatus)
  //       setMessage(newMessage)
  //       setIsVisible(true)

  //       if (!persist) {
  //         setTimeout(() => {
  //           setIsVisible(false)
  //           if (onClose) {
  //             onClose()
  //           }
  //         }, durationMs)
  //       }
  //     }, delayMs)
  //   },
  //   [setStatus, setMessage, setIsVisible]
  // )

  // const showError = useCallback(
  //   (newMessage: string, options?: ShowOptions) => {
  //     show('error', newMessage, options)
  //   },
  //   [show]
  // )

  // const showSuccess = useCallback(
  //   (newMessage: string, options?: ShowOptions) => {
  //     show('success', newMessage, options)
  //   },
  //   [show]
  // )

  return (
    <NotificationContext.Provider
      value={{
        message,
        openNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
