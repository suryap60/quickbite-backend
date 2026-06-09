import dns from "dns/promises";

try {
  const records = await dns.resolveSrv(
    "_mongodb._tcp.ecommerce.9nra8bz.mongodb.net"
  );

  console.log(records);
} catch (err) {
  console.error(err);
}
