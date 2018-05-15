let fs = require('fs');
let dir = '/Users/sarav/Downloads/Music/Hindi Songs';
fs.readdir(dir, function(err, filenames) {
    if (err) {
        onError(err);
        return;
    }
    filenames.forEach(function(filename) {
        let len = filename.indexOf('- www.downloadming.com');
        if(len == -1){
            len = filename.indexOf('.mp3');
        }
        let newname = filename.substring(0,len);
        fs.rename(dir+'/'+filename, dir+'/'+newname.trim()+'.mp3', function (err) {
            if (err) throw err;
            console.log('renamed complete');
          });
    });
});
