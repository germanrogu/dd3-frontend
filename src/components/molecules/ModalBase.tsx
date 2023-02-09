import { Button, Modal } from "antd";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  showModal: boolean;
  hideModal: () => void;
  buttonText: string;
}

export const ModalBase = ({
  buttonText,
  title,
  children,
  showModal,
  hideModal,
}: Props) => {
  return (
    <>
      <Modal
        open={showModal}
        onCancel={hideModal}
        cancelButtonProps={{ style: { display: "none" } }}
        footer={[
          <div className="flex justify-center">
            <Button
              style={{
                backgroundColor: "#6AAA64",
                width: "200px",
                fontWeight: "bold",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key="open"
              type="primary"
              onClick={hideModal}
            >
              {buttonText}
            </Button>
          </div>,
        ]}
        centered
        width={450}
      >
        <div>
          <div className="text-center">
            <h3 className="text-lg font-bold leading-6 text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <div className="mt-2">{children}</div>
          </div>
        </div>
      </Modal>
    </>
  );
};
