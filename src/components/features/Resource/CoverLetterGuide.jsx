import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const coverLetters = [
  {
    title: "Internship Cover Letter (Summer Internship)",
    content: `Dear [Hiring Manager],

I am a [Your Degree] student at [Your College], excited to apply for the Summer Internship position at [Company Name]. I have developed strong foundational skills in [relevant skills], and I am eager to apply them in a real-world environment.

This internship will provide me the perfect opportunity to learn from industry experts and contribute effectively to your team. I am enthusiastic, hardworking, and ready to take on challenges.

You can review my work and skills through my project portfolio here: [Project Link].

Thank you for your time and consideration.

Sincerely,
[Your Name]`,
  },
  {
    title: "Internship Cover Letter (Winter Internship / Virtual Internship)",
    content: `Dear [Hiring Manager],

I am writing to express my interest in the Winter Internship at [Company Name]. Given the current situation, I am also open to virtual internships.

I am currently pursuing [Your Degree] at [Your College], with experience in [skills/projects]. I am confident that my dedication and eagerness to learn will make me a valuable addition to your team.

Please find my resume and projects for your reference: [Resume Link], [Project Link].

Thank you for considering my application.

Best regards,
[Your Name]`,
  },
  {
    title: "Full-Time Cover Letter (Entry-Level Position)",
    content: `Dear [Hiring Manager],

I recently graduated with a degree in [Your Degree] from [Your College] and am very interested in the [Job Title] position at [Company Name].

During my academic career, I worked on projects involving [technologies/skills]. I am highly motivated, adaptable, and ready to contribute positively to your organization.

You can review my portfolio and resume here: [Portfolio Link], [Resume Link].

I look forward to the possibility of discussing how I can help achieve your company goals.

Best wishes,
[Your Name]`,
  },
  {
    title: "Full-Time Cover Letter (Experienced Candidate)",
    content: `Dear [Hiring Manager],

With [X years] of experience in [industry/role], I am eager to apply for the [Job Title] position at [Company Name].

My background in [skills/experience] has equipped me with the ability to deliver results and work collaboratively. I am confident that my expertise aligns well with your team's needs.

For more information on my work, please see my portfolio: [Portfolio Link].

Thank you for your consideration. I hope to contribute to your company’s continued success.

Sincerely,
[Your Name]`,
  },
  {
    title: "On-Campus Placement Cover Letter",
    content: `Dear Placement Officer,

I am excited to participate in the upcoming on-campus placement drive for [Company Name]. As a [Your Degree] student, I have been preparing through coursework and projects relevant to this industry.

I am confident that my technical skills and teamwork experience will help me perform well during the recruitment process.

You can view my resume and projects here: [Resume Link], [Project Link].

Thank you for your support.

Sincerely,
[Your Name]`,
  },
  {
    title: "Off-Campus Placement Cover Letter",
    content: `Dear [Hiring Manager],

I am writing to express my interest in the [Job Title] position at [Company Name]. Though this is an off-campus application, I am confident in my ability to contribute effectively.

My degree in [Your Degree] and hands-on experience with [projects/internships] have prepared me well for this role.

Please find my portfolio and resume attached: [Portfolio Link], [Resume Link].

Thank you for your time. I look forward to your response.

Regards,
[Your Name]`,
  },
  {
    title: "Remote Job Application Cover Letter",
    content: `Dear [Hiring Manager],

I am excited to apply for the remote [Job Title] position at [Company Name]. I have experience managing projects independently and collaborating remotely.

With my skills in [relevant skills], I am confident I can deliver quality work while working remotely.

You can find my portfolio and resume here: [Portfolio Link], [Resume Link].

Thank you for considering my application.

Best,
[Your Name]`,
  },
  {
    title: "Career Change Cover Letter",
    content: `Dear [Hiring Manager],

After spending [X years] in [previous industry/role], I am enthusiastic about transitioning into [new industry/role]. I have recently completed [courses/certifications] to build relevant skills.

I am eager to bring my strong work ethic, adaptability, and fresh perspective to [Company Name].

Please review my updated resume and project work here: [Resume Link], [Project Link].

Thank you for your consideration.

Sincerely,
[Your Name]`,
  },
  {
    title: "Freelance / Project-Based Role Cover Letter",
    content: `Dear [Hiring Manager],

I am writing to express interest in the freelance/project-based role you posted. With experience in [skills/technologies], I can provide high-quality results within deadlines.

I am committed to clear communication and delivering value through my work.

You can see examples of my work here: [Portfolio Link].

Looking forward to collaborating.

Best regards,
[Your Name]`,
  },
  {
    title: "General Cover Letter Tips",
    content: `- Customize your cover letter for each job application.  
- Keep it concise and focused on how you can add value.  
- Highlight your relevant skills and experiences.  
- Proofread carefully for grammar and clarity.  
- End with a clear call to action (e.g., looking forward to an interview).  
- Always include links to your resume, portfolio, or project work as proof of your skills.`,
  },
];


const CoverLetterGuide = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

   return (
    <div className="min-h-screen bg-[#F8F3D9] text-[#504B38] px-4 py-8 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-[#B9B28A] text-white rounded hover:bg-[#A09C6D] transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-8 text-center">📝 Expanded Cover Letter Guide</h1>

      <div className="space-y-6 max-w-full sm:max-w-3xl mx-auto">
        {coverLetters.map((letter, idx) => (
          <div key={idx} className="border-2 border-[#E5DFB9] rounded-xl shadow bg-[#EBE5C2]">
            <button
              className="w-full text-left px-5 py-4 font-semibold text-lg flex justify-between items-center focus:outline-none"
              onClick={() => toggleExpand(idx)}
              aria-expanded={expandedIndex === idx}
              aria-controls={`section-content-${idx}`}
              id={`section-header-${idx}`}
            >
              {letter.title}
              <span className="text-[#B9B28A] text-2xl select-none">
                {expandedIndex === idx ? "−" : "+"}
              </span>
            </button>

            {expandedIndex === idx && (
              <div
                id={`section-content-${idx}`}
                role="region"
                aria-labelledby={`section-header-${idx}`}
                className="px-5 pb-6 whitespace-pre-wrap text-[#504B38]/90 break-words"
                style={{ whiteSpace: "pre-line" }}
              >
                {letter.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoverLetterGuide;
