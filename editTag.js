const taglib = require('taglib2')
let tags;
let fs = require('fs');

let dir = '/Users/sarav/Desktop/Ilangai\ Jeyaraj/Thirukkural';

fs.readdir(dir, function(err, filenames) {
    if (err) {
        console.log(err);
        return;
    }
    let props = {
        artist: '',
        albumartist: '',
        genre: '',
        composer: '',
        genre: '',
        comment: '',
        album: '',
        pictures: null
      }

    filenames.forEach(function(filename) {
        if(filename != '.DS_Store'){

            let fullFileName = dir+'/'+filename;
            console.log(fullFileName);
            tags = taglib.readTagsSync(fullFileName);


            let len = filename.indexOf('.mp3');
            let title = filename.substring(0,len);
            title = title.replace(/_+/g, ' ');
            title = title.replace(/\s+/g, ' ');
            props.title = title // Using filename as title

            console.log(tags);
            console.log("---------------------------------------");

            taglib.writeTagsSync(fullFileName, props)
        }
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
