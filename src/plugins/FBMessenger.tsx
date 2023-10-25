import { onCleanup, onMount } from "solid-js";

type Props = {
    xfbml?: boolean,
    version?: string,
    page_id: string,
    attribution?: string,
    className?: string,
}

export default function FBMessengers(props: Props) {
    const { className = 'fb-customer-chat', attribution = 'biz_inbox', page_id, xfbml = true, version = 'v18.0' } = props;

    onMount(() => {

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        document.body.appendChild(script);

        onCleanup(() => {
            document.removeChild(script);
        })


        //@ts-ignore
        window.fbAsyncInit = function () {
            //@ts-ignore
            FB.init({
                xfbml,
                version
            });
        };


    })

    return (
        <>
            <div ref={(e) => {
                e.setAttribute('attribution', attribution);
                e.setAttribute('page_id', page_id)
            }} class={className}  >FBMessenger</div>
        </>
    )
}
