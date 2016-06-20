export = function (obj: { dom: { id: string }, remote: { domain: string, channel: string, token: string } }) {

    let domnode = document.getElementById(obj.dom.id);


    domnode.innerHTML = "play!"

}