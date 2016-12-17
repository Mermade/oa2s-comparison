# oa2s-comparison

A comparison of various [OpenApi](https://www.openapis.org/specification/repo)(Swagger)-to-[Slate](https://github.com/lord/slate) markdown tools.

Currently compared are:

* [OpenApi2Slate](https://github.com/scrive/openapi2slate)
* [swagger-to-slate](https://github.com/lavkumarv/swagger-to-slate)
* [widdershins](https://github.com/mermade/widdershins)

Disclaimer: the author of this repository and the blog post discussing the comparison is also the author of widdershins, and [shins](https://github.com/mermade/shins), the Node.js port of Slate used here to connvert each tool's Slate markdown into HTML.

## Notes

Because `shins` uses [markdown-it](https://github.com/markdown-it/markdown-it) as it's markdown processor, there may be differences in the rendered HTML compared to that produced by Ruby Slate.

## TODO

* Add PHP [swagger2slate](https://github.com/E96/swagger2slate)
