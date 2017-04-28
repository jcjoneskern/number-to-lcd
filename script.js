function converter(num) {
  const outputs = ["._.\n|.|\n|_|", "...\n..|\n..|", "._.\n._|\n|_.", "._.\n._|\n._|", "...\n|_|\n..|", "._.\n|_.\n._|", "._.\n|_.\n|_|", "._.\n..|\n..|", "._.\n|_|\n|_|", "._.\n|_|\n..|"];
  let output = "";


  if(num < 10) {
    return outputs[num];
  } else {
    //split the number into individual digits
    //pull info from the array based on those digits
    //cut and splice the numbers together
    //ie 1,2,3,1,2,3\n6,7,8,6,7,8\n11,12,13,11,12,13 for two digit numbers
    //return the spliced numbers

    num = num.toString();
    num = num.split('').map(Number);

    for(let i = 0; i < num.length; i++) {
      output += outputs[num[i]].substr(0,3);
    }
    output += "\n";

    for(let i = 0; i < num.length; i++) {
      output += outputs[num[i]].substr(4,3);
    }
    output += "\n";

    for(let i = 0; i < num.length; i++) {
      output += outputs[num[i]].substr(8,3);
    }

    return output;
  }


}


module.exports = converter;
