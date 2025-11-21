const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("<b>JASMIN L. LURILLA</b><br>");
  res.write("<b>BSBA 4102</b><br>");
  res.write("FREELANCE MAKEUP ARTIST<br>");
  res.write("TIME IS GOLD. THAT'S WHY RESPECT MY TIME");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});