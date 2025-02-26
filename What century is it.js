function whatCentury($year)
{
  $century = Math.floor((parseInt($year) + 99) / 100)
  if($century % 10 == 1 && $century != 11){
    return `${$century}st`;
  }else if($century % 10 == 2 && $century != 12){
    return `${$century}nd`;
  }else if($century % 10 == 3 && $century != 13){
    return `${$century}rd`;
  }else {
    return `${$century}th`;
  }
}