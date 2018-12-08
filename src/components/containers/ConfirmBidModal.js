import React from "react";
import Modal from "react-modal";
import { decrypt, encrypt, upload } from "../../lib/encryption";

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

export class ConfirmBidModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentState: 'Decrypting ...',
      isLoading: false
    };
  }
  render() {
    let { isLoading, currentState } = this.state;
    let { isOpen, productId, onClose } = this.props;

    return (
      <div style={{ position: "relative", zIndex: 99 }}>
        <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Confirm Bid"
          style={localStyles}>
          <h2>Are you sure?</h2>
          {!isLoading ? (
            <div>
              <button
                onClick={() => onClose()}
                className="button expanded secondary"
              >
                Cancel
              </button>
              <button
                onClick={() => this._onConfirmBid()}
                className="button expanded secondary"
              >
                Accept
              </button>
            </div>
          ) : (
            <div>{currentState}.</div>
          )}
        </Modal>
      </div>
    );
  }

  _onConfirmBid = async (pubKey) => {
    let { onSuccess, onFail } = this.props;
    try {
      // Decrypt the image
      let currentState = 'Decrypting ...'
      this.setState({ isLoading: true, currentState });
      let decrypted = await decrypt();

      // Encrypt with new owner's pubkey
      currentState = `Encrypting with new owner's key ...`
      this.setState({ isLoading: true, currentState });
      let encrypted = await encrypt(decrypted, pubKey);

      // Uploading to to IPFS
      currentState = `Uploading encrypted file to IPFS ...`
      this.setState({ isLoading: true, currentState });
      let uploaded = await upload(encrypted);

      // Finally finished
      return onSuccess(uploaded);
    } catch (error) {
      console.error(error);
      return onFail(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
}