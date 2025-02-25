function domainName($url){
    while(true){
      if($url.startsWith('www.')){
        $url = $url.substr(4, $url.length);
        continue;
      }
      if($url.startsWith('http://')){
        $url = $url.substr(7, $url.length);
        continue;
      }
      if($url.startsWith('https://')){
        $url = $url.substr(8, $url.length);
        continue;
      }
      break;
    }
    console.log($url);
    if($url.includes('.') && $url.includes('/')){
      $u1 = $url.indexOf('.');
      $u2 = $url.indexOf('/');
      return $u1 < $u2 ? $url.slice(0, $u1): $url.slice(0, $u2);
    }else if($url.includes('.')){
      return $url.slice(0, $url.indexOf('.'));
    }else if($url.includes('/')){
      return $url.slice(0, $url.indexOf('/'));
    }else{
      return $url;
    }
  }