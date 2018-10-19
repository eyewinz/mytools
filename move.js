const taglib = require('taglib2')
let tags;
var fs = require('fs')

// var oldPath = 'old/path/file.txt'
// var newPath = 'new/path/file.txt'

let dir = '/Users/sarav/Downloads/Music/Tamil/Tamil\ Songs';
let newdir = '/Users/sarav/Downloads/Music/Ani';

fs.readdir(dir, function(err, filenames) {
    if (err) {
        console.log(err);
        return;
    }

    filenames.forEach(function(filename) {
        if(filename != '.DS_Store'){

            let fullFileName = dir+'/'+filename;
            let newFileName = newdir+'/'+filename;
            //console.log(fullFileName);
            tags = taglib.readTagsSync(fullFileName);

            if((tags.artist && tags.artist.indexOf('Anirudh') >= 0) || 
                (tags.album && tags.album.indexOf('Anirudh') >= 0 ) ){
                console.log(tags);
                fs.rename(fullFileName, newFileName, function (err) {
                    if (err) throw err
                    console.log('Successfully renamed - AKA moved!')
                  })
            }

        }
    });

});