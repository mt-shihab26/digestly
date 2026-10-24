import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemSeparator,
    ItemTitle,
} from "@/components/ui/item";

import type { TOnboardingForm } from "@/types/forms";

import { firstErrorFor, toggleArrayItem } from "@/lib/utils";

import { FieldError } from "@/components/ui/field";
import { Toggle } from "@/components/ui/toggle";
import { Link } from "@inertiajs/react";
import { Fragment } from "react";
import { StepHeading } from "@/components/screens/app/onboarding/step-heading";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export type TFeed = {
    id: string;
    name: string;
    domain: string;
    frequency: string;
};

export const FeedsStep = ({
    form,
    feeds,
}: {
    form: TOnboardingForm;
    feeds: TFeed[];
}) => {
    return (
        <div className="space-y-4">
            <StepHeading
                title="Follow a few feeds"
                description="Recommended for your interests. You can always change this later."
            />
            <ItemGroup>
                {feeds.map((feed, index) => (
                    <Fragment key={feed.id}>
                        {index > 0 && <ItemSeparator />}
                        <Item className="px-0">
                            <ItemMedia>
                                <Avatar className="size-10 rounded-xl">
                                    <AvatarFallback className="rounded-xl bg-linear-to-br from-indigo-400 to-purple-500 text-sm font-bold text-white">
                                        {feed.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                                <ItemTitle className="truncate">
                                    {feed.name}
                                </ItemTitle>
                                <ItemDescription className="truncate">
                                    {feed.domain} · {feed.frequency}
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Toggle
                                    variant="outline"
                                    size="sm"
                                    className="data-pressed:border-primary data-pressed:bg-primary data-pressed:text-primary-foreground"
                                    pressed={form.data.feeds.includes(feed.id)}
                                    onPressedChange={() =>
                                        form.setData(
                                            "feeds",
                                            toggleArrayItem(
                                                form.data.feeds,
                                                feed.id,
                                            ),
                                        )
                                    }
                                >
                                    {form.data.feeds.includes(feed.id)
                                        ? "Following"
                                        : "Follow"}
                                </Toggle>
                            </ItemActions>
                        </Item>
                    </Fragment>
                ))}
            </ItemGroup>
            <FieldError>{firstErrorFor(form.errors, "feeds")}</FieldError>
            <p className="text-sm text-muted-foreground">
                Already have a list?{" "}
                <Link
                    href={route("app.data.edit")}
                    className="font-medium text-primary hover:underline"
                >
                    Import an OPML file
                </Link>
                .
            </p>
        </div>
    );
};
