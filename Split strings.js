function solution($str){
    let $arr = [];
    for(let $i = 0; $i < $str.length; $i+=2){
      let $value = $str.substr($i, 2);
      if($value.length == 1){
        $value += '_';
      }
      $arr.push($value);
    }
    return $arr;
  }