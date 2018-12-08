import React from "react";
import Modal from "react-modal";
import { decryptMock } from "../../lib/encryption";
import fox from "./../../metamask.png";

Modal.setAppElement("#root");
const localStyles = {
  content: {
    width: "360px",
    height: "600px",
    top: "20px",
    right: "20px",
    bottom: "auto",
    left: "auto",
    zIndex: 99
  }
};

export class DecryptModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  render() {
    let { isLoading } = this.state;
    let { isOpen, productId, onClose } = this.props;

    return (
      <div style={{ position: "relative", zIndex: 99 }}>
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          contentLabel="Decrypt"
          style={localStyles}
        >
          <img src={fox} width="96"/>
          <h3>Decrypt</h3>
          {!isLoading ? (
            <div>
              <button
                onClick={() => this._onDecryptClick()}
                className="button expanded"
              >
                Decrypt
              </button>
            <button
              onClick={() => onClose()}
              className="button expanded secondary"
            >
              Cancel
            </button>
            </div>
          ) : (
            <div>Decrypting ...</div>
          )}
        </Modal>
      </div>
    );
  }

  _onDecryptClick = async () => {
    let { onSuccess, onFail } = this.props;
    try {
      this.setState({ isLoading: true });
      let decrypted = await decryptMock();
      console.log("decrypted", decrypted);
      return onSuccess(decrypted);
    } catch (error) {
      console.error(error);
      return onFail(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
}
