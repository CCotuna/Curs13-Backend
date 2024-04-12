//importam http din node
import http from "http";
//serverul local
const hostname = "0.0.0.0";
//portul setat din docker, dar daca schimb trebuie schimbat si aici
const port = 3000;
//varabila server, care deschide un "listen" care ramane deschis tot timpu
//in momentul cand "asculta" ceva, intra pe listen si pregateste un response cu statusCode
const server = http.createServer((req, res) => {
  // console.log("HEADERS", req.rawHeaders)
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/plain");

  // din partea de backend trimit pe client din json
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200, headers);
  //welcome -> cheie, hello world -> continut
  //   res.end('{"welcome": "Hello World"}');
  res.end(
    '[{"id":"e03fa61c-bab5-46d2-bba3-9e040dc671f6","name":"abceddddddddd2323","favorite":true},{"id":"afac3455-1394-4682-ab12-19ba2bd523e8","name":"task 3","favorite":false}]'
  );
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
