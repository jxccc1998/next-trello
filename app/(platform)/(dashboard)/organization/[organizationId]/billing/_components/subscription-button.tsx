"use strict";

import {Button} from "@/components/ui/button";
import {useAction} from "@/hooks/use-action";
import {stripeRedirect} from "@/actions/stripe-redirect";
import {toast} from "sonner";
import {useProModal} from "@/hooks/use-pro-modal";

interface SubscriptionButton {
    isPro: boolean
}

export const SubscriptionButton = (
    {
        isPro
    }: SubscriptionButton
) => {
    const proModal = useProModal()
    const {execute, isLoading} = useAction(stripeRedirect, {
        onSuccess: data => {
            window.location.href = data;
        },
        onError: error => {
            toast.error(error);
        }
    })

    const onClick = () => {
        if (isPro) {
            execute({})
        } else {
            proModal.onOpen()
        }
    }

    return <Button
        variant="primary"
        disabled={isLoading}
        onClick={onClick}
    >
        {
            isPro ? "Manage subscription" : "Upgrade to pro"
        }
    </Button>
}