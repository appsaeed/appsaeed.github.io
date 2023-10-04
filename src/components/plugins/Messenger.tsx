import { onMount } from "solid-js";

export default function Messenger() {
    let fb_root;
    let chatbox: HTMLDivElement | undefined;

    onMount(() => {
        if (chatbox) {
            chatbox.setAttribute("page_id", "102783358643262");
            chatbox.setAttribute("attribution", "biz_inbox");
        }
        //@ts-ignore
        window.fbAsyncInit = function () {
            //@ts-ignore
            FB.init({
                xfbml: true,
                version: 'v18.0'
            });
        };

        (function (id) {
            const js = document.createElement('script');
            var fjs = document.getElementsByTagName('script')[0];
            if (document.getElementById(id)) return;
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode?.insertBefore(js, fjs);
        }('facebook-jssdk'));
    })
    return (
        <>
            <div ref={fb_root}></div>
            <div ref={chatbox}></div>
        </>
    )
}
