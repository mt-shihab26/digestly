{!! '<?xml version="1.0" encoding="UTF-8"?>' !!}
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>Digestly changelog</title>
        <link>{{ route("site.changelog.index") }}</link>
        <description>New features and improvements in Digestly.</description>
        <language>en</language>
        <atom:link href="{{ route("site.changelog.feed") }}" rel="self" type="application/rss+xml" />
@foreach ($entries as $entry)
        <item>
            <title>{{ $entry["title"] }}</title>
            <link>{{ route("site.changelog.index") }}#{{ $entry["slug"] }}</link>
            <guid isPermaLink="true">{{ route("site.changelog.index") }}#{{ $entry["slug"] }}</guid>
            <pubDate>{{ \Illuminate\Support\Carbon::parse($entry["date"])->toRssString() }}</pubDate>
            <description>{{ "<ul><li>".implode("</li><li>", array_map("e", $entry["changes"]))."</li></ul>" }}</description>
        </item>
@endforeach
    </channel>
</rss>
