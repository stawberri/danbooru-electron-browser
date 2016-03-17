var Danbooru = require('danbooru');

    var imgnum = 1;
  Danbooru.search(tag.value, function(err, data) {
    if(err) throw err;
    data.forEach(function(data) {
        var i = ("https://danbooru.donmai.us" + data.preview_file_url);
        var u = ("https://danbooru.donmai.us" + data.large_file_url);
        var y = ("https://danbooru.donmai.us/posts/" + data.id);
        var nourl = data.preview_file_url;
        if (nourl !== undefined) {
            document.getElementById("imageid" + imgnum.toString()).src = i;
            document.getElementById("imageid" + imgnum.toString()).alt = u;
            document.getElementById("imageid" + imgnum.toString()).name = y;
            ++imgnum;
        }
    }, this); 
});