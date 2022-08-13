import dgram from 'node:dgram';
export default class Utils {
    hex_to_percent(hex) {
        return Math.round((parseFloat(hex) / 255) * 100);
    }
    percent_to_hex(perc) {
        return parseInt(Math.round((perc / 100) * 255));
    }
    to_wiz_json(dump_obj) {
        return JSON.stringify(dump_obj);
    }
    create_udp_broadcast_socket(listen_port) {
        let server = dgram.createSocket('udp4');
            server.setBroadcast = true;
            server.bind(listen_port);
        return server;
    }
    create_udp_socket(listen_port) {
        let server = dgram.createSocket('udp4');
            server.setBroadcast = false;
            server.bind(listen_port);
        return server;
    }
    generate_mac() {
        return "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
            return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
          });
    }
    get_source_ip(target_ip, target_port = 80) {
        var test_sock = dgram.createSocket("udp4"); 
        try {
            //Default port is 80, we need to specify one in order to test connect with target_ip
            test_sock.connect(target_port, target_ip);
            return toString(test_sock.address());
        } catch (Exception) {
            console.log(`The system could not auto detect the source ip for ${target_ip} on your operating system`)
            return 0; 
        } finally {
            test_sock.close();
        }
    }
}