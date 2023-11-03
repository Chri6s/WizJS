export default class WizProtocol {
    constructor(this, on_response, on_error) {
        this.transport = None;
        this.on_response = on_response;
        this.on_error = on_error
    }
    datagram_received(this, data, addr) {
        if (typeof(data) != Number) { console.log("data is not bytes"); return};
        this.onresponse(data, addr);
    }
    error_received(this, ex) {
        console.log(`WizProtocol error: ${ex}`);
        if (this.on_error != (null || undefined)) this.on_error(ex);
    }
    connection_lost(this, ex) {
        console.log(`WizProtocol connection lost: ${ex}`);
    }
}
