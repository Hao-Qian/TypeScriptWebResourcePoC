var Account;
(function (Account) {
    function getClientUrl() {
        var url = Xrm.Page.context.getClientUrl();
        alert(url);
    }
    Account.getClientUrl = getClientUrl;
})(Account || (Account = {}));
//# sourceMappingURL=Accounts.js.map