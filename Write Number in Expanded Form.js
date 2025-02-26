function expandedForm($num) {
    let $arr = [];
    let $n = 10;
    while($num * 10 >= $n){
      console.log($num % $n);
      let $value = ($num % $n) - ($num % ($n / 10));
      if($value != 0){
        $arr.unshift($value);
      }
      $n *= 10
    }
    return $arr.join(" + ");
  }