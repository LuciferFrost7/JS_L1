function primeFactors($n){
    function Count($arr, $n){
      let $count = 0;
      for(let $i = 0; $i < $arr.length; $i++){
        if($arr[$i] == $n){
          $count++;
        }
      }
      return $count;
    }
    function toCompactForm($arr){
      let $result = "";
      new Set($arr).forEach(($val) => {$result += Count($arr, $val) > 1 ? `(${$val}**${Count($arr, $val)})`: `(${$val})`});
      return $result.replace('(1)', '');
    }
    let $i = 2;
    let $arr = [];
    while($n != 0){
      if(!($n % $i)){
        $arr.push($i);
        $n /= $i;
        $i = 2;
        continue;
      }
      $i++;
      if($n < $i){
        $arr.push($n);
        break;
      }
    }
    return toCompactForm($arr.sort((a, b) => a - b));
  }