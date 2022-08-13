export default class WizProtocol {
    constructor(this, on_response, on_error) {
        this.transport = None;
        this.on_response = on_response;
        this.on_error = on_error
    }
    datagram_received(this, data, addr) {
        this.onresponse(data, addr);
    }
    error_received(this, ex) {
        console.log(`WizProtocol error: ${ex}`);
        if (this.on_error) this.on_error(ex);
    }
    connection_lost(this, ex) {
        console.log(`WizProtocol connection lost: ${ex}`);
    }
}