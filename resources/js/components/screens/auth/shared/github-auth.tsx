import { Button } from "@/components/ui/button";

import githubIcon from "@/assets/icons/github-icon.svg";

export const GithubAuth = () => {
    return (
        <Button
            variant="outline"
            size="lg"
            className="flex-1"
            nativeButton={false}
            render={<a href="#" />}
        >
            <img src={githubIcon} alt="" className="size-5" />
            GitHub
        </Button>
    );
};
