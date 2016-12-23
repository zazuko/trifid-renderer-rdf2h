# trifid-renderer-rdf2h

A RDF2h renderer for Trifid.
To inject the graph into the response HTML, Mustache is used to render the HTML template.

## Usage

Only the `template` options must be provided.
The `renderer` prefix can be used to point to files in the `trifid-renderer-rdf2h` package folder. 

## Example

The following example tells Trifid to use the `trifid-renderer-rdf2h` renderer and points to the default template: 

```
"renderer": {
  "module": "trifid-renderer-rdf2h",
  "template": "renderer:templates/index.html"
}
```
