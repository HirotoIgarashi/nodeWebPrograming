import { stat, writeFile } from 'node:fs';

// 関数の定義

const touchFile = ( fileName ) => {
  console.log(`${fileName}を作成します`); 
  writeFile( fileName, '', 'utf8', ( err ) => {
    if ( err ) {
      return console.log( err );
    }
    console.log( `${fileName}を作成しました` );
  });
};

// statsは統計という意味
const statsFile = ( fileName, callback ) => {
  stat( fileName, ( err, stats ) => {
    if ( err ) {
      if ( err.code === 'ENOENT' ) {
        console.log(`${fileName}というファイルはありません`);
        return callback();
      }
      return console.log('不明なエラーが発生しました');
    } 
    console.log(
      `${fileName}がみつかりました。サイズは${stats.size}バイトあります。`
    );
  });
};

// 関数の実行
statsFile( 'new.txt', () => {
  touchFile( 'new.txt' );
});

// testディレクトリの有無を確認する。
// testディレクトリがある場合はnew.txtファイルを作成して、
// testディレクトリがない場合はtestディレクトリを作成する。
