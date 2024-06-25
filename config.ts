const config = {
    hostip: {
        endpoint: process.env.TUNNEL_ENDPOINT || "service.tunnelmole.com",
        httpEndpoint: process.env.TUNNEL_HTTP_ENDPOINT || "80",
        upstream: process.env.TUNNEL_UPSTREAM || "localhost",
    },
    runtime: {
        enableLogging: true
    }
}

export default config;
