/**
 * Created by GennadySX on @2020
 */
import Controller from '@controllers/Controller';
import User from '@models/User';
import Tokens from '@models/Tokens';


export default class UserController extends Controller {
    User: any;

    constructor() {
        super(new User());
        this.User = new User()
    }

   


  






}