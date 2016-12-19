# oa2s-comparison

A comparison of various [OpenApi](https://www.openapis.org/specification/repo)(Swagger)-to-[Slate](https://github.com/lord/slate) markdown tools.

Currently compared are:

* [OpenApi2Slate](https://github.com/scrive/openapi2slate)
* [swagger-to-slate](https://github.com/lavkumarv/swagger-to-slate)
* [swagger2slate](https://github.com/e96/swagger2slate)
* [widdershins](https://github.com/mermade/widdershins)

To see the output using each tool's defaults using the Swagger [petstore demo](), see [here](https://mermade.github.io/oa2s-comparison).

Disclaimer: the author of this repository and the blog post discussing the comparison is also the author of widdershins, and [shins](https://github.com/mermade/shins), the Node.js port of Slate used here to convert each tool's Slate markdown into HTML.

## Notes

Because `shins` uses [markdown-it](https://github.com/markdown-it/markdown-it) as it's markdown processor, there may be differences in the rendered HTML compared to that produced by Ruby Slate.

Each tool may be optimised for a particular Slate CSS theme. This is not taken into account here.

Only the example `petstore.json` has been used so far to compare each tool, which may not demonstrate all features to best effect.

## Related, but non-Slate-based tools

* [apidoc](https://github.com/owainlewis/apidoc/issues)
* [swagger2markup](https://github.com/Swagger2Markup/swagger2markup)
