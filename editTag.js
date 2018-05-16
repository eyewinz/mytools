const taglib = require('taglib2')
let tags;
let fs = require('fs');

let dir = '/Users/sarav/Downloads/Music/Devotional/Songs';
// fs.readdir(dir, function(err, filenames) {
//     if (err) {
//         onError(err);
//         return;
//     }
//     filenames.forEach(function(filename) {
//         let fullfile = dir+'/'+filename;
//         console.log(fullfile);
//         console.log("---------------------------------------");
//         tags = taglib.readTagsSync(fullfile);
//         console.log(tags);
//         console.log("------------------XX-------------------");
//     });

// });

fs.readdir(dir, function(err, filenames) {
    if (err) {
        onError(err);
        return;
    }
    let props = {
        album: 'Devotional',
        artist: 'Songs'
      }

    filenames.forEach(function(filename) {
        let fullfile = dir+'/'+filename;
        console.log(fullfile);
        console.log("---------------------------------------");
        taglib.writeTagsSync(fullfile, props)
        tags = taglib.readTagsSync(fullfile);
        console.log(tags);
        console.log("------------------XX-------------------");
    });

});



// const taglib = require('taglib2')
// const mime = require('node-mime')
// const fs = require('fs')
 
// const props = {
//   artist: 'Howlin\' Wolf',
//   title: 'Evil is goin\' on',
//   album: 'Smokestack Lightnin\'',
//   comment: 'Chess Master Series',
//   genre: 'blues',
//   year: 1951,
//   track: 3,
//   tracknumber: '1/1',
//   discnumber: '1/1',
//   pictures: [
//     {
//       "mimetype": mime('./cover.jpg'),
//       "picture": fs.readFileSync('./cover.jpg')
//     } 
//   ],
// }
 
// taglib.writeTagsSync('./file.mp3', props)
