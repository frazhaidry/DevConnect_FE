import { useNavigate } from "react-router-dom";

const osQuestions = [
  {
    question: "What is an Operating System?",
    answer: "An operating system (OS) is system software that manages computer hardware, software resources, and provides services to computer programs. It serves as a bridge between the user and the hardware."
  },
  {
    question: "What are the main functions of an Operating System?",
    answer: "The main functions include process management, memory management, file system management, device management, and handling system security and user interface."
  },
  {
    question: "What is a process?",
    answer: "A process is an active program in execution. It consists of the program code, current activity (value of the Program Counter, registers), a stack, and a data section."
  },
  {
    question: "What is the difference between a process and a thread?",
    answer: "A process is an independent program with its own memory space, while a thread is a lightweight sub-process that shares memory with other threads in the same process. Threads are faster to create and switch between than processes."
  },
  {
    question: "What is multitasking?",
    answer: "Multitasking is the ability of an operating system to run multiple tasks (processes) at the same time by switching between them so quickly that they appear to run simultaneously."
  },
  {
    question: "What is context switching?",
    answer: "Context switching is the process of storing and restoring the state (context) of a CPU so that execution can be resumed from the same point later. It enables multitasking by switching between processes."
  },
  {
    question: "What are the different types of operating systems?",
    answer: "Types include batch OS, time-sharing OS, distributed OS, network OS, and real-time OS. Each serves different use-cases and user requirements."
  },
  {
    question: "What is a deadlock?",
    answer: "A deadlock is a situation where a group of processes are stuck waiting for each other to release resources, and none of them can proceed. It often occurs in multi-processing systems."
  },
  {
    question: "What are the necessary conditions for a deadlock?",
    answer: "Four necessary conditions: mutual exclusion, hold and wait, no preemption, and circular wait. If all are true, deadlock may occur."
  },
  {
    question: "How can deadlock be prevented?",
    answer: "Deadlock can be prevented by breaking one of the four necessary conditions, such as avoiding hold and wait or allowing resource preemption."
  },
  {
    question: "What is virtual memory?",
    answer: "Virtual memory is a memory management technique that gives the illusion of a large main memory by using disk space as extension. It allows execution of processes that may not be completely in memory."
  },
  {
    question: "What is paging?",
    answer: "Paging is a memory management scheme where memory is divided into fixed-size pages. Pages from logical memory are mapped to frames in physical memory to avoid fragmentation."
  },
  {
    question: "What is segmentation?",
    answer: "Segmentation is a memory management scheme that divides memory into variable-sized segments based on logical divisions like functions or data structures."
  },
  {
    question: "What is the difference between paging and segmentation?",
    answer: "Paging divides memory into fixed-size blocks, while segmentation divides it into logical, variable-sized segments. Paging avoids fragmentation, segmentation follows program structure."
  },
  {
    question: "What is a page fault?",
    answer: "A page fault occurs when a program tries to access a page that is not currently in physical memory. The OS then loads the required page from disk into memory."
  },
  {
    question: "What is a system call?",
    answer: "A system call is a way for programs to interact with the OS. It allows user programs to request services such as file access, process control, and communication."
  },
  {
    question: "What is scheduling?",
    answer: "Scheduling is the method by which the OS decides which process runs next. The goal is to maximize CPU utilization and ensure fairness and responsiveness."
  },
  {
    question: "What are different scheduling algorithms?",
    answer: "Common algorithms include First Come First Serve (FCFS), Shortest Job Next (SJN), Priority Scheduling, Round Robin (RR), and Multilevel Queue Scheduling."
  },
  {
    question: "What is Round Robin scheduling?",
    answer: "Round Robin assigns a fixed time slice to each process in the ready queue. If a process doesn’t finish in its time slice, it’s moved to the end of the queue. This provides fairness among processes."
  },
  {
    question: "What is starvation?",
    answer: "Starvation is a condition where a process waits indefinitely to get a resource because other high-priority processes are constantly being served."
  },
  {
    question: "What is aging in OS?",
    answer: "Aging is a technique to prevent starvation by gradually increasing the priority of a waiting process, ensuring it eventually gets scheduled."
  },
  {
    question: "What is a critical section?",
    answer: "A critical section is a part of a program that accesses shared resources and must not be concurrently accessed by more than one thread or process."
  },
  {
    question: "What are semaphores?",
    answer: "Semaphores are synchronization tools used to control access to shared resources by multiple processes in a concurrent system, avoiding race conditions and deadlocks."
  },
  {
    question: "What is a race condition?",
    answer: "A race condition occurs when multiple processes access shared data at the same time and the outcome depends on the timing of their execution, potentially causing inconsistent results."
  },
  {
    question: "What is inter-process communication (IPC)?",
    answer: "IPC is a mechanism that allows processes to communicate and synchronize their actions when running concurrently. Common methods include message passing and shared memory."
  },
  {
    question: "What is a daemon process?",
    answer: "A daemon is a background process that runs continuously and handles periodic service requests, such as printing or email notifications."
  },
  {
    question: "What is the booting process?",
    answer: "Booting is the startup process that loads the operating system into memory after a computer is powered on. It involves BIOS/UEFI, bootloader, and kernel loading."
  },
  {
    question: "What is the kernel?",
    answer: "The kernel is the core part of an OS that manages system resources, hardware, and communication between hardware and software. It operates in a privileged mode with complete control."
  },
  {
    question: "What is swapping?",
    answer: "Swapping is a memory management technique where processes are moved between RAM and disk to ensure more processes can be executed concurrently."
  },
  {
    question: "What is thrashing?",
    answer: "Thrashing happens when the system spends more time swapping pages in and out of memory than executing actual processes, leading to poor performance."
  }
];

const Os_question = () => {
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
        <h1 className="text-3xl font-bold mb-8 text-center">🖥️ Operating System Interview Questions</h1>
        <div className="space-y-6">
          {osQuestions.map((item, index) => (
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

export default Os_question