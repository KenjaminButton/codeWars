// Extract the domain name from a URL
function domainName(url){
  /*
  let domainName = new URL(url)
  //   let newThing = domainName.split('.')
  let rootDomainName = domainName.host.split('.')[0]
  //   console.log(rootDomainName)
  return rootDomainName
  */  

  if (url.startsWith('http://www')) {
    const split1 = url.split('.')
    return split1[1]
  } else if (url.startsWith('https://www')) {
    const split1 = url.split('.')
    return split1[1]
  } else if (url.startsWith('http://')) {
    const split1 = url.split('//')
    const split2 = split1[1].split('.')
    // console.log(split2)
    return split2[0]
  } else if (url.startsWith('https://')) {
    const split1 = url.split('//')
    const split2 = split1[1].split('.')
    return split2[0]
  } else if (url.startsWith('www')) {
    const split1 = url.split('.')
    return split1[1]
  } else {
    const split1 = url.split('.')
    return split1[0]
  }

}

/*
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

/*
assert.equal(domainName("http://google.com"), "google");
assert.equal(domainName("http://google.co.jp"), "google");
assert.equal(domainName("www.xakep.ru"), "xakep");
assert.equal(domainName("https://youtube.com"), "youtube");
*/

console.log(domainName('http://github.com/carbonfive/raygun'))
console.log(domainName('http://www.zombie-bites.com'))
console.log(domainName('https://www.cnet.com'))

console.log(domainName('http://google.com'))
console.log(domainName('https://google.co.jp'))
console.log(domainName('www.xakep.ru'))
console.log(domainName('https://youtube.com'))

console.log(domainName('ff-ak4gy0lc5twzqhfwis9pl2xh7y.us/archive/'))
console.log(domainName('4uelbz-ki.jp'))
