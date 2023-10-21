
import { InvalidReponseCode } from "./InvalidReponseCode";

export class DeprecatedResponseError extends InvalidReponseCode{
    constructor(rc: number){
        super(rc);
    }
}