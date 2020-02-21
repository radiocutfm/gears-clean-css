var CleanCSS = require('clean-css'),
    source = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
  source += chunk;
});

process.stdin.on('end', function() {
  process.stdout.write(new CleanCSS({}).minify(source).styles);
});
