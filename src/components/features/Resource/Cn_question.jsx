
import { useNavigate } from "react-router-dom";

const cnQuestions = [
  {
    question: "What is the OSI model? Explain its layers.",
    answer:
      "The OSI model divides network communication into 7 layers: " +
      "1. Physical: Deals with hardware transmission (cables, signals). " +
      "2. Data Link: Handles error-free transfer between devices on the same network. " +
      "3. Network: Manages routing of data packets between networks. " +
      "4. Transport: Provides reliable data transfer and error recovery. " +
      "5. Session: Controls connections between computers (start, manage, end). " +
      "6. Presentation: Translates data formats and encryption. " +
      "7. Application: Provides network services to user applications (like email, file transfer).",
  },
  {
    question: "What is the difference between TCP and UDP?",
    answer:
      "TCP (Transmission Control Protocol) is connection-oriented, meaning it establishes a connection before sending data and ensures data arrives correctly and in order. It is reliable but slower. " +
      "UDP (User Datagram Protocol) is connectionless, sends data without checking delivery, making it faster but less reliable. UDP is used in streaming or gaming where speed matters more than accuracy.",
  },
  {
    question: "What is a subnet mask?",
    answer:
      "A subnet mask separates an IP address into the network and host parts. It helps devices determine if another device is on the same local network or a different one. For example, 255.255.255.0 means the first three parts are the network, and the last part is the host.",
  },
  {
    question: "Explain the difference between IPv4 and IPv6.",
    answer:
      "IPv4 uses 32-bit addresses allowing about 4 billion unique IPs but is running out of addresses. IPv6 uses 128-bit addresses, allowing vastly more devices to connect to the internet. IPv6 also includes improvements like better security and simplified address management.",
  },
  {
    question: "What is ARP and how does it work?",
    answer:
      "Address Resolution Protocol (ARP) helps find the MAC address of a device when you only know its IP address, within the same local network. It sends a broadcast asking 'Who has this IP?' and the device with that IP replies with its MAC address.",
  },
  {
    question: "What is a MAC address?",
    answer:
      "A MAC (Media Access Control) address is a unique identifier assigned to a network interface card (NIC) for communication on the local network. It is hardware-based and helps identify devices on the same LAN.",
  },
  {
    question: "What is a firewall?",
    answer:
      "A firewall is a security system that monitors and controls incoming and outgoing network traffic based on set security rules. It helps protect networks from unauthorized access and threats.",
  },
  {
    question: "Explain the concept of DNS.",
    answer:
      "The Domain Name System (DNS) converts user-friendly domain names like 'google.com' into IP addresses like '172.217.0.46' so that computers can route your requests correctly over the internet.",
  },
  {
    question: "What is the difference between a hub, switch, and router?",
    answer:
      "A hub broadcasts data to all devices on a network, which is inefficient. A switch sends data only to the intended device using MAC addresses. A router connects different networks and forwards data packets between them, usually between LAN and the internet.",
  },
  {
    question: "What is congestion control?",
    answer:
      "Congestion control manages data traffic in networks to prevent overload, ensuring smooth data transmission by controlling the amount of data sent, avoiding packet loss and delays.",
  },
  {
    question: "What is NAT?",
    answer:
      "Network Address Translation (NAT) allows multiple devices on a private network to share a single public IP address when accessing the internet, helping conserve IP addresses and improve security.",
  },
  {
    question: "What is the three-way handshake in TCP?",
    answer:
      "The three-way handshake is how TCP establishes a reliable connection: " +
      "1. Client sends SYN (synchronize) to server. " +
      "2. Server responds with SYN-ACK (acknowledge). " +
      "3. Client sends ACK, and the connection is established.",
  },
  {
    question: "What is a socket?",
    answer:
      "A socket is one endpoint of a two-way communication link between two programs over a network. It consists of an IP address and port number, used to send and receive data.",
  },
  {
    question: "What are ports?",
    answer:
      "Ports are numerical IDs for specific processes or services on a device. For example, web servers use port 80 (HTTP) or 443 (HTTPS) to listen for requests.",
  },
  {
    question: "Explain HTTP vs HTTPS.",
    answer:
      "HTTP is the basic protocol for transmitting web pages. HTTPS is the secure version that uses encryption (SSL/TLS) to protect data exchanged between the browser and server.",
  },
  {
    question: "What is SSL/TLS?",
    answer:
      "SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are protocols that encrypt data sent over the internet to ensure privacy and data integrity between client and server.",
  },
  {
    question: "What is a proxy server?",
    answer:
      "A proxy server acts as an intermediary between a user and the internet, often used to improve security, filter requests, or cache data for faster access.",
  },
  {
    question: "What is DHCP?",
    answer:
      "Dynamic Host Configuration Protocol (DHCP) automatically assigns IP addresses and other network configuration to devices when they join a network, simplifying management.",
  },
  {
    question: "Explain CSMA/CD.",
    answer:
      "Carrier Sense Multiple Access with Collision Detection (CSMA/CD) is used in Ethernet networks. Devices listen to the network and wait if busy; if two devices send simultaneously causing a collision, they stop and retry after a random time.",
  },
  {
    question: "What is a VPN?",
    answer:
      "A Virtual Private Network (VPN) creates a secure, encrypted connection over the internet, allowing users to send and receive data privately and safely from anywhere.",
  },
  {
    question: "What is bandwidth?",
    answer:
      "Bandwidth is the maximum rate of data transfer over a network connection, often measured in Mbps (megabits per second). Higher bandwidth means more data can be sent quickly.",
  },
  {
    question: "Explain packet switching vs circuit switching.",
    answer:
      "Packet switching sends data in small packets that find their own path, making networks efficient and flexible. Circuit switching creates a dedicated, continuous connection like a phone call, which is less efficient.",
  },
  {
    question: "What is latency?",
    answer:
      "Latency is the time delay between sending a request and receiving a response, affecting the speed of network communication.",
  },
  {
    question: "What is QoS?",
    answer:
      "Quality of Service (QoS) manages network resources by prioritizing certain types of traffic (like video calls) to reduce delay and improve performance.",
  },
  {
    question: "What is multicast vs broadcast?",
    answer:
      "Multicast sends data to a specific group of devices that want it, saving bandwidth. Broadcast sends data to all devices on the network, whether they need it or not.",
  },
  {
    question: "What is ICMP?",
    answer:
      "Internet Control Message Protocol (ICMP) is used for sending error messages and operational information, like the 'ping' command that tests network reachability.",
  },
  {
    question: "What is traceroute?",
    answer:
      "Traceroute is a diagnostic tool that shows the path packets take to reach a destination, listing each router (hop) along the way.",
  },
  {
    question: "What is a VLAN?",
    answer:
      "A Virtual LAN (VLAN) creates separate logical networks within a single physical network, improving security and reducing congestion.",
  },
  {
    question: "Explain flow control.",
    answer:
      "Flow control ensures the sender does not overwhelm the receiver by sending data faster than it can be processed, preventing data loss.",
  },
];
const Cn_question = () => {
    const navigate = useNavigate();
   
 return (
    <div className="min-h-screen px-6 py-10 bg-[#F8F3D9] text-[#504B38]">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/resources")}
          className="mb-6 px-4 py-2 bg-[#B9B28A] text-white rounded hover:bg-[#A09C6D] transition"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold mb-8 text-center">🌐 Computer Networks Interview Questions</h1>
        <div className="space-y-6">
          {cnQuestions.map((item, index) => (
            <div
              key={index}
              className="bg-[#EBE5C2] border-2 border-[#E5DFB9] rounded-xl shadow p-5"
            >
              <h3 className="font-semibold mb-2">
                <span className="text-[#B9B28A]">Q{index + 1}.</span> {item.question}
              </h3>
              <p className="text-[#504B38]/80">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cn_question