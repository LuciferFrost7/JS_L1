function longest($arr, $n) {
    while($n){
      let $ind = null;
      let $value = "";
      for(let $i = 0; $i < $arr.length; $i++){
        if($arr[$i].length > $value.length){
          $ind = $i;
          $value = $arr[$i];
        }
      }
      var $out = $arr.splice($ind, 1)
      $n--;
    }
    return $out[0];
  }