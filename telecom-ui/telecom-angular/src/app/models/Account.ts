import Plan from "./Plan";

class Account{
    account_id!: number;
    log_in_email! : string;
    log_in_pass_word! : string;
    accessToken! : string;
    plan! : Plan[];
}
export default Account;