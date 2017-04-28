function converter(num) {
  const outputs = ["._.\n|.|\n|_|", "...\n..|\n..|", "._.\n._|\n|_.", "._.\n._|\n._|", "...\n|_|\n..|", "._.\n|_.\n._|", "._.\n|_.\n|_|", "._.\n..|\n..|", "._.\n|_|\n|_|", "._.\n|_|\n..|"];
  let output = "";

  if(num < 10) {
    return outputs[num];
  } else {
    num = num.toString();
    num = num.split('').map(Number);

    for(let i = 0; i < 9; i += 4) {
      for(let j = 0; j < num.length; j++) {
        output += outputs[num[j]].substr(i,3);
      }
      if (i < 8) {
        output += "\n";
      }
    }
    // output = output.substr(0, output.length - 1); // either this or the if statement works
    return output;
  }
}


module.exports = converter;
