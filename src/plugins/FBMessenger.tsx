import { onCleanup, onMount } from "solid-js";

type Props = {
    xfbml?: boolean,
    version?: string,
    page_id: string,
    attribution?: string,
    className?: string,
}

export default function FBMessengers(props: Props) {
    const { xfbml = true, version = 'v18.0' } = props;

    onMount(() => {

        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        document.body.appendChild(script);

        //@ts-ignore
        window.fbAsyncInit = function () {
            //@ts-ignore
            FB.init({
                xfbml,
                version
            });
        };

        onCleanup(() => {
            //@ts-ignore
            window.fbAsyncInit = null;

            document.removeChild(script);
        })

    })

    return (
        <>
            <div id="fb-root"></div>
            <div ref={(elm) => {
                elm.setAttribute('page_id', '102783358643262');
                elm.setAttribute('attribution', 'biz_inbox')
            }} id="fb-customer-chat" class="fb-customerchat">
            </div>
        </>
    )
}
