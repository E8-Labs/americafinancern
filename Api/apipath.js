const BasePath = "http://178.16.143.212:8002/";

const Apis = {
    ApiUserStatus :`${BasePath}api/users/get_profile`,
    ApiLogin: `${BasePath}api/users/login`,
    ApiRegister: `${BasePath}api/users/register`,
    ApiRequestLoan: `${BasePath}api/loans/request_loan`,
    ApiApproveLoan: `${BasePath}api/loans/approve_loan`,
    ApiExchangePublicToken: `${BasePath}api/plaid/exchange_public_token`,
    ApiCreateLinkToken: `${BasePath}api/plaid/create_link_token`,
    ApiExchangePublicToken: `${BasePath}api/plaid/exchange_public_token`,
    ApiIdentityUpdated: `${BasePath}api/users/identity_updated`,
    ApiAddHouse:`${BasePath}api/houses/add_house`,
    ApiGetHouseList:`${BasePath}api/houses/get_houses_list`,
    ApiGetUserLoans:`${BasePath}api/loans/get_user_loans?offset=0`,
    ApiUpdateProfile:`${BasePath}api/users/update_profile`,
    ApiGetLoanCalculations:`${BasePath}api/loans/get_loan_calculations`,
    ApiAddDebt:`${BasePath}api/loans/add_debt`,
    ApiGetDebt:`${BasePath}api/loans/get_debts_list`,
    ApiLiabilities:`${BasePath}api/plaid/liabilities`
}

export default Apis;