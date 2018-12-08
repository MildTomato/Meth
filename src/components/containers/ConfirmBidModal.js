import React from "react";
import Modal from "react-modal";
import { decryptMock, encryptMock, uploadMock } from "../../lib/encryption";
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
          <img src={fox} width="96"/>
          <h3>Are you sure?</h3>
          {!isLoading ? (
            <div>
              <button
                onClick={() => this._onConfirmBid()}
                className="button expanded"
              >
                Accept
              </button>
              <button
                onClick={() => onClose()}
                className="button expanded secondary"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>{currentState}</div>
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
      let decrypted = await decryptMock();

      // Encrypt with new owner's pubkey
      currentState = `Encrypting with new owner's key ...`
      this.setState({ isLoading: true, currentState });
      let encrypted = await encryptMock(decrypted, pubKey);

      // Uploading to to IPFS
      currentState = `Uploading encrypted file to IPFS ...`
      this.setState({ isLoading: true, currentState });
      let uploaded = await uploadMock(encrypted);

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
