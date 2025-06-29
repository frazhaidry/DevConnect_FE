import {  useNavigate } from "react-router-dom";


const questions = [

  {
    q: "Tell me about yourself.",
    a: "I am a [Your Degree] student from [Your College]. I enjoy working on tech projects and learning new skills. I’m currently preparing for placements and looking for opportunities to grow and contribute.",
  },
  {
    q: "What are your strengths?",
    a: "I’m a quick learner, adaptable, and I manage my time well. I also enjoy working in teams and solving problems.",
  },
  {
    q: "What are your weaknesses?",
    a: "Sometimes I overthink before starting a task, but I’m learning to manage my time better and stay focused.",
  },
  {
    q: "Why should we hire you?",
    a: "I’m eager to learn, a good team player, and committed to delivering quality work. I believe I can contribute positively to your company.",
  },
  {
    q: "Where do you see yourself in 5 years?",
    a: "I see myself as a skilled professional growing within the company, taking on more responsibilities and helping others succeed.",
  },
  {
    q: "What do you know about our company?",
    a: "Your company is known for its innovation and commitment to excellence in [industry]. I admire your projects such as [project/product].",
  },
  {
    q: "Why do you want to work here?",
    a: "I want to work here because I align with your company values and want to be part of your innovative team to grow my skills.",
  },
  {
    q: "Describe a challenging situation and how you handled it.",
    a: "In a group project, we had conflicts on approach. I facilitated open communication, listened to everyone, and helped find a compromise to complete the project successfully.",
  },
  {
    q: "How do you handle stress and pressure?",
    a: "I prioritize my tasks, stay organized, and take short breaks to maintain focus. I also communicate with my team to manage expectations.",
  },
  {
    q: "Tell me about a time you worked in a team.",
    a: "In my last project, I collaborated with teammates by dividing tasks according to our strengths and maintained regular communication to meet deadlines.",
  },
  {
    q: "What motivates you?",
    a: "I’m motivated by learning new skills, achieving goals, and working on projects that have real impact.",
  },
  {
    q: "How do you handle criticism?",
    a: "I take criticism positively, see it as an opportunity to improve, and apply the feedback to do better next time.",
  },
  {
    q: "What is your greatest achievement?",
    a: "Completing my final year project successfully, despite tight deadlines, by planning well and working diligently with my team.",
  },
  {
    q: "Tell me about a time you showed leadership.",
    a: "I led a study group during exam preparation, organizing sessions and motivating members to stay consistent.",
  },
  {
    q: "How do you prioritize your work?",
    a: "I list tasks by urgency and importance, focus on high-priority items first, and break big tasks into smaller manageable parts.",
  },
  {
    q: "What are your hobbies?",
    a: "I enjoy reading, coding small projects, and playing sports like cricket to stay active and refreshed.",
  },
  {
    q: "Are you willing to relocate?",
    a: "Yes, I am open to relocating if it offers better opportunities and helps my professional growth.",
  },
  {
    q: "What do you know about the role you applied for?",
    a: "The role involves [key responsibilities]. I am excited because my skills in [related skills] match the job requirements.",
  },
  {
    q: "How do you handle conflicts at work?",
    a: "I listen to all parties involved, stay calm, and work towards a solution that benefits the team and project.",
  },
  {
    q: "What are your salary expectations?",
    a: "I am looking for a fair compensation based on my skills and market standards, but I’m flexible to discuss based on the opportunity.",
  },
  {
    q: "What do you do if you don’t know the answer to something?",
    a: "I research the topic, ask for help if needed, and learn continuously to improve my knowledge.",
  },
  {
    q: "How do you stay updated with industry trends?",
    a: "I follow relevant blogs, attend webinars, and participate in workshops to keep my knowledge current.",
  },
  {
    q: "Describe a time you failed and how you handled it.",
    a: "I once missed a deadline due to poor planning. I learned to organize my schedule better and set reminders for tasks.",
  },
  {
    q: "Do you prefer working independently or in a team?",
    a: "I enjoy both. I’m comfortable working independently but also value teamwork for sharing ideas and better solutions.",
  },
  {
    q: "Do you have any questions for us?",
    a: "Yes, could you tell me more about the team culture and opportunities for growth in the company?",
  },
];

const InterviewQuestions = () => {
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
        <h1 className="text-3xl font-bold mb-8 text-center">🎯 Top 25 HR Interview Questions & Answers</h1>
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-[#EBE5C2] border-2 border-[#E5DFB9] rounded-xl shadow p-5"
            >
              <h3 className="font-semibold mb-2">
                <span className="text-[#B9B28A]">Q{index + 1}.</span> {item.q}
              </h3>
              <p className="text-[#504B38]/80">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewQuestions;
