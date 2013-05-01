Package.describe({
    summary: "A fast simplex noise implementation in Javascript."
});

Npm.depends({"simplex-noise": "2.1.1"});

Package.on_use(function (api) {
    api.add_files("simplex-noise.js", "server");
});
