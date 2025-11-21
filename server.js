const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("JASMIN L. LURILLA ");
  res.write("BSBA 4102.");
   res.write("FREELANCE MAKEUP ARTIST");
   res.write("TIME IS GOLD. THATS WHY RESPECT MY TIME");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
