import { TextLink } from "@/components/elements/text-link";
import { Separator } from "@/components/ui/separator";

export const AuthFooter = ({
    text,
    linkLabel,
    href,
}: {
    text: string;
    linkLabel: string;
    href: string;
}) => {
    return (
        <div className="space-y-6">
            <Separator />
            <p className="text-center text-sm text-muted-foreground">
                {text} <TextLink href={href}>{linkLabel}</TextLink>
            </p>
        </div>
    );
};
