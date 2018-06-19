let fs = require('fs');
let dir = '/Users/sarav/Desktop/Papa2';
fs.readdir(dir, function(err, filenames) {
    if (err) {
        onError(err);
        return;
    }
    let i=1;
    filenames.forEach(function(filename) {
        //let len = filename.indexOf('- www.downloadming.com');
        //let len = filename.indexOf('- DownloadMing.SE');
        
        // if(len == -1){
        //     len = filename.indexOf('.mp3');
        // }
        let newname = `papa${i++}.jpg`;
        // newname = newname.replace(/-+/g, ' ');
        // newname = newname.replace(/\s+/g, ' ');
        fs.rename(dir+'/'+filename, dir+'/'+newname, function (err) {
            if (err) throw err;
            console.log('renamed complete');
          });
    });
});
