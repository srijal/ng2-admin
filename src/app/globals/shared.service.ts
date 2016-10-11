import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {UserInterface} from "../interface/user.interface";

@Injectable()
export class SharedService {

    /**
     * User ID, User Name, and token
     */
    public token:string = null;
    public SignInAs = null;
    public SocialSignUp: Boolean = false;

    public user: UserInterface;
}
