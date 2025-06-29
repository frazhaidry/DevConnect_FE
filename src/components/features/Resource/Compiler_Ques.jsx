import { useNavigate } from "react-router-dom"

const compiler = [
  {
    question: "What is the OSI model? Explain its layers.",
    answer: "The OSI model is a conceptual framework that standardizes network communication into 7 layers: 1. Physical – transmits raw bits over physical medium, 2. Data Link – handles MAC addressing and error detection, 3. Network – manages IP addressing and routing, 4. Transport – ensures reliable transmission via TCP/UDP, 5. Session – manages sessions between applications, 6. Presentation – handles data translation, encryption, compression, 7. Application – provides end-user services like email, file transfer, etc."
  },
  {
    question: "What is the difference between TCP and UDP?",
    answer: "TCP is connection-oriented, reliable, and ensures ordered delivery, making it suitable for applications like web browsing and file transfer. UDP is connectionless, faster, but less reliable, used for real-time apps like video streaming and gaming."
  },
  {
    question: "What is IP addressing?",
    answer: "IP addressing is the method of assigning unique identifiers (IPv4 or IPv6) to devices on a network so they can communicate. It includes network and host components to identify the device and its network."
  },
  {
    question: "What is a MAC address?",
    answer: "A MAC (Media Access Control) address is a unique identifier assigned to a network interface card (NIC) for communication within the same local network. It operates at the Data Link layer."
  },
  {
    question: "What is a subnet mask?",
    answer: "A subnet mask separates an IP address into network and host parts. It determines which part of the address is used to identify the network and which part identifies the host."
  },
  {
    question: "What is ARP?",
    answer: "ARP (Address Resolution Protocol) resolves an IP address to a MAC address in a local area network by broadcasting a request and receiving the corresponding MAC address from the target device."
  },
  {
    question: "What is DNS?",
    answer: "DNS (Domain Name System) translates human-friendly domain names (like www.example.com) into IP addresses used by computers to identify each other on the network."
  },
  {
    question: "What is a router and how is it different from a switch?",
    answer: "A router connects different networks and forwards packets based on IP addresses. A switch connects devices within the same network and forwards data based on MAC addresses."
  },
  {
    question: "What is a firewall?",
    answer: "A firewall is a network security device or software that monitors and filters incoming and outgoing traffic based on pre-defined security rules, protecting systems from unauthorized access."
  },
  {
    question: "What is NAT?",
    answer: "NAT (Network Address Translation) maps private local IP addresses to a public IP address before packets are forwarded to the internet. It conserves public IPs and adds a layer of security."
  },
  {
    question: "What is a socket?",
    answer: "A socket is an endpoint for sending or receiving data across a network. It is defined by a combination of IP address and port number, and is used for inter-process communication."
  },
  {
    question: "What is a port number?",
    answer: "Port numbers identify specific processes or services on a device. For example, HTTP uses port 80 and HTTPS uses port 443. They help direct data to the right application."
  },
  {
    question: "Explain the TCP 3-way handshake.",
    answer: "TCP establishes a connection using a 3-way handshake: 1. Client sends SYN, 2. Server replies with SYN-ACK, 3. Client responds with ACK. This ensures both parties are ready to communicate."
  },
  {
    question: "What is DHCP and how does it work?",
    answer: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to devices on a network. It simplifies IP management and prevents conflicts by ensuring each device gets a unique address."
  },
  {
    question: "What is latency in networking?",
    answer: "Latency is the delay between sending a request and receiving a response over the network. It is measured in milliseconds and affects real-time applications like video calls and gaming."
  },
  {
    question: "What is bandwidth?",
    answer: "Bandwidth is the maximum data transfer rate of a network or internet connection, measured in Mbps or Gbps. Higher bandwidth allows more data to be transferred in a given time."
  },
  {
    question: "What is the difference between IPv4 and IPv6?",
    answer: "IPv4 uses 32-bit addressing allowing ~4.3 billion addresses, while IPv6 uses 128-bit addressing, allowing virtually unlimited unique addresses. IPv6 also offers better routing and security features."
  },
  {
    question: "What is packet switching?",
    answer: "Packet switching breaks data into small packets and routes them independently to the destination. It is efficient, supports multiple users, and is the basis of the internet’s communication model."
  },
  {
    question: "What is QoS in networking?",
    answer: "Quality of Service (QoS) prioritizes certain types of network traffic (like video or voice) to ensure low latency and guaranteed bandwidth for critical applications."
  },
  {
    question: "What is a VPN?",
    answer: "A VPN (Virtual Private Network) creates a secure, encrypted tunnel between the user and the internet, protecting data from eavesdropping and enabling access to restricted content."
  }
];



const Compiler_Ques = () => {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen px-6 py-10 bg-[#F8F3D9] text-[#504B38]">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-[#B9B28A] text-white rounded hover:bg-[#A09C6D] transition"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold mb-8 text-center">
          🧠 Compiler Design Interview Questions
        </h1>

        <div className="space-y-6">
          {compiler.map((item, index) => (
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
};

export default Compiler_Ques