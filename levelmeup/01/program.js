function program(x,y){
  console.log('ALL YOUR',x,'ARE BELONG TO',y);
}
// module.exports = program;
program(process.argv[2],process.argv[3]);

// solution used %s. interesting
// console.log( 'ALL YOUR %s ARE BELONG TO %s', process.argv[2],
//                                              process.argv[3]);
