import { useState } from "react";

// -------- SAMPLE LESSON DATA --------
const sampleLessons = [
  {
    id: 1,
    title: "What is Sustainable Living?",
    description:
      "Living in a way that reduces harm to the environment by saving resources.",
    content:
      "Sustainable living means making choices that protect the planet — saving electricity, reducing plastic usage, using less water, and caring for nature.",
    quiz: {
      question: "Sustainable living means?",
      options: [
        "Using more electricity",
        "Reducing harm to environment",
        "Throwing plastic anywhere",
      ],
      answer: 1,
    },
  },
  {
    id: 2,
    title: "Waste Reduction",
    description: "Reduce, reuse, recycle. Say no to single-use plastic.",
    content:
      "Waste reduction means reducing trash. You can reduce waste by reusing items, recycling, carrying cloth bags, and avoiding plastic.",
    quiz: {
      question: "Which reduces waste?",
      options: ["Using more plastic", "Burning waste", "Reusing items"],
      answer: 2,
    },
  },
  {
    id: 3,
    title: "Saving Energy",
    description: "Turn off lights, use fans wisely, do not waste electricity.",
    content:
      "Save energy by switching off appliances when not in use, using LED bulbs, and using natural light.",
    quiz: {
      question: "How can we save energy?",
      options: [
        "Leaving lights on",
        "Switching off appliances",
        "Using AC unnecessarily",
      ],
      answer: 1,
    },
  },
];

// -------- SAMPLE PROJECT DATA --------
const sampleProjects = [
  {
    id: 1,
    title: "No Plastic Day",
    details: "Avoid using any single-use plastic for one whole day.",
  },
  {
    id: 2,
    title: "Plant a Tree",
    details: "Plant one tree or small plant near your home or college.",
  },
];

// -------- LOGIN PAGE --------
function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onLogin({ name, isAdmin });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#e8f5e9",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "12px",
          width: "320px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ marginBottom: "12px", color: "green", fontSize: "22px" }}>
          EcoLearn
        </h1>

        <p style={{ fontSize: "13px", marginBottom: "16px" }}>
          Sustainable Living Education Platform
        </p>

        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: "14px" }}>
            Your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "6px 8px",
                marginTop: "4px",
                marginBottom: "10px",
              }}
              placeholder="Enter your name"
            />
          </label>

          <label
            style={{
              fontSize: "13px",
              display: "block",
              marginBottom: "12px",
            }}
          >
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            {"  "}I am an admin
          </label>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "8px 0",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

// -------- TOP BAR --------
function TopBar({ user, onBack, onLogout, showBack }) {
  return (
    <div
      style={{
        padding: "12px 24px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Arial",
        background: "white",
      }}
    >
      <div>
        {showBack && (
          <button
            onClick={onBack}
            style={{
              marginRight: "10px",
              padding: "4px 8px",
              borderRadius: "6px",
              border: "1px solid #999",
              background: "white",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>
        )}
        <strong>EcoLearn</strong>
        <span style={{ fontSize: "12px", color: "#555" }}>
          {" "} | Hello, {user.name}
        </span>
      </div>

      <button
        onClick={onLogout}
        style={{
          padding: "6px 10px",
          borderRadius: "8px",
          border: "1px solid #999",
          background: "white",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

// -------- DASHBOARD --------
function Dashboard({ user, onChangeView, ecoPoints }) {
  return (
    <div style={{ padding: "24px", fontFamily: "Arial", background: "white" }}>
      <h2>Dashboard</h2>
      <p style={{ fontSize: "13px", color: "#555" }}>
        Welcome to your sustainable learning journey!
      </p>

      <div
        style={{
          padding: "12px",
          border: "1px solid green",
          borderRadius: "10px",
          marginBottom: "20px",
          background: "#e8f5e9",
          width: "200px",
        }}
      >
        <strong>Eco Points:</strong> {ecoPoints}
      </div>

      {!user.isAdmin && (
        <div style={{ display: "flex", gap: "20px" }}>
          
          {/* Lessons Card */}
          <button
            onClick={() => onChangeView("lessons")}
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              flex: 1,
              cursor: "pointer",
              background: "white",
            }}
          >
            <h3>Lessons</h3>
            <p style={{ fontSize: "12px" }}>
              Learn about eco-friendly habits.
            </p>
          </button>

          {/* Projects Card */}
          <button
            onClick={() => onChangeView("projects")}
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              flex: 1,
              cursor: "pointer",
              background: "white",
            }}
          >
            <h3>Projects</h3>
            <p style={{ fontSize: "12px" }}>Join eco challenges.</p>
          </button>

          {/* Progress Card */}
          <button
            onClick={() => onChangeView("progress")}
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              flex: 1,
              cursor: "pointer",
              background: "white",
            }}
          >
            <h3>Progress</h3>
            <p style={{ fontSize: "12px" }}>See your journey.</p>
          </button>

        </div>
      )}

      {user.isAdmin && (
        <div>
          <h3>Admin Panel</h3>
          <p>You can add or manage lessons (future feature).</p>
        </div>
      )}
    </div>
  );
}

