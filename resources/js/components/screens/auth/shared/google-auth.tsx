import { Button } from "@/components/ui/button";

import { googleIcon } from "@/lib/assets";

export const GoogleAuth = () => {
    return (
        <Button
            variant="outline"
            size="lg"
            className="flex-1 hover:underline"
            nativeButton={false}
            render={<a href="#" />}
        >
            <img src={googleIcon} alt="" className="size-5" />
            Google
        </Button>
    );
};
