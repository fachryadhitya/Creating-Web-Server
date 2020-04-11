function getJodoh(request, response) {
  response.send("Cari jodoh dengan http " + request.method);
}
function setJodoh(request, response) {
  response.send("Cari jodoh dengan http " + request.method);
}
function updateJodoh(request, response) {
  response.send("Cari jodoh dengan http " + request.method);
}
function deleteJodoh(request, response) {
  response.send("Cari jodoh dengan http " + request.method);
}
module.exports = {
  getJodoh,
  setJodoh,
  updateJodoh,
  deleteJodoh
};
