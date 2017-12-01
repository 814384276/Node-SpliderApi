const express = require('express');
const http = require('http');
const app = express();
const router = express.Router();
//const routerConfig=require('./config/routes');
//const filter = require('./utils/filter_sign')


app.all('*', function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    next();
});

const index = require('./routes/web/index');
const photo_type = require('./routes/api/photo/photo_type');
const photo_list = require('./routes/api/photo/photo_list');
const photo_view = require('./routes/api/photo/photo_view');
//音樂
const plist = require('./routes/api/music/plist');
const plist_songs = require('./routes/api/music/plist_songs');
const rank_list = require('./routes/api/music/rank_list');
const rank_list_info = require('./routes/api/music/rank_list_info');
const song_info = require('./routes/api/music/song_info');
const song_lrc = require('./routes/api/music/song_lrc');
const new_songs = require('./routes/api/music/new_songs');
const singer_classify = require('./routes/api/music/singer_classify');
const singer_list = require('./routes/api/music/singer_list');
const singer_info = require('./routes/api/music/singer_info');
const music_search = require('./routes/api/music/search');


app.use('/', index);
app.use('/api/photo_type', photo_type);
app.use('/api/photo_list', photo_list);
app.use('/api/photo_view', photo_view);
app.use('/api/rank_list', rank_list);
app.use('/api/rank_list_info', rank_list_info);
app.use('/api/song_info', song_info);
app.use('/api/song_lrc', song_lrc);
app.use('/api/plist', plist);
app.use('/api/plist_songs', plist_songs);
app.use('/api/new_songs', new_songs);
app.use('/api/singer_classify', singer_classify);
app.use('/api/singer_list', singer_list);
app.use('/api/singer_info', singer_info);
app.use('/api/music_search', music_search);

app.use(router);
app.listen(3001);
console.log("app start success port:3001");


module.exports = app;