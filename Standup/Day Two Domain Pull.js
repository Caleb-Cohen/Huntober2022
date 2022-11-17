function domainName(url){
    let urlSplit = url.replace("http://", "").replace("https://", "").replace("www.","").split(".")
    return urlSplit[0]
  }