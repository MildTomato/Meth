import React from "react";
import Modal from "react-modal";
import { verifyMock, decryptMock, hashMock } from "../../lib/encryption";

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

export class VerifyModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentState: "Verifying ...",
      isLoading: false
    };
  }
  render() {
    let { isLoading, currentState } = this.state;
    let { isOpen, productId, onClose } = this.props;

    return (
      <div style={{ position: "relative", zIndex: 99 }}>
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          contentLabel="Verify"
          style={localStyles}
        >
          <h2>Verify</h2>
          {!isLoading ? (
            <div>
            <button
              onClick={() => this._onDecryptClick()}
              className="button expanded"
            >
              Verify
            </button>
              <button
                onClick={() => onClose()}
                className="button expanded secondary"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <div>{currentState}</div>
              <button
                onClick={() => onClose()}
                className="button expanded secondary"
              >
                Cancel
              </button>
            </div>
          )}
        </Modal>
      </div>
    );
  }

  _onDecryptClick = async () => {
    let { onSuccess, onFail, originalHash } = this.props;
    let FAKE_HASH = "FAKE";
    try {
      // Decrypt the image
      let currentState = "Decrypting ...";
      this.setState({ isLoading: true, currentState });
      let decrypted = await decryptMock();

      // Hash the image
      currentState = `Hashing your image ...`;
      this.setState({ isLoading: true, currentState });
      let hash = await hashMock(decrypted);

      // Encrypt with new owner's pubkey
      currentState = `Verifying against the original hash ...`;
      this.setState({ isLoading: true, currentState });
      let verified = await verifyMock(FAKE_HASH, FAKE_HASH);

      // Uploading to to IPFS
      currentState = verified
        ? `Your image is correct!`
        : `Hmm.. this doesn't seem to match the original image`;
      this.setState({ isLoading: true, currentState });

      // Finally finished
      return onSuccess(verified);

    } catch (error) {
      console.error(error);
      return onFail(error);
    }
  };
}
