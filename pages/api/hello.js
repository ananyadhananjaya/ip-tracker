// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    fetch("http://ip-api.com/json/223.226.21.15")
    .then((res)=>{
      console.log(res.json())
    })
    .catch((e)=>{
      console.log(e)
    })
  
}
