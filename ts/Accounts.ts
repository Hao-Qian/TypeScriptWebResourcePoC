namespace Account {
    export function getClientUrl() {
        var url = Xrm.Page.context.getClientUrl();
        alert(url);
    }
}