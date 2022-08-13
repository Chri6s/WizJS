export class WizLightError {
    constructor(Error) {
        this.WizLightError = () => {
            var error = new Error();
            error.message = "WizLightError";
            throw error;
        }
    }
}

export class Exception {
    constructor(WizLightError) {
        this.WizLightError = new WizLightError();
    }
    WizLightConnectionError(WizLightError) {
        var error = new Error();
        error.message = "WizLightConnectionError";
        throw error;
    }
    WizLightTimeOutError(WizLightError) {
        var error = new Error();
        error.message = "WizLightTimeOutError";
        throw error;
    }
    WizLightNotKnownBulb(WizLightError) {
        var error = new Error();
        error.message = "WizLightNotKnownBulb";
        throw error;
    }
    WizLightMethodNotFound(WizLightError) {
        var error = new Error();
        error.message = "WizLightMethodNotFound";
        throw error;
    }

}