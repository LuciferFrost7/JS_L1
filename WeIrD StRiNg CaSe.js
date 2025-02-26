function toWeirdCase($str){
    let $newString = "";
    let $count = 0;
    for(let $i = 0; $i < $str.length; $i++){
      if($str[$i] != " "){
        if($count % 2 == 0){
          $newString += $str[$i].toUpperCase();
        }else{
          $newString += $str[$i].toLowerCase();
        }
        $count += 1;
      }else{
        $newString += " ";
        $count = 0;
      }
    }
    return $newString;
  }