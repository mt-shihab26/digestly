import { Button } from "@/components/ui/button";

import googleIcon from "@/assets/icons/google-icon.svg";

export const GoogleAuth = () => {
    return (
        <Button
            variant="outline"
            size="lg"
            className="flex-1"
            nativeButton={false}
            render={<a href="#" />}
        >
            <img src={googleIcon} alt="" className="size-5" />
            Google
        </Button>
    );
};
