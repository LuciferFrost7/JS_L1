function wave($str){
    let $arr = [];
    for(let $i = 0; $i < $str.length; $i++){
      if($str[$i] != " "){
        $arr.push($str.slice(0, $i).toLowerCase() + $str[$i].toUpperCase() +  $str.slice($i + 1, $str.length).toLowerCase());
      }
    }
    return $arr;
  }