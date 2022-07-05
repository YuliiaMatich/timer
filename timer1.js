let time = process.argv.slice(2);
let timer = function (time) {
  if (time.length === 0) {
    throw Error ("no value was provided");
  }
  for (let i = 0; i < time.length; i++) {
    const param = Number(time[i]);
    if (param > 0 && !isNaN(param)) {
      setTimeout(() => {
        process.stdout.write('beep');
      }, param * 1000)
    }
  }
}
timer(time);



