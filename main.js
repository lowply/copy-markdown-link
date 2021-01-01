'use strict';

const fs = require('fs');
const { minify } = require('terser');
const ejs = require('ejs');

async function main() {
    const code = fs.readFileSync("src/bookmarklet.js", {encoding: "utf-8"});
    const minified = await minify(code, {warnings: true});
    ejs.renderFile("src/index.ejs", {src: encodeURI(minified.code)}, function(err, out){
        if (err != null) {
            console.log(err);
            return false;
        }
        fs.writeFileSync("docs/index.md", out, "utf8");
    })
}

main()
