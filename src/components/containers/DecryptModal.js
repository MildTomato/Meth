import React from "react";
import Modal from "react-modal";
import { decrypt } from "../../lib/encryption";

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
          <h2>Decrypt</h2>
          {!isLoading ? (
            <div>
            <button
              onClick={() => onClose()}
              className="button expanded secondary"
            >
              Cancel
            </button>
              <button
                onClick={() => this._onDecryptClick()}
                className="button expanded secondary"
              >
                Decrypt
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
      let decrypted = await decrypt();
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