// -------- LESSON LIST --------
function LessonsPage({ onOpenLesson }) {
  return (
    <div style={{ padding: "24px", fontFamily: "Arial", background: "white" }}>
      <h2>Lessons</h2>
      <ul>
        {sampleLessons.map((lesson) => (
          <li
            key={lesson.id}
            onClick={() => onOpenLesson(lesson)}
            style={{
              marginBottom: "12px",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              background: "white",
              cursor: "pointer",
            }}
          >
            <strong>{lesson.title}</strong>
            <p style={{ fontSize: "12px" }}>{lesson.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// -------- LESSON DETAIL --------
function LessonDetailPage({ lesson, onBack, onComplete }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    const correct = selected === lesson.quiz.answer;
    onComplete(correct);
  };

  return (
    <div style={{ padding: "24px", fontFamily: "Arial", background: "white" }}>
      <button
        onClick={onBack}
        style={{
          padding: "6px 10px",
          borderRadius: "8px",
          border: "1px solid #999",
          background: "white",
        }}
      >
        ← Back
      </button>

      <h2>{lesson.title}</h2>
      <p style={{ fontSize: "14px" }}>{lesson.content}</p>

      <h3>Quiz</h3>
      <p>{lesson.quiz.question}</p>

      {lesson.quiz.options.map((opt, i) => (
        <label key={i} style={{ display: "block", marginBottom: "6px" }}>
          <input
            type="radio"
            name="quiz" 
            disabled={submitted}
            onChange={() => setSelected(i)}
          />
          {" "}
          {opt}
        </label>
      ))}

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          style={{
            marginTop: "10px",
            padding: "6px 10px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      )}

      {submitted && (
        <p style={{ marginTop: "10px", color: "green" }}>
          {selected === lesson.quiz.answer
            ? "Correct! You earned 10 eco points."
            : "Incorrect, but lesson completed."}
        </p>
      )}
    </div>
  );
}

// -------- PROJECT PAGE --------
function ProjectsPage() {
  return (
    <div style={{ padding: "24px", fontFamily: "Arial", background: "white" }}>
      <h2>Projects</h2>
      <ul>
        {sampleProjects.map((p) => (
          <li
            key={p.id}
            style={{
              marginBottom: "12px",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              background: "white",
            }}
          >
            <strong>{p.title}</strong>
            <p style={{ fontSize: "13px" }}>{p.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// -------- PROGRESS PAGE --------
function ProgressPage({ ecoPoints }) {
  return (
    <div style={{ padding: "24px", fontFamily: "Arial", background: "white" }}>
      <h2>Your Progress</h2>
      <p style={{ fontSize: "14px" }}>
        Eco Points: <strong>{ecoPoints}</strong>
      </p>
      <p style={{ marginTop: "10px", fontSize: "13px" }}>
        More lessons = more eco points.
      </p>
    </div>
  );
}

// -------- MAIN APP --------
export default function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState("dashboard");
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [ecoPoints, setEcoPoints] = useState(0);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  const logout = () => {
    setUser(null);
    setView("dashboard");
    setEcoPoints(0);
  };

  const handleLessonOpen = (lesson) => {
    setSelectedLesson(lesson);
    setView("lessonDetail");
  };

  const handleLessonComplete = (correct) => {
    if (correct) {
      setEcoPoints((prev) => prev + 10);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "white" }}>
      <TopBar
        user={user}
        showBack={view !== "dashboard"}
        onBack={() => setView("dashboard")}
        onLogout={logout}
      />

      {view === "dashboard" && (
        <Dashboard user={user} onChangeView={setView}  

 ecoPoints={ecoPoints} />
      )}

      {view === "lessons" && (
        <LessonsPage onOpenLesson={handleLessonOpen} />
      )}

      {view === "lessonDetail" && selectedLesson && (
        <LessonDetailPage
          lesson={selectedLesson}
          onBack={() => setView("lessons")}
          onComplete={handleLessonComplete}
        />
      )}

      {view === "projects" && <ProjectsPage />}

      {view === "progress" && <ProgressPage ecoPoints={ecoPoints} />}
    </div>
  );
}
