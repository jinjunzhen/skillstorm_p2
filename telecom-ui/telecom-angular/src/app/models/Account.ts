import Plan from "./Plan";

class Account{
    account_id!: number;
    log_in_email! : string;
    log_in_pass_word! : string
    plan! : Plan[];
}
export default Account;